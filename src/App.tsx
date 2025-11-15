import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import GaitSchool from "./Pages/Service/GaitSchool";
import FunctionalActivities from "./Pages/Service/FunctionalActivities";
import Walking from "./Pages/Service/Walking";
import Instruments from "./Pages/Service/Instruments";
import Physiotheraphy from "./Pages/Physiotherapy/Physiotherapy";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/gait-school" element={<GaitSchool />} />
        <Route path="/service/functional-activity" element={<FunctionalActivities />} />
        <Route path="/service/walking" element={<Walking />} />
        <Route path="/service/instruments" element={<Instruments />} />
        <Route path="/physiotheraphy" element={<Physiotheraphy />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
