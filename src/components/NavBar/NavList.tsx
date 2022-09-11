import cx from "classnames";
import { ROUTES } from "../../Router";
import ActionItem from "./ActionItem";
import Divider from "../Divider";

interface INavList {
  className?: string;
}

const NavList: React.FC<INavList> = ({ className }) => {
  const { home, ...routes } = ROUTES;

  return (
    <ul className={cx(className)}>
      <li>
        <ActionItem label={home.name} to={home.path} />
        <Divider />
        {Object.values(routes).map((route) => (
          <ActionItem label={route.name} to={route.path} />
        ))}
      </li>
    </ul>
  );
};

export default NavList;
