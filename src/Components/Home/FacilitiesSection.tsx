import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
} from "@mui/material";

const FacilitiesSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 15 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: theme.palette.text.primary }}
          >
            World-Class Facilities
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Equipped with advanced technology and staffed by dedicated professionals,
            we provide comprehensive care under one roof.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={4}>
          {[
            {
              title: "24/7 Nursing Support",
              desc: "Round-the-clock monitoring ensuring patient safety and accelerated recovery.",
              img: "https://images.pexels.com/photos/6129688/pexels-photo-6129688.jpeg",
            },
            {
              title: "Advanced Therapeutics",
              desc: "State-of-the-art electrotherapy and pain management systems for optimal results.",
              img: "https://images.pexels.com/photos/6627840/pexels-photo-6627840.jpeg",
            },
            {
              title: "Gait Rehabilitation School",
              desc: "India's premier gait training facility for advanced mobility restoration.",
              img: "https://images.pexels.com/photos/4506165/pexels-photo-4506165.jpeg",
            },
            {
              title: "De-addiction Center",
              desc: "Comprehensive psychiatric care with constant monitoring and support.",
              img: "https://images.pexels.com/photos/6749771/pexels-photo-6749771.jpeg",
            },
            {
              title: "Senior Care Home",
              desc: "Peaceful environment with full-time medical and nursing care for elderly.",
              img: "https://images.pexels.com/photos/7328829/pexels-photo-7328829.jpeg",
            },
            {
              title: "Sports Rehabilitation",
              desc: "Specialized programs for athletes and sports injury recovery.",
              img: "https://images.pexels.com/photos/6456151/pexels-photo-6456151.jpeg",
            },
          ].map((item, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </Typography>

                  <Button
                    sx={{
                      mt: 2,
                      color: theme.palette.primary.main,
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      p: 1,
                    }}
                  >
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FacilitiesSection;
