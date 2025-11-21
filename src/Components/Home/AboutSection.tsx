import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";

const AboutSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 15 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">

          {/* Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: theme.palette.text.primary,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: 0,
                  width: 60,
                  height: 4,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 2,
                },
              }}
            >
              About Our Legacy
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, mb: 3 }}
              >
                Founded in 1999 by visionary healthcare professionals, Sivasakthi
                Physiotherapy Hospital has been at the forefront of bringing
                advanced rehabilitation services to rural communities.
              </Typography>

              <Box
                sx={{
                  pl: 2,
                  borderLeft: `4px solid ${theme.palette.primary.light}`,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, mb: 2 }}
                >
                  <strong>Dr. M. Arumugasamy, BPT, DVMS, PGDFM</strong> and{" "}
                  <strong>Dr. P. B. M. A Doss, MPT (Ortho), D.S.P.</strong> established
                  this institution with a mission to make quality physiotherapy
                  accessible to all.
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, mt: 3 }}
              >
                Today, we offer multiple specialized streams of physiotherapy,
                combining traditional knowledge with modern technology for
                comprehensive patient care.
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  px: 4,
                  borderRadius: "25px",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Meet Our Team
              </Button>

              <Button
                sx={{
                  color: theme.palette.primary.main,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                View Certifications →
              </Button>
            </Stack>
          </Grid>

          {/* Image Grid */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: 200,
                    borderRadius: 3,
                    overflow: "hidden",
                    mb: 2,
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/8460091/pexels-photo-8460091.jpeg"
                    alt="Therapy Session"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    height: 250,
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/6627840/pexels-photo-6627840.jpeg"
                    alt="Modern Equipment"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: 250,
                    borderRadius: 3,
                    overflow: "hidden",
                    mb: 2,
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/4506165/pexels-photo-4506165.jpeg"
                    alt="Patient Care"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    height: 200,
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/6129688/pexels-photo-6129688.jpeg"
                    alt="Facility"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
