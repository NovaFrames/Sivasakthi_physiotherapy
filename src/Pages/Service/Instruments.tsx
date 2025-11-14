import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import {
  Settings,
  Opacity,
  Healing,
  Lightbulb,
  ElectricBolt,
  Spa,
} from "@mui/icons-material";

const Instruments = () => {
  const instruments = [
  {
    icon: <ElectricBolt fontSize="large" color="primary" />,
    title: "IFT – Interferential Therapy",
    description:
      "Used for deep pain relief and stimulation of soft tissues to promote healing and reduce inflammation.",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
  },
  {
    icon: <Opacity fontSize="large" color="secondary" />,
    title: "Ultrasound Therapy",
    description:
      "Promotes tissue healing, reduces swelling, and improves blood flow using high-frequency sound waves.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  },
  {
    icon: <Healing fontSize="large" color="success" />,
    title: "TENS – Nerve Stimulation",
    description:
      "Used to relieve chronic and acute pain by sending gentle electrical impulses to nerves.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
  },
  {
    icon: <Spa fontSize="large" color="error" />,
    title: "Heat Therapy",
    description:
      "Effective for muscle relaxation, improving flexibility, and reducing stiffness in joints.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    icon: <Lightbulb fontSize="large" color="warning" />,
    title: "Laser Therapy",
    description:
      "Accelerates healing, reduces inflammation, and promotes tissue regeneration using focused laser energy.",
    image:
      "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80",
  },
  {
    icon: <Settings fontSize="large" color="info" />,
    title: "Traction Unit",
    description:
      "Used for spinal decompression therapy to relieve pressure from spinal discs.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
];

  return (
    <Box sx={{ pt: 10, pb: 12, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* ================= HERO SECTION ================= */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            fontWeight={700}
            color="primary.main"
            gutterBottom
          >
            Physiotherapy Instruments
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="700px" mx="auto">
            Explore our advanced physiotherapy equipment used to deliver quality treatment
            and faster recovery for patients.
          </Typography>
        </Box>

        {/* ================= INSTRUMENTS GRID ================= */}
        <Grid container spacing={4}>
          {instruments.map((item, index) => (
            <Grid size={{ xs: 12, lg: 4 }} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <Stack spacing={2} textAlign="center" alignItems="center">
                  <Box sx={{ mt: 1 }}>{item.icon}</Box>

                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: 160,
                      objectFit: "contain",
                      borderRadius: 2,
                      my: 1,
                    }}
                  />

                  <Typography variant="h6" fontWeight={700}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Instruments;
