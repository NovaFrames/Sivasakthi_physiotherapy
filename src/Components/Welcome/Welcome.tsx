import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Welcome = () => {
  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      {/* Background with Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 3,
            maxWidth: "900px",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Welcome to Sivasakthi Physiotherapy Hospital
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            maxWidth: "750px",
            mb: 5,
            lineHeight: 1.7,
          }}
        >
          At{" "}
          <Box component="span" sx={{ fontWeight: 600, color: "primary.light" }}>
            Sivasakthi Physiotherapy Hospital
          </Box>
          , we are dedicated to helping patients regain strength,
          mobility, and confidence through expert care and personalized
          rehabilitation programs.
          <br />
          Our mission is simple —
          <Box component="span" sx={{ fontStyle: "italic", color: "primary.light" }}>
            “Doctors add years to a patient’s life,
            physiotherapists add life to those years.”
          </Box>
        </Typography>

        {/* CTA Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              color: "#fff",
              px: 5,
              py: 1.8,
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: 500,
              textTransform: "none",
              boxShadow: 3,
              "&:hover": { bgcolor: "primary.dark", boxShadow: 6 },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Call Now <ArrowForwardIcon fontSize="small" />
          </Button>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#fff",
              color: "text.primary",
              px: 5,
              py: 1.8,
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: 500,
              textTransform: "none",
              boxShadow: 3,
              "&:hover": { bgcolor: "grey.100", boxShadow: 6 },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Book Appointment <ArrowForwardIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
