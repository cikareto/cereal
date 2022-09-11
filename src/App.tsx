import { ReactNode } from "react";
import Router from "./Router";

import NavBar, { Header } from "./components/NavBar";

const ContentWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="m-6 lg:m-0 lg:ml-10 lg:col-span-9 xl:col-span-10">
    {children}
  </div>
);

const App = () => {
  return (
    <div className="bg-dark min-h-screen lg:p-md-gp">
      <Header />
      <div className="lg:grid lg:grid-cols-12 ">
        <NavBar />
        <ContentWrapper>
          <Router />
        </ContentWrapper>
      </div>
    </div>
  );
};

export default App;
