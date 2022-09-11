import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

const NavBar: React.FC = () => {
  return (
    <>
      <NavBarMobile className="p-gp lg:hidden border-b border-divider"/>
      <NavBarDesktop className="hidden lg:block col-span-3 xl:col-span-2" />
    </>
  );
};

export default NavBar;
