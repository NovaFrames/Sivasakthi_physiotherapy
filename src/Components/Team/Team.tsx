import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import TeamCard from '../Card/TeamCard';
import doctorFemale1 from '../../assets/teams/doctor_female_1.png';
import doctorMale1 from '../../assets/teams/doctor_male_1.png';
import doctorFemale2 from '../../assets/teams/doctor_female_2.png';
import doctorMale2 from '../../assets/teams/doctor_male_2.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Senior Physiotherapist',
      image: doctorFemale1,
      description: 'Specialized in orthopedic rehabilitation with 15+ years of experience in patient care.'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chief Physiotherapist',
      image: doctorMale1,
      description: 'Expert in sports injury rehabilitation and advanced manual therapy techniques.'
    },
    {
      name: 'Dr. Ananya Patel',
      role: 'Pediatric Specialist',
      image: doctorFemale2,
      description: 'Dedicated to pediatric physiotherapy and developmental disorder treatment.'
    },
    {
      name: 'Dr. Vikram Singh',
      role: 'Neurological Specialist',
      image: doctorMale2,
      description: 'Specialized in neurological rehabilitation and stroke recovery programs.'
    }
  ];

  return (
    <Box sx={{ bgcolor: "background.section", py: 8, px: 2 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="Our Team"
            sx={{
              bgcolor: "primary.main",
              color: "#ffffff",
              fontWeight: 500,
              mb: 2,
              px: 2,
              py: 1,
            }}
          />

          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              color: "text.primary",
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              Our Dedicated
            </Box>{" "}
            & Experienced Therapist Team
          </Typography>
        </Box>

        {/* Team Grid */}
        <Grid container spacing={3}>
          <TeamCard therapists={teamMembers} />
        </Grid>

      </Container>
    </Box>
  );
};

export default Team;
