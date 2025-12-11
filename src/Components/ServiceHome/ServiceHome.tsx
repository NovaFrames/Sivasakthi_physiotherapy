import { Box, Container, Grid, Typography, Paper, Avatar } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const  ServiceHome = () => {
  return (
    <Box sx={{ bgcolor: "background.section", py: 8, px: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* Left Side - Image */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Physiotherapy session"
                sx={{
                  width: "100%",
                  height: { xs: 400, md: 600 },
                  objectFit: "cover",
                  borderRadius: 6,
                }}
              />

              {/* Experience Badge */}
              <Paper
                elevation={8}
                sx={{
                  position: "absolute",
                  bottom: 32,
                  left: 32,
                  borderRadius: 4,
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  bgcolor: "background.paper",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "primary.main",
                    width: 56,
                    height: 56,
                  }}
                >
                  <EmojiEventsIcon
                    sx={{ color: "background.paper", fontSize: 32 }}
                  />
                </Avatar>

                <Box>
                  <Typography variant="h4" fontWeight="bold" color="text.primary">
                    15+
                  </Typography>

                  <Typography variant="body2" color="text.secondary" fontWeight="medium">
                    Years Of Experience
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Right Side - Content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

              {/* Heading */}
              <Typography
                variant="h2"
                fontWeight="bold"
                color="text.primary"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.2,
                }}
              >
                We Are The Best For{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Physiotherapy
                </Box>
              </Typography>

              {/* Description Paragraphs */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  CB Physiotherapy is India's fastest growing Delivery Network for
                  Physiotherapy & Chiropractors services. At CB Physiotherapy, we are
                  committed to increase access to quality physio care through
                  ultra-modern clinics and high-skilled practitioners. Our integrated /
                  multi-therapy approach helps keep a strong focus on patient needs and
                  deliver the highest level of patient centric care with better outcomes.
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  We serve a wide range of patients offering treatment at clinic as well as
                  at the comfort of their homes. We make sure that our clinics are not only
                  equipped with the latest equipment's but also provide clean, energetic and
                  uplifting atmospheres for better healing. For Home Care, our well-established
                  processes ensure delivery of high-quality treatment with superior patient service.
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Rather than transactional engagement with patients, we are committed to partner
                  with our patients in their journey of healing.
                </Typography>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceHome;
