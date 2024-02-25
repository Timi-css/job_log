import "./App.css";
import {
  Footer,
  NavBar,
  NavBar2,
  HeroSection,
  SignUp,
  Dashboard,
  Login,
  NewApplication,
  Profile,
  JobDetail,
} from "./components";
import { Error, Loader } from "./common";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

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
        <NavBar2 />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/NewApplication"
            element={<NewApplication />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/job-detail/:applicationId" element={<JobDetail />} />
        </Routes>
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;
