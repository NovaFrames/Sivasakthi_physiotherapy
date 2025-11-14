import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Paper
} from '@mui/material';

const Team = () => {
  const teamMembers = [
    {
      name: 'N Saquib Lachoo',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
    },
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
      <Container maxWidth="xl">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="CB Physiotherapy Team"
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
          {teamMembers.map((member, index) => (
            <Grid key={index} size={{ xs: 12, lg: 3 }} >
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "box-shadow 0.3s",
                  bgcolor: "background.paper",
                }}
              >
                <Box sx={{ position: "relative", paddingTop: "100%" }}>
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      position: "absolute",
                      borderRadius: 5,
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box sx={{ textAlign: "center", p: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "text.primary",
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default Team;
