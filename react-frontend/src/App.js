import "./App.css";
import {
  Body,
  Footer,
  NavBar,
  HeroSection,
  SignUp,
  Dashboard,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main-App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HeroSection />} />
          <Route path="/SignUp" exact element={<SignUp />} />
          <Route path="/Dashboard" exact element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
