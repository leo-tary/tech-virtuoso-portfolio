import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Expertise from "./components/Expertise";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Expertise />
      <Social />
    </>
  );
}

export default App;
