import GithubLink from "../Link/GithubLink";
import NavList from "./NavList";

const NavBarDesktop: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav className={className}>
      <div className="flex mb-12">
        <GithubLink className="mr-3 mt-1" width={52} />
        <div>
          <h1 className="leading-tight">Cereal</h1>
          <p className="ml-4 font-medium">Just For Fun</p>
        </div>
      </div>
      <NavList />
    </nav>
  );
};

export default NavBarDesktop;
