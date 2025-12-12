import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import GaitSchool from "./Pages/Service/GaitSchool";
import FunctionalActivities from "./Pages/Service/FunctionalActivities";
import Walking from "./Pages/Service/Walking";
import Instruments from "./Pages/Service/Instruments";
import Physiotheraphy from "./Pages/Physiotherapy/Physiotherapy";
import Specialties from "./Pages/Service/Specialties";
import PosturalCorrectionExercise from "./Pages/Service/PosturalCorrectionExercise";
import Contact from "./Pages/Contact/Contact";
import BookAppoitment from "./Pages/BookAppoitment/BookAppoitment";
import Gallery from "./Pages/Gallery/Gallery";
import ChatWidget from "./chatbot/ChatWidget";

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/gait-school" element={<GaitSchool />} />
        <Route path="/service/functional-activity" element={<FunctionalActivities />} />
        <Route path="/service/walking" element={<Walking />} />
        <Route path="/service/instruments" element={<Instruments />} />
        <Route path="/physiotheraphy" element={<Physiotheraphy />} />
        <Route path="/service/specialties" element={<Specialties />} />
        <Route path="/service/postural-correction-exercise" element={<PosturalCorrectionExercise />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" element={<BookAppoitment />} />
      </Routes>
      <ChatWidget />
      <Footer />
    </>
  );
}

export default App;
