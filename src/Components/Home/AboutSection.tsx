import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Heading and Large Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              {/* Small decorative text */}
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.disabled,
                  fontSize: "16px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  mb: 1,
                  display: "block",
                }}
              >
                What Makes Us
              </Typography>

              {/* Main Heading */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 400,
                  color: theme.palette.text.primary,
                  lineHeight: 1.3,
                  mb: 4,
                }}
              >
                Who we are and
                <br />
                what we do
              </Typography>

              {/* Large Image */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 300, md: 450 },
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg"
                  alt="Physiotherapist working with patient"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Badge, Image, Text, and Button */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              {/* Circular Badge with Rotating Text */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: -40, md: -20 },
                  left: { xs: 20, md: -60 },
                  width: { xs: 100, md: 140 },
                  height: { xs: 100, md: 140 },
                  zIndex: 10,
                }}
              >
                {/* SVG for Circular Text */}
                <svg
                  viewBox="0 0 140 140"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 70, 70 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    />
                    <style>
                      {`
                        @keyframes rotate {
                          from {
                            transform: rotate(0deg);
                          }
                          to {
                            transform: rotate(360deg);
                          }
                        }
                        .rotating-text {
                          animation: rotate 20s linear infinite;
                          transform-origin: center;
                        }
                      `}
                    </style>
                  </defs>
                  <g className="rotating-text">
                    <text
                      fill={theme.palette.text.disabled}
                      fontSize="11"
                      fontWeight="500"
                      letterSpacing="3"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        YEARS OF EXPERIENCE • YEARS OF EXPERIENCE •
                      </textPath>
                    </text>
                  </g>
                </svg>

                {/* Center Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: 70, md: 90 },
                    height: { xs: 70, md: 90 },
                    borderRadius: "50%",
                    backgroundColor: theme.palette.background.paper,
                    border: `8px solid ${theme.palette.grey[100]}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      fontSize: { xs: "28px", md: "36px" },
                    }}
                  >
                    25+
                  </Typography>
                </Box>
              </Box>

              {/* Image */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 280, md: 350 },
                  borderRadius: 2,
                  overflow: "hidden",
                  mb: 3,
                }}
              >
                <img
                  src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg"
                  alt="Therapy session"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Text Content */}
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  mb: 3,
                  fontSize: "14px",
                }}
              >
                We do this through our soul, our spirit, and what we can do about it. If you can see
                that, you can see how we can do difficult aspects of achieving success. It is by
                no means our belief in our ability.
              </Typography>

              {/* Discover More Button */}
              <Button
                variant="contained"
                onClick={() => navigate("/about")}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  px: 4,
                  py: 1.5,
                  borderRadius: "4px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                View More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
