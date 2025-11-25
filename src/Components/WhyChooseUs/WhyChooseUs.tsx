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
        minHeight: "50vh",
        bgcolor: "background.section",
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 5 },
      }}
    >
      <Box sx={{ maxWidth: "1000px", width: "100%" }}>
        <Grid container spacing={3}>

          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, lg: 6 }} sx={{ p: { xs: 2, md: 4 } }}>
            
            {/* Heading */}
            <Typography
              variant="subtitle2"
              sx={{
                color: "navbar.main",
                letterSpacing: 1,
                fontWeight: 600,
                mb: 1,
                fontSize: "0.8rem",
              }}
            >
              WHY CHOOSE US
            </Typography>

            <Box sx={{ width: "60px", height: "3px", bgcolor: "navbar.main", mb: 2 }} />

            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                mb: 1.5,
                lineHeight: 1.3,
              }}
            >
              Individually Tailored Treatment
              <br />
              For Better Wellness
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "text.secondary",
                mb: 3,
                lineHeight: 1.5,
                fontSize: "0.85rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>

            {/* Stats */}
            {stats.map((stat, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 0.5,
                  }}
                >
                  <Typography sx={{ fontWeight: 600, fontSize: "0.85rem" }}>
                    {stat.label}
                  </Typography>

                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "primary.main",
                      fontSize: "0.75rem",
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
                    height: 8,
                    borderRadius: 5,
                    "& .MuiLinearProgress-bar": {
                      bgcolor: "primary.main",
                    },
                  }}
                />
              </Box>
            ))}
          </Grid>

          {/* RIGHT SIDE IMAGE */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=1000&fit=crop"
              alt="Healthcare Professional"
              sx={{
                width: "100%",
                height: { xs: "460px", md: "460px" },
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
