import { Box, Container, Grid, Card, CardContent, Typography } from "@mui/material";
import Header from "../Header/Header";

const FoundersSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">

        {/* Main Heading */}

        <Header
          title="メ Hearts Behind Our Healing Journey"
          subtitle=" The Founders Committed to Changing Lives"
          description=" Understanding the true needs of people with disabilities, we saw their strong wish for independence. With 20+ years of experience, we built this Hi-Tech Physiotherapy Center to empower that independence." />

        <Grid container spacing={4}>
          {/* Founder 1 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                height: "100%",
                transition: "0.3s",
              }}
            >
              <Box
                sx={{
                  height: 280,
                  backgroundImage:
                    "url('https://media.istockphoto.com/id/483952192/photo/physical-therapist-series-leg-exercise.webp?a=1&b=1&s=612x612&w=0&k=20&c=i-OiNIel43hkEYd5Sn6o_efk-V7hQj74T-ZUtrIDi6Y=')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
                  Dr. M. Arumugasamy
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{ color: "#2E7D32", fontWeight: 600, mb: 2 }}
                >
                  Founder
                </Typography>

                <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.7 }}>
                  Born in Tamil Nadu on 22-10-1976, Dr. Arumugasamy pursued his Bachelor of
                  Physiotherapy from Nanda College. He expanded his expertise by completing DVMS and
                  Postgraduate Diploma in Fitness Management. Driven by the mission to help
                  underprivileged people, he founded an affordable physiotherapy center to deliver
                  accessible, high-quality care.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Founder 2 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                height: "100%",
                transition: "0.3s",
              }}
            >
              <Box
                sx={{
                  height: 280,
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1659353887804-fc7f9313021a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGh5c2lvdGhlcmFweSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
                  Dr. P. B. M. A. Doss
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{ color: "#2E7D32", fontWeight: 600, mb: 2 }}
                >
                  Co-Founder
                </Typography>

                <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.7 }}>
                  Born on 10 July 1975 in Kallakurichi, Dr. Doss completed his Bachelor of
                  Physiotherapy from Padmavathi College and later specialized in Musculoskeletal &
                  Sports Physiotherapy under RGUHS, Bangalore. Despite being an ortho specialist, he
                  practices as a multi-specialty physiotherapist and constantly updates his
                  knowledge. His personality is simple, practical, optimistic, and research-driven.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default FoundersSection;
