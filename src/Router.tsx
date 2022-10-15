import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SpiralPrime from "./pages/SpiralPrime";
import TypeRacer from "./pages/TypeRacer";

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

const Router = () => {
  return (
    <Routes>
      {Object.values(ROUTES).map(({ name, component, ...rest }: TRoute) => (
        <Route key={`route-${name}`} element={component} {...rest} />
      ))}
    </Routes>
  );
};

export default Router;
