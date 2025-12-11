import Testimonials from "../../Components/Testimonials/Testimonals";
import Team from "../../Components/Team/Team";
import Faq from "../../Components/Faq/Faq";
import ServiceHome from "../../Components/ServiceHome/ServiceHome";
// import Welcome from "../../Components/Welcome/Welcome";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import HeroSection from "../../Components/Home/HeroSection";
import AboutSection from "../../Components/Home/AboutSection";
import MissionVisionSection from "../../Components/Home/MissionAndVision";
// import FacilitiesSection from "../../Components/Home/FacilitiesSection";
import TheraphyList from "../../Components/Home/TheraphyList";

const Home = () => {


    return (
        <div style={{ marginTop: '-110px' }}>
            <HeroSection />
            <AboutSection />
            <MissionVisionSection />
            <TheraphyList />
            <WhyChooseUs />
            {/* <FacilitiesSection /> */}
            <ServiceHome />
            <Team />
            <Testimonials />
            <Faq />
        </div>
    );
};

export default Home;
