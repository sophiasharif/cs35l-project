import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import pages & components
import Home from "./pages/home-page.jsx";
import Login from "./pages/login-page.jsx";
import Signup from "./pages/signup-page.jsx"
import NavBar from "./components/NavBar.jsx";
import Survey from "./pages/Survey.jsx";
import Results from "./pages/results-page.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
