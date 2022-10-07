import cx from "classnames";
import ErrorMessage from "../../ErrorMessage";
import { TFormField } from "../../types";

interface IInput extends TFormField {
  type: string;
}

const Input: React.FC<IInput> = ({
  label,
  id,
  ariaLabel,
  validate,

  isInvalid,
  errorMessage,

  children,
  ...rest
}) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-blue text-xs font-bold mb-2 pl-4"
        htmlFor={id}
      >
        {label} {validate?.required && "*"}
      </label>
      <div className="flex gap-3">
        <div
          className={cx("border-b", {
            "border-error": isInvalid,
            "border-blue": !isInvalid,
          })}
        >
          <input
            id={id}
            className="appearance-none block bg-transparent text-white border-none rounded leading-tight focus:outline-none py-1 px-4"
            aria-label={ariaLabel}
            {...rest}
          />
        </div>
        {children}
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};

export default Input;
