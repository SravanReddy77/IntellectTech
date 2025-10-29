import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutPreview from "./components/AboutPreview";
import About from "./pages/About";
import ITServices from "./pages/ITServices.jsx";
import ForTalent from "./pages/ForTalent";
import WhoWeServe from "./pages/WhoWeServe";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";

function Home(){
    return (
    <div className = "App">
      <Navbar />
      <HeroSection />
      <AboutPreview />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/for-talent" element={<ForTalent />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
