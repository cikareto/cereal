import { useState } from "react";
import cx from "classnames";
import { ReactComponent as HamburgerIcon } from "../../assets/hamburger-icon.svg";

import NavList from "./NavList";
import GithubLink from "../Link/GithubLink";

const NavBarMobile: React.FC<{ className?: string }> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={className}>
      <div className="flex justify-between">
        <button onClick={() => setIsOpen(!isOpen)}>
          <HamburgerIcon />
        </button>

        <GithubLink />
      </div>

      <div
        className={cx("w-full", {
          block: isOpen,
          hidden: !isOpen,
        })}
      >
        <NavList className="mt-5" />
      </div>
    </nav>
  );
};

export default NavBarMobile;
