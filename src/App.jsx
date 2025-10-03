import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import the new component
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

// featured Works Gallery

import CondominiumApartment42Gallery from "./Pages/Featured works Gallery Pages/CondominiumApartment42Gallery";
import ConceptualSkyscraper25Gallery from "./Pages/Featured works Gallery Pages/ConceptualSkyscraper25Gallery"
import CondominiumKarmaResidenceGallery from "./Pages/Featured works Gallery Pages/CondominiumKarmaResidenceGallery"
import HouseForStaycationGallery from "./Pages/Featured works Gallery Pages/HouseForStaycationGallery";
import LuxuryGatedCommunityGallery from "./Pages/Featured works Gallery Pages/LuxuryGatedCommunityGallery";
import HouseCADGallery from "./Pages/Featured works Gallery Pages/HouseCADGallery";
import Residence7Gallery from "./Pages/Featured works Gallery Pages/Residence7Gallery";
import MixedUseApartmentAstralisGallery from "./Pages/Featured works Gallery Pages/MixedUseApartmentAstralisGallery";
import FarmhouseGallery from "./Pages/Featured works Gallery Pages/FarmhouseGallery";
import ForestResortGallery from "./Pages/Featured works Gallery Pages/ForestResortGallery";

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

        {/* gallery Pages For Our Projects */}
        <Route path="gallery" element={<Gallery />} />
        <Route path="/projects/villa22" element={<Villa22Gallery />} />
        <Route path="/projects/flatinteriors221" element={<FlatInteriors221Gallery />} />
        <Route path="/projects/villa44" element={<Villa44Gallery />} />
        <Route path="/projects/sandalwoodvilla" element={<SandalwoodVillaGallery />} />
        <Route path="/projects/residence11" element={<Residence11Gallery />} />
        <Route path="/projects/residence622" element={<Residence622Gallery />} />
        <Route path="/projects/privatevilla" element={<PrivateVillaGallery />} />
        <Route path="/projects/villaentrance" element={<VillaEntranceGallery />} />


          {/* gallery Pages For Featured Works*/}
        <Route path="/projects/condominium-apartment42" element={<CondominiumApartment42Gallery />} />
        <Route path="/projects/conceptual-skyscraper25" element={<ConceptualSkyscraper25Gallery />} />
        <Route path="/projects/condominium-karmaResidence" element={<CondominiumKarmaResidenceGallery />} />
        <Route path="/projects/housefor-staycation" element={<HouseForStaycationGallery />} />
         <Route path="/projects/luxurygated-community" element={<LuxuryGatedCommunityGallery />} />
          <Route path="/projects/house-cad" element={<HouseCADGallery />} />
           <Route path="/projects/residence7" element={<Residence7Gallery />} />
           <Route path="/projects/mixeduse-apartment-astralis" element={<MixedUseApartmentAstralisGallery />} />
           <Route path="/projects/farmhouse" element={<FarmhouseGallery />} />
           <Route path="/projects/forest-resort-gallery" element={<ForestResortGallery />} />
        
      </Routes>
    </Router>
  );
}
