import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
