import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Divider,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import {
  DirectionsWalk,
  Favorite,
  SelfImprovement,
  Timeline,
  HealthAndSafety,
  Star,
} from "@mui/icons-material";

const Walking = () => {
  const activities = [
    {
      icon: <DirectionsWalk fontSize="large" color="primary" />,
      title: "Gait Enhancement Training",
      description:
        "Improve your walking pattern, stride length, and overall balance with guided physiotherapy exercises.",
    },
    {
      icon: <Favorite fontSize="large" color="primary" />,
      title: "Endurance Walking",
      description:
        "Build cardiovascular endurance safely with progressive walking routines tailored to your condition.",
    },
    {
      icon: <SelfImprovement fontSize="large" color="primary" />,
      title: "Posture & Core Stability",
      description:
        "Correct walking posture and strengthen your core to prevent future injuries and imbalance.",
    },
    {
      icon: <Timeline fontSize="large" color="primary" />,
      title: "Progress Monitoring",
      description:
        "Track improvements in walking speed, step frequency, and control through regular assessments.",
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
    <Box sx={{ pt: 10, pb: 12, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* ===================== HERO SECTION ===================== */}
        <Grid container spacing={6} alignItems="center">
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

        {/* ===================== ACTIVITY CARDS ===================== */}
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
                    {item.icon}
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

        {/* ===================== SECTION DIVIDER ===================== */}
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
          {gallery.map((act) => (
            <Grid size={{ xs: 12, lg: 4 }}  key={act.id}>
              <Card
                sx={{
                  cursor: "pointer",
                  borderRadius: 3,
                  transition: "0.3s",
                }}
                elevation={3}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={act.image}
                  alt={act.title}
                  sx={{
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.04)" },
                  }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {act.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {act.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Walking;
