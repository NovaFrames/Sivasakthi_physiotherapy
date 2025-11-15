import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: "#f8f9fc" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          color="primary.main"
          mb={6}
        >
          Contact Us
        </Typography>

        <Grid container spacing={6} alignItems="stretch">
          {/* LEFT FORM */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                mb={3}
                color="primary.main"
              >
                Send us a Message
              </Typography>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ py: 1.2, fontSize: "1rem" }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* RIGHT SIDE CONTACT INFO */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                mb={3}
                color="primary.main"
              >
                Get in Touch
              </Typography>

              <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                <Phone size={26} color="#134E4A" />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Phone
                  </Typography>
                  <Typography color="text.secondary">
                    +91 98765 43210
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                <Mail size={26} color="#134E4A" />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Email
                  </Typography>
                  <Typography color="text.secondary">
                    example@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                <MapPin size={26} color="#134E4A" />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Address
                  </Typography>
                  <Typography color="text.secondary">
                    123, Physiotherapy Center, City, State, India
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Clock size={26} color="#134E4A" />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Working Hours
                  </Typography>
                  <Typography color="text.secondary">
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
