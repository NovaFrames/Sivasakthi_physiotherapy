import { LocationCity, Phone } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";

const colors = {
  primary: "#1a4d4d",
  cardLight: "#FFFFFF",
  white: "#FFFFFF",
};

const Contact = () => {
  return (
   <Box sx={{ py: { xs: 6, md: 8 } ,background: "linear-gradient(180deg,#fff 0%, #fbfdfd 100%)" }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid size={{xs:12,md:6}}>
          <Stack spacing={2}>
            <Typography variant="subtitle1" sx={{ color: colors.primary, fontWeight: 700 }}>
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Make an appointment or ask a question
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <Phone sx={{ color: colors.primary }} />
                </ListItemIcon>
                <ListItemText primary="Phone" secondary="+91 8675834077" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationCity sx={{ color: colors.primary }} />
                </ListItemIcon>
                <ListItemText primary="Address" secondary="Sivasakthi Physiotherapy Hospital — Shree Venkateshwara Arts & Science College area" />
              </ListItem>
            </List>
          </Stack>
        </Grid>

        <Grid size={{xs:12,md:6}}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="subtitle2" sx={{ color: colors.primary, fontWeight: 700 }}>Send us a message</Typography>
                <TextField fullWidth label="Full name" />
                <TextField fullWidth label="Phone or Email" />
                <TextField fullWidth label="Brief message" multiline minRows={3} />
                <Button variant="contained" sx={{ backgroundColor: colors.primary }}>Send Message</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
};

export default Contact;
