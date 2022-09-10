import { useState } from "react";
import cx from "classnames";
import { ReactComponent as HamburgerIcon } from "../../assets/hamburger-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/github-icon.svg";
import NavList from "./NavList";

const NavBarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="p-gp md:hidden border-b border-divider">
      <div className="flex justify-between">
        <button onClick={() => setIsOpen(!isOpen)}>
          <HamburgerIcon />
        </button>

        <a href="https://github.com/cikareto" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
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
