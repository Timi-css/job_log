import "./App.css";
import { Body, Footer, NavBar, HeroSection, SignUp } from "./components";

function App() {
  return (
    <div className="App">
      <div className="main-App">
        <NavBar />
        <HeroSection />
        <Body />
        <SignUp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
