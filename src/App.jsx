import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Solution from "./pages/Solution/Solution";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solution />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
