import cx from "classnames";
import { ROUTES } from "../../pages/root";
import ActionItem from "./ActionItem";
import Divider from "../../components/Divider";

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
        {Object.values(routes).map(({ name, path }) => (
          <ActionItem key={`nav-item-${name}`} label={name} to={path} />
        ))}
      </li>
    </ul>
  );
};

export default NavList;
