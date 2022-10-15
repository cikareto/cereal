import { ReactNode } from "react";
import "./styles.scss";

interface IEnterButton {
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const EnterButton: React.FC<IEnterButton> = ({
  label = "Enter",
  icon = <div className="icon pl-2">↵</div>,
  disabled,
  onClick,
}) => {
  return (
    <button
      id="btn-enter"
      type="submit"
      disabled={disabled}
      className="btn-enter bg-gray-200 px-3 rounded-md flex items-center focus:outline-none focus:bg-gray-300 hover:bg-gray-300 disabled:bg-gray-300"
      onClick={onClick}
    >
      <span>{label}</span> {icon}
    </button>
  );
};

export default EnterButton;
