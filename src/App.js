import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import Home from "./Pages/Main/Home";
import SIgnUp from "./Pages/Sign Up/SIgnUp";
import Protected from "./Comps/protected";
import "./Pages/LogIn/LogIn.css";
import Profile from "./Pages/Profile/Profile";
import Checkout from "./Pages/Checkout.js/Checkout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route
            path="/Home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route path="/register" element={<SIgnUp />} />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/checkout"
            element={
              <Protected>
                <Checkout />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
