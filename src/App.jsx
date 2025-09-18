import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage"
import HomePage from "./Pages/Home";
import AllProjects from "./Pages/AllProjects";
import Gallery from "./Pages/Gallery";
import Works from "./Pages/Works";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/works" element={<Works />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/allprojects" element={<AllProjects />} />  {/* All Projects page */}
        <Route  path="gallery"  element={<Gallery />} />
      </Routes>
    </Router>
    
    
  );
}
