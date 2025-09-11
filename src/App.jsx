import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LanndingPage";
import HomePage from "./Pages/Home/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
