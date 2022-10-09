import "./styles.scss";

const EnterButton: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  return (
    <button
      id="btn-enter"
      type="submit"
      disabled={disabled}
      className="btn-enter bg-gray-200 px-3 rounded-md flex items-center focus:outline-none focus:bg-gray-300 hover:bg-gray-300 disabled:bg-gray-300"
    >
      <span>Enter</span> <div className="icon pl-2">↵</div>
    </button>
  );
};

export default EnterButton;
