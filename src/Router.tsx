import { ComponentType } from "react";
import { Routes, Route } from "react-router-dom";
import Bar from "./pages/Bar";
import Baz from "./pages/Baz";
import Foo from "./pages/Foo";
import Home from "./pages/Home";
import SpiralPrime from "./pages/SpiralPrime";

type TRoute = {
  path: string;
  name: string;
  component: ComponentType;
  exact?: boolean;
  skipHeader?: boolean;
};

interface IRoute {
  home: TRoute;
  prime: TRoute;
  foo: TRoute;
  bar: TRoute;
  baz: TRoute;
}

export const ROUTES: IRoute = {
  home: { path: "/", name: "About ✨", component: Home, skipHeader: true },
  prime: { path: "/prime", name: "Prime", component: SpiralPrime },
  foo: { path: "/foo", name: "Foo", component: Foo },
  bar: { path: "/bar", name: "Bar", component: Bar },
  baz: { path: "/baz", name: "Baz", component: Baz },
};

const Router = () => {
  return (
    <Routes>
      {Object.values(ROUTES).map(
        ({ name, skipHeader, component, ...rest }: TRoute) => (
          <Route
            key={`route-${name}`}
            element={withHeader(component)(name, skipHeader)}
            {...rest}
          />
        )
      )}
    </Routes>
  );
};

const withHeader = (Component: ComponentType) => {
  return (routeName: string, skipHeader: boolean = false) => (
    <>
      {!skipHeader && <h2 className="mb-2">{routeName}</h2>}
      <Component />
    </>
  );
};

export default Router;
