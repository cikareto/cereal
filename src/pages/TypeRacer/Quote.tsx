import cx from "classnames";

interface IQuote {
  quote: string[];
  currentPos: number;
  isError: boolean;
}

const Quote: React.FC<IQuote> = ({ quote, currentPos, isError }) => {
  return (
    <>
      {quote.map((letter, i) => (
        <span
          key={`quote-${i}`}
          className={cx("text-2xl text-txt-default font-medium", {
            "animate-underline-blink underline-offset-4": currentPos === i,
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
