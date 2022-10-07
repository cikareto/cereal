import {
  Children,
  cloneElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { EFormFieldPattern, IField } from "./types";
import Validator, { IFormErrorValidator } from "./validator";

interface IForm {
  children: ReactNode | ReactNode[];
  fields: Record<string, IField>;
  setFields: (fields: Record<string, IField>) => void;
  onSubmit: (data: Record<string, IField>) => void;
}

const isFormInvalid = (fields: Record<string, IField>) =>
  Object.values(fields).some(
    (field: IField) => field.isInvalid || !field.isTouched
  );

export const useForm = (fields: Record<string, IField>) => {
  const [_fields, _setFields] = useState<Record<string, IField>>(fields);

  return {
    fields: _fields,
    setFields: _setFields,
    isFormInvalid: isFormInvalid(_fields),
  };
};

const Form: React.FC<IForm> = ({ children, fields, setFields, onSubmit }) => {
  const _onHandleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (isFormInvalid(fields)) {
      // disable
    } else {
      onSubmit(fields);
    }
  };

  const _onHandleChange = useCallback(
    (
        name: string,
        label: string,
        validate: IFormErrorValidator,
        pattern: EFormFieldPattern
      ) =>
      (e: SyntheticEvent) => {
        const { value } = e.target as typeof e.target & {
          value: any;
        };

        const validator = Validator(label);

        const { isInvalid: isPatternInvalid } = validator.checkPattern({
          pattern,
          value,
        });

        if (!!value && isPatternInvalid) {
          return;
        }

        const { isInvalid, errorMessage } = validator.checkError({
          validate,
          value,
        });

        setFields({
          ...fields,
          [name]: {
            value,
            isInvalid,
            isTouched: true,
            errorMessage,
          },
        });
      },
    [fields, setFields]
  );

  const clonedChildren = useMemo(() => {
    const arrChildren = Children.toArray(children);

    return arrChildren.map((_children: any) => {
      const {
        props: { name, label, validate, pattern },
      }: any = _children;

      return cloneElement(_children, {
        onChange: _onHandleChange(name, label, validate, pattern),
        ...fields[name],
      });
    });
  }, [children, _onHandleChange, fields]);

  return <form onSubmit={_onHandleSubmit}>{clonedChildren}</form>;
};

export default Form;
