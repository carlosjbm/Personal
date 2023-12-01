import "./App.css";
import "../src/assets/ResetPRO.css";
import Home from "./components/Home";
import About from "./components/About_Me";
import Footer from "./components/Footer";
import Profolio from "./components/Profolio";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Profolio />
      <Footer />
    </div>
  );
}

export default App;
