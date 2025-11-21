import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import MissionVisionSection from "./MissionAndVision";
import FacilitiesSection from "./FacilitiesSection";


const Homepage = () => (
    <Box>
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <FacilitiesSection />
    </Box>
);

export default Homepage;