import "./App.css";
import {
  Body,
  Footer,
  NavBar,
  HeroSection,
  SignUp,
  Dashboard,
  Login,
  NewApplication,
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
          <Route path="/Login" exact element={<Login />} />
          <Route path="/NewApplication" exact element={<NewApplication />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
