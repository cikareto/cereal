import cx from "classnames";

interface IQuote {
  quote: string[];
  disabled: boolean;
  currentPos: number;
  isError: boolean;
}

const Quote: React.FC<IQuote> = ({ quote, disabled, currentPos, isError }) => {
  return (
    <>
      {quote.map((letter, i) => (
        <span
          key={`quote-${i}`}
          className={cx("text-2xl text-txt-default font-medium", {
            "text-txt-note": disabled,
            "animate-underline-blink underline-offset-4":
              currentPos === i && !disabled,
            "text-sky-blue": i < currentPos,
            "text-error": currentPos === i && isError,
          })}
        >
          {letter}
        </span>
      ))}
    </>
  );
};

export default Quote;
