import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./Pages/Events/Events"
import Home from "./Pages/Home/Home"
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
