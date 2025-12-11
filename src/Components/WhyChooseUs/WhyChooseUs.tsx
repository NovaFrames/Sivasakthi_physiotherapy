import {
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import doctorHero from "./../../assets/doctor_hero.png";

const WhyChooseUs = () => {
  const theme = useTheme();

  // Features data
  const leftFeatures = [
    {
      title: "Experienced Team",
      description: "We understand that injuries and acute pain can unexpectedly.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Patient-Centered Approach",
      description: "We understand that injuries and acute pain can unexpectedly.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      title: "Expertise And Experience",
      description: "We understand that injuries and acute pain can unexpectedly.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
  ];

  const rightFeatures = [
    {
      title: "Advanced Technology",
      description: "We understand that injuries and acute pain can unexpectedly.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: "Convenient And Accessible",
      description: "We understand that injuries and acute pain can unexpectedly.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: "Community Involvement",
      description: "We understand that injuries and acute pain can unexpectedly.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          {/* Badge */}
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: theme.palette.primary.main,
              color: "white",
              px: 2.5,
              py: 0.75,
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: 300,
              mb: 2,
            }}
          >
            Why Us
          </Box>

          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "2rem", md: "2.8rem" },
              lineHeight: 1.3,
              color: theme.palette.text.primary,
            }}
          >
            <Box
              component="span"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 500,
              }}
            >
              Excellence In
            </Box>{" "}
            Care And
            <br />
            Rehabilitation
          </Typography>
        </Box>

        {/* Main Content Container */}
        <Box
          sx={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            minHeight: { xs: "auto", md: "400px" },
          }}
        >
          {/* Split Background Container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              position: "relative",
              minHeight: { xs: "auto", md: "400px" },
            }}
          >
            {/* Left Section - Light Gray Background */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#E8F0F2",
                p: { xs: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 3,
              }}
            >
              {leftFeatures.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                    mr: { xs: 0, md: 10 },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: "white",
                      color: theme.palette.primary.main,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        mb: 0.5,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "13px",
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Right Section - Dark Teal Background */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: theme.palette.primary.dark,
                p: { xs: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 3,
              }}
            >
              {rightFeatures.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                    ml: { xs: 0, md: 10 },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      color: "white",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        mb: 0.5,
                        color: "white",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "13px",
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Center Doctor Image - Overlapping */}
            <Box
              sx={{
                position: "absolute",
                top: "54%",
                left: "49%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                display: { xs: "none", md: "block" },
                justifyContent: "center",
                mt: { xs: 3, md: 0 },
              }}
            >
              <Box
                component="img"
                src={doctorHero}
                alt="Professional Doctor"
                sx={{
                  width: { xs: 280, md: 380 },
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
