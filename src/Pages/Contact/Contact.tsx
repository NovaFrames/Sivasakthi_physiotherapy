import { useState } from "react";
import { LocationCity, Phone, Email } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
} from "@mui/material";

const colors = {
  primary: "#1a4d4d",
  white: "#FFFFFF",
  softBg: "#f7fafa",
};

const Contact = () => {
  // 🔹 Form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.replace(/\D/g, "");
  setForm({ ...form, phone: value });
};

  const handleSubmit = () => {
    console.log("Form Submitted:", form);
    // Add API call / Firebase logic here
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: colors.softBg,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: 260,
                  backgroundImage:
                    "url('https://plus.unsplash.com/premium_photo-1661779394380-e372d6a1f198?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGh5c2lvdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <CardContent sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, color: colors.primary }}
                  >
                    Contact Information
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Phone sx={{ color: colors.primary }} />
                    <Typography>+91 86758 34077</Typography>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <LocationCity sx={{ color: colors.primary }} />
                    <Typography>
                      Sivasakthi Physiotherapy Hospital,<br />
                      Shree Venkateshwara Arts & Science College Area
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Email sx={{ color: colors.primary }} />
                    <Typography>sivasakthiphysio@gmail.com</Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT SIDE — FORM */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ p: 3, borderRadius: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: 700, color: colors.primary }}
              >
                Send Us a Message
              </Typography>

              <Typography sx={{ mb: 3, color: "#555" }}>
                Our team will get back to you within 24 hours.
              </Typography>

              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <TextField
                  fullWidth
                  label="Phone"
                  value={form.phone}
                  onChange={handlePhoneChange}
                  inputProps={{ maxLength: 10 }}
                />

                <TextField
                  fullWidth
                  label="Your Message"
                  multiline
                  minRows={3}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: colors.primary,
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#0d3a3a" },
                  }}
                  onClick={handleSubmit}
                >
                  Send Message
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
