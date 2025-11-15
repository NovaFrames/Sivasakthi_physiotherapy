// PhysioClinicWebsite.tsx
import { Box } from '@mui/material';
import HeroSection from '../../Components/About/HeroSection';
import AboutClinic from '../../Components/About/AboutClinic';
import TeamSection from '../../Components/About/TeamSection';
import FacilitiesSection from '../../Components/About/FacilitiesSection';
import FounderSection from '../../Components/About/FounderSection';
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