import {
  Box,
  Grid,
  Typography,
  Avatar,
  LinearProgress,
} from "@mui/material";

const WhyChooseUs = () => {
  const stats = [
    { label: "Professional Team", percentage: 97 },
    { label: "Comprehensive Services", percentage: 90 },
    { label: "Affordable Package", percentage: 88 },
    { label: "Satisfied Client", percentage: 95 },
  ];

  return (
    <Box
      sx={{
        minHeight: "60vh",
        bgcolor: "background.section",
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Box sx={{ maxWidth: "1200px", width: "100%" }}>
        <Grid container>

          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, lg: 6 }} sx={{ p: { xs: 3, md: 6 } }}>
            {/* Heading Block */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "navbar.main",
                  letterSpacing: 1,
                  fontWeight: 700,
                }}
              >
                WHY CHOOSE US
              </Typography>

              <Box
                sx={{
                  width: "80px",
                  height: "3px",
                  bgcolor: "navbar.main",
                  mt: 1,
                }}
              />
            </Box>

            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                mb: 2,
              }}
            >
              Individually Tailored Treatment:
              <br />
              Your Path to Wellness
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "text.secondary",
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>

            {/* Stats Section */}
            <Box>
              {stats.map((stat, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: 600, color: "text.primary" }}
                    >
                      {stat.label}
                    </Typography>

                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: "primary.main",
                        color: "#fff",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                      }}
                    >
                      {stat.percentage}%
                    </Avatar>
                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={stat.percentage}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      bgcolor: "background.paper",

                      "& .MuiLinearProgress-bar": {
                        bgcolor: "primary.main",
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid size={{ xs: 12, lg: 6 }} sx={{ position: "relative" }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=1000&fit=crop"
              alt="Healthcare Professional"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
