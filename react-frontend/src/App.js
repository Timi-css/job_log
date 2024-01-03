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
import { Error, Loader } from "./common";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
      <div className="main-App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HeroSection />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/error" exact element={<Error />} />
          <Route path="/loader" exact element={<Loader />} />
          <Route path="/NewApplication" exact element={<NewApplication />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
