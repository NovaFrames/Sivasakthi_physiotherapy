import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  CircularProgress,
  Alert,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RoomIcon from "@mui/icons-material/Room";
import ScheduleIcon from "@mui/icons-material/Schedule";

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = async () => {
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      setMessage({ type: 'error', text: 'Please fill all required fields!' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    // Your credentials (temporary test token only!)
    const WHATSAPP_TOKEN = "EAARAdiREqMsBQKx8jgJH7FTpl1wvd2dvxt9GeSBALg3WKpRw34WjdI0WvtUasINByjgwYvgUpNpX5is19tBoX4zYZApZCD6LXgUqQzCmUbBgPudAKG4nqBv5xzrrSpjh2jG4XzvNZB4ZCdxJ4IiqaOmh0VLbhZClYbtj2xVmxtZAhDL5EVJCNRAhB0xAHaBjOscJfXs8ZCV73Qrht3axvpi0dXg9VZCpSIvFsPP4oVZBSZBVef1IZBLq2HKzcEzPtWMX6qZAB9tACmd0qIGx7ZCZCoVwe7N2EznQZDZD";
    const PHONE_NUMBER_ID = "805113832692020";
    const BUSINESS_NUMBER = "919715768735"; // without +

    try {
      // console.log("Sending WhatsApp message...", form);
      const response = await fetch(
        `https://graph.facebook.com/v20.0/${PHONE_NUMBER_ID}/messages`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${WHATSAPP_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: BUSINESS_NUMBER,
            type: "template",
            template: {
              name: "sivasakthi",
              language: { code: "en_US" },
              components: [
                {
                  type: "body",
                  parameters: [
                    { type: "text", text: form.name },
                    { type: "text", text: form.phone },
                    { type: "text", text: form.service },
                    { type: "text", text: form.date },
                    { type: "text", text: form.time },
                    { type: "text", text: form.notes || "No Notes" },
                  ],
                },
              ],
            },
          }),
        }
      );

      const data = await response.json();

      if (data.messages) {
        setMessage({
          type: "success",
          text: "WhatsApp message sent successfully!"
        });

        // Reset form
        setForm({
          name: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          time: "",
          notes: "",
        });

      } else {
        setMessage({
          type: "error",
          text: data.error?.message || "Failed to send. Please try again."
        });
      }

    } catch (error) {
      setMessage({
        type: "error",
        text: "Network error. Check connection and try again."
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <Box sx={{ py: 5, backgroundColor: "#f5f7fb" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          color="primary.main"
          mb={6}
        >
          Book an Appointment
        </Typography>

        <Grid container spacing={6}>
          {/* LEFT FORM */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: 4, borderRadius: 3 }} elevation={3}>
              <Typography variant="h6" fontWeight={600} color="primary.main" mb={3}>
                Fill Your Details
              </Typography>

              {message.text && (
                <Alert
                  severity={message.type as any}
                  sx={{ mb: 3 }}
                  onClose={() => setMessage({ type: '', text: '' })}
                >
                  {message.text}
                </Alert>
              )}

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    variant="outlined"
                    label="Full Name *"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    variant="outlined"
                    label="Phone Number *"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    variant="outlined"
                    label="Email Address"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    select
                    label="Select Service *"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocalHospitalIcon />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem value="Physiotherapy">Physiotherapy</MenuItem>
                    <MenuItem value="Sports Rehab">Sports Rehab</MenuItem>
                    <MenuItem value="Neuro Rehab">Neuro Rehab</MenuItem>
                    <MenuItem value="Orthopedic Rehab">Orthopedic Rehab</MenuItem>
                    <MenuItem value="Pediatric Physiotherapy">
                      Pediatric Physiotherapy
                    </MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    type="date"
                    label="Appointment Date *"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EventIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    type="time"
                    label="Preferred Time *"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccessTimeIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    label="Additional Notes"
                    variant="outlined"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    sx={{ py: 1.4, fontSize: "1rem" }}
                    onClick={sendWhatsAppMessage}
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} /> : null}
                  >
                    {loading ? 'Sending...' : 'Book Appointment'}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* RIGHT INFO PANEL */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: "100%" }}>
              <Typography variant="h6" fontWeight={600} color="primary.main" mb={3}>
                Clinic Information
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <PhoneIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Phone
                  </Typography>
                  <Typography color="text.secondary">+919715768735</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <EmailIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Email
                  </Typography>
                  <Typography color="text.secondary">
                    example@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <RoomIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Location
                  </Typography>
                  <Typography color="text.secondary">
                    123 Physiotherapy Center, City, State, India
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ScheduleIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Working Hours
                  </Typography>
                  <Typography color="text.secondary">
                    Mon – Sat : 9:00 AM – 7:00 PM
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

export default BookAppointment;