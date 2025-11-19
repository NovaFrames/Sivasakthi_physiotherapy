import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import TeamCard from '../Card/TeamCard';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Soumyendro',
      role: 'Clinical Advisor / Consultant',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
    },
    {
      name: 'Ankit Mathur',
      role: 'Advisor / Investor',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr Deepanshu Khatri',
      role: 'Head Operations',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
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
          <TeamCard therapists={teamMembers}/>
        </Grid>

      </Container>
    </Box>
  );
};

export default Team;
