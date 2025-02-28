import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Events from "./Pages/Events/Events"
import Home from "./Pages/Home/Home"
import "./App.css";
import ParticlesComponent from "./Pages/Layout/ParticlesComponent";
import Navbar from "./Pages/Layout/Navbar";
import GuestLecture from "./Pages/GuestLecture/GuestLecture";
import Footer from "./Pages/Layout/Footer";
import Workshop from "./Pages/Workshop/Workshop";
import Sponsors  from "./Pages/Sponsors/Sponsors";
import Contact from "./Pages/Home/Components/Contact";
import Harmonics from "./Pages/Harmonics/Harmonics";
import EventDetails from "./Pages/Events/EventDetails/EventDetails";
import Teams from "./Pages/Teams/Teams";
import Startup from "./Pages/Startup/Startup";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Router>
      <ParticlesComponent id="particlesBG" />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/events/conference" element={<GuestLecture />} />
        <Route path="/events/workshop" element={<Workshop />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/events/hormonics" element={<Harmonics/>} />
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/startups" element={<Startup />} />
      </Routes>
      <Footer/>
    </Router>
  );       
}  

export default App;
