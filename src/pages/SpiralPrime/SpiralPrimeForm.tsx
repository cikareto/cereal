import { SyntheticEvent, useState } from "react";
import EnterButton from "../../components/Button/EnterButton";
import ErrorMessage from "../../components/Text/ErrorMessage";

interface ISpiralPrimeForm {
  onSubmit: (value: number) => void;
}

const SpiralPrimeForm: React.FC<ISpiralPrimeForm> = ({ onSubmit }) => {
  const [errorMsg, setErrorMsg] = useState<string>("");

  const isValid = (value: number) => !!value;

  const _onHandleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      size: { value: number };
    };

    const { value } = target.size;

    if (isValid(value)) {
      onSubmit(value);
      setErrorMsg("\u00A0");
    } else {
      setErrorMsg("Size must have a value.");
    }
  };

  return (
    <form onSubmit={_onHandleSubmit}>
      <label
        className="block uppercase tracking-wide text-blue text-xs font-bold mb-2 pl-4"
        htmlFor="spiral-prime_size"
      >
        Size *
      </label>
      <div className="flex gap-3">
        <div className="border-b border-blue">
          <input
            id="spiral-prime_size"
            className="appearance-none block bg-transparent text-white border-none rounded leading-tight focus:outline-none py-1 px-4"
            name="size"
            type="number"
            aria-label="Prime Size"
          />
        </div>
        <EnterButton />
      </div>
      <ErrorMessage>{errorMsg}</ErrorMessage>
    </form>
  );
};

export default SpiralPrimeForm;
