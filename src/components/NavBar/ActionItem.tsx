import cx from "classnames";

export interface IActionItem {
  label: string;
  active: boolean;
  onClick: () => void;
}

const ActionItem: React.FC<IActionItem> = ({ label, active, onClick }) => {
  return (
    <div className="flex relative ml-2">
      <div
        className={cx(
          "bg-blue w-1 h-5 rounded absolute top-[4px] -left-[8px]",
          {
            hidden: !active,
          }
        )}
      />
      <button
        className={cx(
          "w-full py-1 px-3 rounded-md text-left text-sm text-txt-default font-medium hover:bg-action-item-bg--hover",
          {
            "font-bold bg-action-item-bg--active": active,
          }
        )}
        onClick={onClick}
      >
        <span>{label}</span>
      </button>
    </div>
  );
};

export default ActionItem;
