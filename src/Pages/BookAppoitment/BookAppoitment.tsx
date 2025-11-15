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
              <Typography
                variant="h6"
                fontWeight={600}
                color="primary.main"
                mb={3}
              >
                Fill Your Details
              </Typography>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Full Name"
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
                    variant="outlined"
                    label="Phone Number"
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
                    select
                    label="Select Service"
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
                    <MenuItem value="Pediatric Physiotherapy">Pediatric Physiotherapy</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Appointment Date"
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
                    type="time"
                    label="Preferred Time"
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
                  >
                    Book Appointment
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* RIGHT INFO PANEL */}
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
                color="primary.main"
                mb={3}
              >
                Clinic Information
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <PhoneIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Phone
                  </Typography>
                  <Typography color="text.secondary">+91 98765 43210</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <EmailIcon color="primary" />
                <Box ml={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Email
                  </Typography>
                  <Typography color="text.secondary">example@gmail.com</Typography>
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
