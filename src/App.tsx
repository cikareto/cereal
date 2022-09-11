import "./App.css";
import NavBar from "./components/NavBar";
import Router from "./Router";

function App() {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:p-md-gp bg-dark min-h-screen">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
