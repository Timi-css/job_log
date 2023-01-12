import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="main-App">
        <NavBar />
        <HeroSection />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
