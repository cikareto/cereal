import { SyntheticEvent } from "react";

interface ISpiralPrimeForm {
  onSubmit: (e: SyntheticEvent) => void
}

const SpiralPrimeForm: React.FC<ISpiralPrimeForm> = ({
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label
        className="block uppercase tracking-wide text-txt-default text-xs font-bold mb-2"
        htmlFor="spiral-prime_size"
      >
        Size
      </label>
      <input
        id="spiral-prime_size"
        className="appearance-none block bg-gray-200 text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white py-1 px-4"
        name="size"
        type="number"
        aria-label="Prime Size"
      />
    </form>
  );
};

export default SpiralPrimeForm;
