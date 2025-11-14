// PhysioClinicWebsite.tsx
import { Box } from '@mui/material';
import HeroSection from '../../Components/About/HeroSection';
import AboutClinic from '../../Components/About/AboutClinic';
import TeamSection from '../../Components/About/TeamSection';
import MissionVisionValues from '../../Components/About/MissionVisionValues';
import TreatmentApproach from '../../Components/About/TreatmentApproach';
import ConditionsSection from '../../Components/About/ConditionsSection';
import FacilitiesSection from '../../Components/About/FacilitiesSection';
import AchievementsSection from '../../Components/About/AchievementsSection';
import JourneySection from '../../Components/About/JourneySection';
import FounderSection from '../../Components/About/FounderSection';
import GallerySection from '../../Components/About/GallerySection';
import Testimonials from '../../Components/Testimonials/Testimonals';

const PhysioClinicWebsite = () => {
  return (
    <Box sx={{ backgroundColor: "#f9fafb" }}>
      <HeroSection />
      <AboutClinic />
      <FounderSection />
      <TeamSection />
      <FacilitiesSection />
      <Testimonials />
      {/* <MissionVisionValues /> */}
      {/* <TreatmentApproach /> */}
      {/* <ConditionsSection /> */}
      {/* <AchievementsSection /> */}
      {/* <JourneySection /> */}
      {/* <GallerySection /> */}
    </Box>
  );
};

export default PhysioClinicWebsite;