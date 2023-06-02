import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import "./App.css";

// import pages & components
import Home from "./pages/home-page.jsx";
import Login from "./pages/login-page.jsx";
import Signup from "./pages/signup-page.jsx"
import NavBar from "./components/NavBar.jsx";
import Survey from "./pages/Survey.jsx";
import Results from "./pages/results-page.jsx";

function App() {
  const { user } = useAuthContext()
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/"/>} />
            <Route path="/survey" element={ user ? <Survey /> : <Navigate to="/login"/> } />
            <Route path="/results" element={user ? <Results /> : <Navigate to="/login"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
