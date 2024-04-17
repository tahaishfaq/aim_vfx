import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Solution from "./pages/Solution/Solution";
import { TeamPage } from "./components/Team Page/TeamPage";
import { Navbar } from "./components/Navbar/Navbar";
import AboutUsPage from "./components/About Us Page/AboutUsPage";
import Signin from "./components/Signin/Signin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team-page" element={<TeamPage />} />
          <Route path="/solutions" element={<Solution />} />
          <Route path="/about-us-page" element={<AboutUsPage />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
