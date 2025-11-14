import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Paper,
} from "@mui/material";
import HealingIcon from "@mui/icons-material/Healing";
import HomeIcon from "@mui/icons-material/Home";
import SpaIcon from "@mui/icons-material/Spa";
import Header from "../Header/Header";

const colors = {
  primary: "#1a4d4d",
  secondary: "#1a4d4d",
  lightBg: "#1a4d4d",
  cardBg: "#ffffff",
  iconBg: "#F8E9DE",
};

const AboutClinic: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Heading Section */}

        <Header
          title="✤ What Makes Us Different"
          subtitle=" More than therapy - it’s about trust, warmth, and real recovery."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        {/* Main Content Section */}
        <Grid container spacing={4}>
          {/* Left - Image with overlay text */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                height: "100%",
                minHeight: 400,
              }}
            >
              <Box
                component="img"
                src="https://jaiprakashhospitals.com/wp-content/uploads/2024/08/PHYSIOTHERAPY-REHABILITATION-2.webp"
                alt="Physiotherapist"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
                  color: "white",
                  p: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1, lineHeight: 1.2 }}
                >
                  Certified & Experienced Therapists
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#E0E0E0", lineHeight: 1.7 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right - Cards Section */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={3}>
              {/* Top Big Card */}
              <Grid size={{ xs: 12 }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    backgroundColor: colors.primary,
                    height: "100%",
                    color: "white"
                  }}
                >
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: 2,
                            p: 1,
                            display: "flex",
                          }}
                        >
                          <HealingIcon sx={{ color: colors.primary }} />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700 }}
                        >
                          Personalized treatment
                        </Typography>
                      </Stack>

                      <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </Typography>

                      <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Consectetur adipiscing elit.</li>
                        <li>Tempor incididunt ut labore.</li>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              {/* Bottom two small cards */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    height: "100%",
                    backgroundColor: colors.cardBg,
                  }}
                >
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1.5} mb={1.5}>
                      <Box
                        sx={{
                          backgroundColor: colors.primary,
                          borderRadius: 2,
                          p: 1,
                          display: "flex",
                        }}
                      >
                        <HomeIcon sx={{ color: "white" }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "#111" }}
                      >
                        Home care services
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Paper
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    height: "100%",
                    backgroundColor: colors.cardBg,
                  }}
                >
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1.5} mb={1.5}>
                      <Box
                        sx={{
                          backgroundColor: colors.primary,
                          borderRadius: 2,
                          p: 1,
                          display: "flex",
                        }}
                      >
                        <SpaIcon sx={{ color: "white" }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "#111" }}
                      >
                        Long-term recovery
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </Typography>
                  </CardContent>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutClinic;
