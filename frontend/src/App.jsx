import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import pages & components
import Home from "./pages/home-page";
import Login from "./pages/login-page";
import Signup from "./pages/signup-page"
import NavBar from "./components/NavBar";
import Survey from "./pages/Survey";

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
            <Route path="/Survey" element={<Survey />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
