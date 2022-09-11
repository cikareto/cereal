import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Bar from "./pages/Bar";
import Baz from "./pages/Baz";
import Foo from "./pages/Foo";
import Home from "./pages/Home";

type TRoute = {
  path: string;
  name: string;
  component: ReactNode;
  exact?: boolean;
};

interface IRoute {
  home: TRoute;
  foo: TRoute;
  bar: TRoute;
  baz: TRoute;
}

export const ROUTES: IRoute = {
  home: { path: "/", name: "About me", component: <Home /> },
  foo: { path: "/foo", name: "Foo", component: <Foo /> },
  bar: { path: "/bar", name: "Bar", component: <Bar /> },
  baz: { path: "/baz", name: "Baz", component: <Baz /> },
};

const Router = () => {
  return (
      <Routes>
        {Object.values(ROUTES).map(({ name, component, ...rest }) => (
          <Route key={`route-${name}`} element={component} {...rest} />
        ))}
      </Routes>
  );
};

export default Router;
