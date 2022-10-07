import { EFormFieldPattern } from "./types";

export interface IFormErrorValidator {
  required?: boolean;
  min?: number;
  max?: number;
}

interface IErrorValidator {
  validate?: IFormErrorValidator;
  value?: string | number;
}

interface IPatternValidator {
  pattern?: EFormFieldPattern;
  value: string | number;
}

const getErrorMessage = (fieldName: string) => ({
  required: () => `${fieldName} must have a value.`,
  min: (value: number) => `${fieldName} must have a value >= ${value}`,
  max: (value: number) => `${fieldName} must have a value <= ${value}`,
});

const Validator = (fieldName: string) => {
  return {
    checkError({ validate, value }: IErrorValidator) {
      let errorMessage = "";

      if (!validate) {
        return { isValid: true, isInvalid: false, errorMessage };
      }

      const error = getErrorMessage(fieldName);

      if (validate?.required && !value) {
        errorMessage = error.required();
      } else if (validate?.min && (!value || +value < validate.min)) {
        errorMessage = error.min(validate.min);
      } else if (validate?.max && (!value || +value > validate.max)) {
        errorMessage = error.max(validate.max);
      } else {
        return { isValid: true, isInvalid: false, errorMessage };
      }

      return { isValid: false, isInvalid: true, errorMessage };
    },
    checkPattern({ pattern, value }: IPatternValidator) {
      if (!pattern) {
        return { isValid: true, isInvalid: false };
      }

      if (pattern === EFormFieldPattern.NUMBER) {
        const _val = value.toString();

        const matched = /^(0|[1-9]\d*)$/.test(_val);

        return { isValid: matched, isInvalid: !matched };
      }

      return { isValid: true, isInvalid: false };
    },
  };
};

export default Validator;
