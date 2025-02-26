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
import Sponsers from "./Pages/Sponsers/Sponsers";


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
        <Route path="/sponsers" element={<Sponsers />} />
        <Route path="/events/guest-lecture" element={<GuestLecture />} />
        <Route path="/events/workshop" element={<Workshop />} />
        
      </Routes>
      <Footer/>
    </Router>
  );       
}  

export default App;
