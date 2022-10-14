import GithubLink from "../../components/Link/GithubLink";
import NavList from "./NavList";

export const NavBarDesktopHeader: React.FC = () => (
  <div className="hidden lg:flex col-span-full mb-14">
    <GithubLink className="mr-3 mt-1" width={52} />
    <div>
      <h1 className="leading-tight">Cereal</h1>
      <p className="ml-4 font-medium">Just For Fun</p>
    </div>
  </div>
);

const NavBarDesktop: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav className={className}>
      <NavList />
    </nav>
  );
};

export default NavBarDesktop;
