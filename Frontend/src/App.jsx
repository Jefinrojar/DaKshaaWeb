import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./Pages/Events/Events"
import Home from "./Pages/Home/Home"
import "./App.css";
import ParticlesComponent from "./Pages/Layout/ParticlesComponent";
import Navbar from "./Pages/Layout/Navbar";
import GuestLecture from "./Pages/GuestLecture/GuestLecture";
function App() {
  return (
    <Router>
      <ParticlesComponent id="particlesBG" />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />

        <Route path="/guest-lecture" element={<GuestLecture />} />
        
      </Routes>
    </Router>
  );       
}  

export default App;
