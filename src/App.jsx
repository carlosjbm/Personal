import "./App.css";
import "../src/assets/ResetPRO.css";
import Home from "./components/Home";
import About from "./components/About_Me";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
