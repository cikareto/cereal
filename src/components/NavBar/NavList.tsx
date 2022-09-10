import React, { useState } from "react";
import cx from "classnames";
import ActionItem from "./ActionItem";
import Divider from "../Divider";

interface IItem {
  active: boolean;
  onClick: () => void;
}

const items = [
  (props: IItem) => <ActionItem label="About me" {...props} />,
  () => <Divider />,
  (props: IItem) => <ActionItem label="foo" {...props} />,
  (props: IItem) => <ActionItem label="bar" {...props} />,
  (props: IItem) => <ActionItem label="baz" {...props} />,
];

interface INavList {
  className?: string;
}

const NavList: React.FC<INavList> = ({ className }) => {
  const [activeItem, setActiveItem] = useState<Number>(0);

  return (
    <ul className={cx(className)}>
      {items.map((item, i) => (
        <li>
          {item({
            onClick: () => setActiveItem(i),
            active: i === activeItem,
          })}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
