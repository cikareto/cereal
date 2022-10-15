import cx from "classnames";

interface ISignal {
  color: "red" | "yellow" | "green";
  disabled: boolean;
}

const Signal: React.FC<ISignal> = ({ color, disabled }) => {
  const colors = {
    red: "bg-[#C1292E]",
    yellow: "bg-[#F1D302]",
    green: "bg-[#81C300]",
  };

  return (
    <div
      className={cx(
        "h-5 w-5 rounded-full",
        { [colors[color]]: !disabled },
        { "bg-dark": disabled }
      )}
    />
  );
};

export default Signal;
