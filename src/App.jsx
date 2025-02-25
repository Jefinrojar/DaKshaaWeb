import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./Pages/Events/Events"
import Home from "./Pages/Home/Home"
import "./App.css";
import ParticlesComponent from "./Pages/Layout/ParticlesComponent";

function App() {
  return (
    <Router>
      <ParticlesComponent id="particlesBG" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );       
}  

export default App;
