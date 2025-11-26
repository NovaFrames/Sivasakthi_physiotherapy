import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Divider
} from "@mui/material";

import {
  DirectionsWalk,
  HealthAndSafety,
  Star,
} from "@mui/icons-material";
import GalleryCard from "../../Components/Card/GalleryCard";

const Walking = () => {
  const activities = [
    {
      id: 1,
      title: "Balance Training",
      description: "Improve stability and prevent falls through targeted exercises",
      image: "https://images.unsplash.com/photo-1669316714681-5fe047de58b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2lvdGhlcmFwaHklMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "Strength Building",
      description: "Progressive resistance training for functional movement",
      image: "https://images.unsplash.com/photo-1717500251997-80b234166d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGh5c2lvdGhlcmFwaHklMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "Mobility Exercises",
      description: "Enhance range of motion and flexibility for daily activities",
      image: "https://images.unsplash.com/photo-1627257058769-0a99529e4312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGh5c2lvdGhlcmFwaHklMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      title: "Gait Training",
      description: "Restore normal walking patterns and improve coordination",
      image: "https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBoeXNpb3RoZXJhcGh5JTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      title: "Core Stabilization",
      description: "Strengthen your core for better posture and movement control",
      image: "https://images.unsplash.com/photo-1622878327584-40ac62f6a97b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBoeXNpb3RoZXJhcGh5JTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      title: "Sport-Specific Training",
      description: "Return to your favorite activities with confidence",
      image: "https://images.unsplash.com/photo-1580281657702-257584239a55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBoeXNpb3RoZXJhcGh5JTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
const gallery = [
    {
      id: 1,
      title: "Balance Training",
      description: "Improve stability and prevent falls through targeted exercises",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Strength Building",
      description: "Progressive resistance training for functional movement",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Mobility Exercises",
      description: "Enhance range of motion and flexibility for daily activities",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Gait Training",
      description: "Restore normal walking patterns and improve coordination",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Core Stabilization",
      description: "Strengthen your core for better posture and movement control",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Sport-Specific Training",
      description: "Return to your favorite activities with confidence",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    },
  ];
  return (
    <Box sx={{ pb: 12, backgroundColor: "#fff" }}>
      <Box
        sx={{
          position: "relative",
          py: { xs: 12, md: 20 },
          textAlign: "center",
          color: "white",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589104759909-e355f8999f7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhdGllbnQlMjBldmVudHN8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Walking Activities
          </Typography>

          <Typography variant="h6" maxWidth="700px" mx="auto" color="grey.200">
            Regain independence and improve your quality of life through targeted
            functional training
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg">
        {/* ===================== HERO SECTION ===================== */}
        <Grid container spacing={6} pt={10} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Typography
              variant="h3"
              fontWeight={700}
              color="primary.main"
              gutterBottom
            >
              Walking Activities & Rehabilitation
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
              Our walking rehabilitation program helps patients regain balance,
              coordination, and confidence in movement. Designed by expert
              physiotherapists, each session focuses on improving mobility,
              strength, and endurance.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              component="img"
              src="https://media.istockphoto.com/id/1390886692/photo/homecare-visit-with-a-senior-gentleman.webp?a=1&b=1&s=612x612&w=0&k=20&c=K3W2P20OsSurAmUE53FCfMB6S4VgHOUc4CxvJ4q1ZAU="
              alt="Walking physiotherapy"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 3,
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            color="primary.main"
            mb={5}
          >
            Our Walking Activity Programs
          </Typography>

          <Grid container spacing={4}>
            {activities.map((item, index) => (
              <Grid size={{ xs: 12, lg: 6 }} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    height: "100%",
                  }}
                >
                  <Stack direction="row" spacing={3} alignItems="flex-start">
                    <Box>
                      <Typography variant="h6" fontWeight={700} mb={1}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ===================== IMAGE + TEXT SECTION ===================== */}
        <Box sx={{ mt: 12 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                component="img"
                src="https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=YwTJIt9-LX4Acp_3ng6BD3_pke2MHOqNMqMgR2adg_g="
                alt="Physiotherapy walking training"
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  objectFit: "cover",
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography variant="h4" fontWeight={700} mb={2}>
                Why Walking Therapy Is Important?
              </Typography>

              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <HealthAndSafety color="primary" />
                  <Typography>
                    Helps recover from injuries, surgeries, and neurological
                    conditions.
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Star color="primary" />
                  <Typography>
                    Improves balance, stability, and leg strength effectively.
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <DirectionsWalk color="primary" />
                  <Typography>
                    Enhances your overall mobility and walking independence.
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />

        <Box>
          <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={5}
          color="primary.main"
        >
          Our Walking Gallery
        </Typography>

        <Grid container spacing={4}>
          <GalleryCard activities={gallery} />
        </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Walking;
