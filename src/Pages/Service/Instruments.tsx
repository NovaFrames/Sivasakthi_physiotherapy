import {
  Box,
  Container,
  Typography,
  Grid,

} from "@mui/material";

import GalleryCard from "../../Components/Card/GalleryCard";
import { CheckCircle } from "@mui/icons-material";

const Instruments = () => {
  const instruments = [
    {
      id: 1,
      title: "IFT – Interferential Therapy",
      description:
        "Used for deep pain relief and stimulation of soft tissues to promote healing and reduce inflammation.",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    },
    {
      id: 2,
      title: "Ultrasound Therapy",
      description:
        "Promotes tissue healing, reduces swelling, and improves blood flow using high-frequency sound waves.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
      id: 3,
      title: "TENS – Nerve Stimulation",
      description:
        "Used to relieve chronic and acute pain by sending gentle electrical impulses to nerves.",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
    },
    {
      id: 4,
      title: "Heat Therapy",
      description:
        "Effective for muscle relaxation, improving flexibility, and reducing stiffness in joints.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    },
    {
      id: 5,
      title: "Laser Therapy",
      description:
        "Accelerates healing, reduces inflammation, and promotes tissue regeneration using focused laser energy.",
      image:
        "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80",
    },
    {
      id: 6,
      title: "Traction Unit",
      description:
        "Used for spinal decompression therapy to relieve pressure from spinal discs.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
  ];

  return (
    <Box sx={{ pb: 12, backgroundColor: "#fff" }}>
      <Box
        sx={{
          position: "relative",
          py: { xs: 12, md: 20 },
          textAlign: "center",
          color: "white",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589104759909-e355f8999f7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhdGllbnQlMjBldmVudHN8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Physiotheraphy Instruments
          </Typography>

          <Typography variant="h6" maxWidth="700px" mx="auto" color="grey.200">
            Regain independence and improve your quality of life through targeted
            functional training
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg">

        {/* INTRO SECTION */}
        <Box sx={{ py: 10, backgroundColor: "#fff" }}>
          <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center">
              {/* LEFT CONTENT */}
              <Grid size={{ xs: 12, lg: 6 }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="primary.main"
                  mb={3}
                >
                  Physiotheraphy Instruments
                </Typography>

                <Typography color="text.secondary" mb={3}>
                  Our physiotherapy instruments are carefully selected to deliver precise,
                  evidence-based treatments for pain relief, muscle recovery, and improved
                  mobility. Each device is designed to target specific conditions and enhance
                  the effectiveness of your therapy sessions.
                </Typography>

                <Typography color="text.secondary" mb={4}>
                  From advanced electrotherapy units to therapeutic ultrasound and laser
                  systems, our equipment helps accelerate healing, reduce inflammation, and
                  restore functional movement. These instruments ensure safe, efficient, and
                  comfortable treatment for patients of all ages.
                </Typography>

                <Grid container spacing={2}>
                  {[
                    "Personalized Assessment",
                    "Expert Guidance",
                    "Proven Results",
                    "Ongoing Support",
                  ].map((item, i) => (
                    <Grid size={{ xs: 12, lg: 6 }} key={i}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CheckCircle color="primary" sx={{ fontSize: 22 }} />
                        <Typography ml={1}>{item}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* RIGHT IMAGE */}
              <Grid size={{ xs: 12, lg: 6 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 300, sm: 400, md: 450 },
                    borderRadius: 3,
                    backgroundImage: `url('https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBoeXNpb3RoZXJhcHklMjBpbnN0cnVtZW50c3xlbnwwfHwwfHx8MA%3D%3D')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
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

        <Grid container spacing={4}>
          <GalleryCard activities={instruments} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Instruments;
