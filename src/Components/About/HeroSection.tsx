import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Groups";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const colors = {
  primary: "#1a4d4d", // deep green
  cardLight: "#FFFFFF",
  white: "#FFFFFF",
};

const HeroSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              {/* Section Header */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <GroupIcon sx={{ color: colors.primary }} />
                <Typography variant="subtitle1" sx={{ color: colors.primary, fontWeight: 600 }}>
                  Our Team
                </Typography>
              </Stack>

              {/* Title */}
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "#000", lineHeight: 1.3 }}
              >
                We’re Here to Support Your{" "}
                <Box component="span" sx={{ display: "block" }}>
                  Recovery Every Step of the Way
                </Box>
              </Typography>

              {/* Paragraph */}
              <Typography variant="body1" sx={{ color: "#555", mt: 1, mb: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Typography>

              {/* Bullet Points */}
              <Stack spacing={1.2}>
                {[
                  "Lorem ipsum dolor sit amet.",
                  "Lorem ipsum dolor sit amet.",
                  "Lorem ipsum dolor sit amet.",
                  "Lorem ipsum dolor sit amet.",
                ].map((text, index) => (
                  <Stack key={index} direction="row" alignItems="center" spacing={1}>
                    <CheckCircleIcon sx={{ color: colors.primary, fontSize: 18 }} />
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: "#222" }}
                    >
                      {text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              {/* Stats */}
              <Stack
                direction="row"
                spacing={6}
                sx={{
                  mt: 4,
                  flexWrap: "wrap",
                  rowGap: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: colors.primary }}
                  >
                    15+
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    Years Experience
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: colors.primary }}
                  >
                    92%
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    Satisfaction Rate
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: colors.primary }}
                  >
                    $55K
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    Worth of Treatments Provided
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Image Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", display: "inline-block", width: "100%" }}>
              {/* Main Image */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 280, sm: 340, md: 400 },
                  borderRadius: 4,
                  backgroundImage:
                    "url('https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Top Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 10, sm: 20 },
                  right: { xs: 10, sm: 20 },
                  backgroundColor: colors.primary,
                  color: colors.white,
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  boxShadow: 3,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  +2.5K+
                </Typography>
                <Typography variant="body2">Patient Helped</Typography>
              </Box>

              {/* Bottom Tag */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -16,
                  left: 30,
                  backgroundColor: "#f9fafb",
                  px: 2.5,
                  py: 1,
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Since
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 700, color: "#000" }}
                >
                  2005
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Cards */}
        <Grid container spacing={3} sx={{ mt: { xs: 8, md: 10 } }}>
          {[
            {
              title: "Our Commitment",
              icon: <CheckCircleIcon />,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              dark: true,
            }
          ].map((card, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  backgroundColor: card.dark ? colors.primary : colors.cardLight,
                  color: card.dark ? colors.white : "#000",
                  height: "100%",
                  borderRadius: 3,
                  p: 3,
                }}
              >
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1.5} mb={1.5}>
                    <Box
                      sx={{
                        backgroundColor: card.dark ? "#fff" : colors.primary,
                        color: card.dark ? colors.primary : "#fff",
                        borderRadius: 2,
                        p: 0.7,
                        display: "flex",
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: card.dark ? "#fff" : colors.primary }}
                    >
                      {card.title}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {[
            {
              title: "Our Vision",
              icon: <VisibilityIcon />,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              dark: false,
            },
            {
              title: "Our Mission",
              icon: <TrackChangesIcon />,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              dark: false,
            },
          ].map((card, index) => (
            <Grid key={index} size={{ xs: 12, md: 3 }}>
              <Card
                sx={{
                  backgroundColor: card.dark ? colors.primary : colors.cardLight,
                  color: card.dark ? colors.white : "#000",
                  height: "100%",
                  borderRadius: 3,
                  p: 3,
                }}
              >
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1.5} mb={1.5}>
                    <Box
                      sx={{
                        backgroundColor: card.dark ? "#fff" : colors.primary,
                        color: card.dark ? colors.primary : "#fff",
                        borderRadius: 2,
                        p: 0.7,
                        display: "flex",
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: card.dark ? "#fff" : colors.primary }}
                    >
                      {card.title}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
