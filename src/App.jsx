import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import Works from "./Pages/Works";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AllWorks from "./Pages/AllWorks";
import Gallery from "./Pages/Gallery";

// Home Project Gallery
import Villa22Gallery from "./Pages/HomeProjectsGalleryPages/Villa22Gallery";
import FlatInteriors221Gallery from "./Pages/HomeProjectsGalleryPages/FlatInteriors221Gallery";
import Villa44Gallery from "./Pages/HomeProjectsGalleryPages/Villa44Gallery";
import SandalwoodVillaGallery from "./Pages/HomeProjectsGalleryPages/SandalwoodVillaGallery";
import Residence11Gallery from "./Pages/HomeProjectsGalleryPages/Residence11Gallery";
import Residence622Gallery from "./Pages/HomeProjectsGalleryPages/Residence622Gallery ";
import PrivateVillaGallery from "./Pages/HomeProjectsGalleryPages/PrivateVillaGallery";
import VillaEntranceGallery from "./Pages/HomeProjectsGalleryPages/VillaEntranceGallery";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allworks" element={<AllWorks />} />

        {/*Home Projects Gallery Pages */}
        <Route path="gallery" element={<Gallery />} />
        <Route path="/projects/villa22" element={<Villa22Gallery />} />
        <Route
          path="/projects/flatinteriors221"
          element={<FlatInteriors221Gallery />}
        />
        <Route path="/projects/villa44" element={<Villa44Gallery />} />
        <Route
          path="/projects/sandalwoodvilla"
          element={<SandalwoodVillaGallery />}
        />
        <Route path="/projects/residence11" element={<Residence11Gallery />} />
        <Route
          path="/projects/residence622"
          element={<Residence622Gallery />}
        />

        <Route
          path="/projects/privatevilla"
          element={<PrivateVillaGallery />}
        />

        <Route
          path="/projects/villaentrance"
          element={<VillaEntranceGallery />}
        />


      </Routes>
    </Router>
  );
}
