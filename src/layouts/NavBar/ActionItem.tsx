import { Link, useLocation } from "react-router-dom";
import cx from "classnames";

export interface IActionItem {
  label: string;
  to: string;
}

const ActionItem: React.FC<IActionItem> = ({ label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div className="flex relative ml-2">
      <div
        className={cx(
          "bg-blue w-1 h-5 rounded absolute top-[4px] -left-[8px]",
          {
            hidden: !isActive,
          }
        )}
      />
      <Link
        className={cx(
          "w-full py-1 px-3 rounded-md text-left text-sm text-txt-default font-medium hover:bg-action-item-bg--hover",
          {
            "font-bold bg-action-item-bg--active": isActive,
          }
        )}
        to={to}
      >
        <span>{label}</span>
      </Link>
    </div>
  );
};

export default ActionItem;
