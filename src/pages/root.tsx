import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import NavBar, { Header } from "../layouts/NavBar";
import Home from "./Home";
import SpiralPrime from "./SpiralPrime";
import TypeRacer from "./TypeRacer";

type TRoute = {
  path: string;
  name: string;
  component: ReactNode;
  exact?: boolean;
};

interface IRoute {
  [route: string]: TRoute;
}

export const ROUTES: IRoute = {
  home: { path: "/", name: "About ✨", component: <Home /> },
  prime: { path: "/prime", name: "Prime", component: <SpiralPrime /> },
  typeRacer: {
    path: "/type-racer",
    name: "Type Racer",
    component: <TypeRacer />,
  },
};

const ContentWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="m-6 lg:m-0 lg:ml-10 lg:col-span-9 xl:col-span-10">
    {children}
  </div>
);

const Root = () => {
  return (
    <div className="bg-dark min-h-screen lg:p-md-gp">
      <Header />
      <div className="lg:grid lg:grid-cols-12 ">
        <NavBar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </div>
    </div>
  );
};

export default Root;
