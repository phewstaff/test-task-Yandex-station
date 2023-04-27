import "./App.scss";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
