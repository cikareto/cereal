import cx from "classnames";

const Divider: React.FC<{ className?: string }> = ({ className }) => {
  return <hr className={cx("border-divider w-full my-5", className)} />;
};

export default Divider;
