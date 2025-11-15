import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Rating,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";

const Welcome = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f9f7", minHeight: "100vh", py: 10 }}>
      <Container maxWidth="lg">
        {/* Heading Section */}
        <Box textAlign="center" maxWidth="800px" mx="auto" mb={6}>
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ color: "#0b2f2c", mb: 2 }}
          >
            The Future of Manufacturing
          </Typography>

          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ color: "#0b2f2c" }}
          >
            with <span style={{ color: "#00897b" }}>Latest Technology</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2 }}
          >
            Expert tech to elevate your manufacturing. Let’s take your business further.
          </Typography>

          <Box mt={4} display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#064e3b",
                px: 4,
                py: 1.4,
                borderRadius: 2,
                "&:hover": { bgcolor: "#033026" },
              }}
            >
              Book Appointment
            </Button>

            <Button variant="outlined" sx={{ px: 4, py: 1.4, borderRadius: 2 }}>
              Contact
            </Button>
          </Box>

          {/* Rating Section */}
          <Box mt={3} display="flex" justifyContent="center" alignItems="center">
            <Rating
              value={5}
              readOnly
              icon={<StarIcon fontSize="small" />}
            />
            <Typography ml={1} fontWeight={600}>
              5.0
            </Typography>
            <Typography variant="body2" color="text.secondary" ml={1}>
              from 80+ reviews
            </Typography>
          </Box>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} alignItems="stretch">
          {/* Image Box */}
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1581092446328-c28a00a01d6d?auto=format&fit=crop&w=600&q=80"
                alt="manufacturing"
                width="100%"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </Paper>
          </Grid>

          {/* Clients Box */}
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                bgcolor: "#0b3c3a",
                color: "#fff",
                height: "100%",
              }}
            >
              <Typography variant="h4" fontWeight={700}>
                10+
              </Typography>
              <Typography variant="body2" mt={1}>
                Years of Industry Experience
              </Typography>
            </Paper>
          </Grid>

          {/* Projects Box */}
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Paper
              elevation={1}
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <SettingsInputComponentIcon color="success" />
                <Typography fontWeight={600}>Total Projects</Typography>
              </Box>

              <Typography variant="h4" fontWeight={800}>
                100000+
              </Typography>

              <Typography variant="body2" color="success.main" mt={1}>
                ↑ Increase of 126 this month
              </Typography>
            </Paper>
          </Grid>

          {/* Dedicated Service Box */}
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                bgcolor: "#d7f7c8",
                height: "100%",
              }}
            >
              <Typography variant="h3" fontWeight={800} color="#064e3b">
                6+
              </Typography>
              <Typography variant="body2" mt={1}>
                Years of Dedicated Service
              </Typography>
            </Paper>
          </Grid>
        

        {/* Bottom Right Card */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: "#0b2f2c",
              color: "#fff",
            }}
          >
            <AssessmentIcon />
            <Typography variant="h6" mt={2} fontWeight={600}>
              Achieve Optimal Efficiency and Boost Productivity
            </Typography>
          </Paper>
        </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Welcome;
