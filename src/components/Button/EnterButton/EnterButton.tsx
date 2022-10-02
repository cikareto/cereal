import "./style.css";

const EnterButton: React.FC = () => {
  return (
    <button
      id="btn-enter"
      type="submit"
      className="btn-enter bg-gray-200 px-3 rounded-md flex items-center focus:outline-none focus:bg-gray-300 hover:bg-gray-300"
    >
      <span>Enter</span> <div className="icon pl-2">↵</div>
    </button>
  );
};

export default EnterButton;
