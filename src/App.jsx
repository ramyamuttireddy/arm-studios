import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage"
import Home from "./Pages/Home";
import Works from "./Pages/Works";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AllWorks from "./Pages/AllWorks";
import Gallery from "./Pages/Gallery";
import Villa22Gallery from  "./Pages/Villa22Gallery"
import FlatInteriors221Gallery from "./Pages/FlatInteriors221Gallery";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/home" element={<Home />} />
        <Route path="/works" element={<Works />}  />
         <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/allworks" element={<AllWorks />} />  
        <Route  path="gallery"  element={<Gallery />} />
        <Route path="/projects/villa22" element={<Villa22Gallery />} />
        <Route path="/projects/flatinteriors221" element={<FlatInteriors221Gallery />} />
      </Routes>
    </Router>
    
    
  );
}
