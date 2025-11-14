import {
  Footprints,
  Target,
  Award,
  Clock,
  Calendar,
  CheckCircle,
} from "lucide-react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardMedia,
} from "@mui/material";

const GaitSchool = () => {
  const programs = [
    {
      icon: <Footprints size={34} />,
      title: "Basic Gait Analysis",
      description:
        "Comprehensive assessment of your walking pattern and identification of abnormalities",
      duration: "4 weeks",
      sessions: "8 sessions",
    },
    {
      icon: <Target size={34} />,
      title: "Advanced Gait Correction",
      description:
        "Targeted interventions to correct specific gait deviations and improve efficiency",
      duration: "6 weeks",
      sessions: "12 sessions",
    },
    {
      icon: <Award size={34} />,
      title: "Sports Performance Gait",
      description:
        "Optimize your running and athletic performance through gait enhancement",
      duration: "8 weeks",
      sessions: "16 sessions",
    },
  ];

  const benefits = [
    "Improved walking efficiency",
    "Reduced risk of injuries",
    "Enhanced athletic performance",
    "Better posture and balance",
    "Reduced joint pain",
    "Increased mobility and confidence",
  ];

  return (
    <Box>

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          py: 20,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -2,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            zIndex: -1,
          }}
        />

        <Container maxWidth="md">
          <Typography variant="h2" fontWeight="bold" mb={3}>
            Gait School
          </Typography>
          <Typography variant="h5">
            Master the art of walking. Transform your mobility, reduce pain, and
            enhance your movement quality.
          </Typography>
        </Container>
      </Box>

      {/* INTRO SECTION */}
      <Box sx={{ py: 10, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            {/* LEFT CONTENT */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary.main"
                mb={3}
              >
                What is Gait School?
              </Typography>

              <Typography color="text.secondary" mb={3}>
                Our Gait School is a specialized program designed to analyze,
                correct, and optimize your walking pattern. Using state-of-the-art
                technology and evidence-based techniques, we help you achieve
                efficient, pain-free movement.
              </Typography>

              <Typography color="text.secondary" mb={4}>
                Whether you're recovering from an injury, looking to improve
                athletic performance, or simply want to walk with better form, our
                expert physiotherapists will guide you every step of the way.
              </Typography>

              <Grid container spacing={2}>
                {[
                  "Personalized Assessment",
                  "Expert Guidance",
                  "Proven Results",
                  "Ongoing Support",
                ].map((item, i) => (
                  <Grid size={{ xs: 12, lg: 6 }} key={i}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <CheckCircle color="#0f766e" size={22} />
                      <Typography ml={1}>{item}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* RIGHT IMAGE */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 300, sm: 400, md: 450 },
                  borderRadius: 3,
                  backgroundImage: `url('https://media.istockphoto.com/id/1302923059/photo/doctor-and-patient-are-discussing-at-clinic-showing-report-in-computer-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=hbewUEfbDbj2OVK6NLkzuq3JMqMjGlkhH3QCW-FGyC8=')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>


      {/* PROGRAMS SECTION */}
      <Box sx={{ py: 10, backgroundColor: "rgba(0,150,136,0.05)" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Our Gait Programs
            </Typography>
            <Typography color="text.secondary" variant="h6">
              Choose from our specialized programs designed to meet your goals.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {programs.map((program, index) => (
              <Grid size={{ xs: 12, lg: 4 }} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      backgroundColor: "#134E4A",
                      borderRadius: 3,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 3,
                      color: "white",
                    }}
                  >
                    {program.icon}
                  </Box>

                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    {program.title}
                  </Typography>

                  <Typography color="text.secondary" mb={3}>
                    {program.description}
                  </Typography>

                  <Box mb={3}>
                    <Box display="flex" alignItems="center" mb={1}>
                      <Clock size={20} />
                      <Typography ml={1}>
                        Duration: {program.duration}
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center">
                      <Calendar size={20} />
                      <Typography ml={1}>{program.sessions}</Typography>
                    </Box>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ py: 1.5, borderRadius: 2 }}
                  >
                    Learn More
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* BENEFITS SECTION */}
      <Box sx={{ py: 10, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography variant="h4" fontWeight="bold" mb={3}>
                Benefits of Gait Training
              </Typography>

              {benefits.map((b, i) => (
                <Box key={i} display="flex" alignItems="center" mb={2}>
                  <CheckCircle color="green" size={24} />
                  <Typography ml={2} color="text.primary">
                    {b}
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }} sx={{ position: "relative" }}>
              <Card sx={{ borderRadius: 4, }}>
                <CardMedia
                  component="img"
                  image="https://plus.unsplash.com/premium_photo-1710467003443-4dcf21bf58fe?w=600&auto=format"
                  alt="Gait Benefits"
                />
              </Card>

              <Box
                sx={{
                  position: "absolute",
                  bottom: -20,
                  left: -20,
                  backgroundColor: "primary.main",
                  color: "#fff",
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  95%
                </Typography>
                <Typography>Success Rate</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default GaitSchool;
