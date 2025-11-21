import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    useMediaQuery,
    useTheme,
    Card,
    CardContent,
} from "@mui/material";
import image from "./../../assets/image.png"
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundColor: "#E1F0E7",
                pt: 6,
                pb: 10,
            }}
        >
            <Container maxWidth="lg">
                <Grid container alignItems="center" spacing={4}>
                    {/* --- TEXT SECTION --- */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h6"
                            sx={{ color: "#1B4B3C", fontWeight: 800 }}
                        >
                            Wellcome 👋
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                lineHeight: 1.2,
                                mt: 2,
                                color: "#1A1A1A",
                            }}
                        >
                            Sivasakthi
                            <br /> Physiotheraphy Hospital
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ mt: 2, maxWidth: 500, color: "#4A4A4A" }}
                        >
                            Doctors add years to patient’s life Physiotherapist add life to that
                            added the years
                        </Typography>

                        <Button
                            onClick={() => navigate('/book-appointment')}
                            variant="contained"
                            sx={{
                                mt: 4,
                                backgroundColor: "#2B7A5E",
                                borderRadius: "50px",
                                px: 4,
                                py: 1.5,
                                fontWeight: 600,
                                textTransform: "none",
                                "&:hover": { backgroundColor: "#1F5A44" },
                            }}
                            
                        >
                            Book an Appointment    
                        </Button>
                    </Grid>

                    {/* --- IMAGE SECTION --- */}
                    <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
                        <Box
                            component="img"
                            src={image}
                            alt="Hero"
                            sx={{
                                width: isMobile ? "80%" : "70%",
                                borderRadius: "10px",
                            }}
                        />
                    </Grid>
                </Grid>

                {/* --- STATS BOX --- */}
                <Card
                    sx={{
                        mt: 8,
                        p: 3,
                        borderRadius: 3,
                        boxShadow: "none",
                        border: "1px solid #EEE",
                        backgroundColor: "#fff",
                    }}
                >
                    <Grid container spacing={3} textAlign="center">
                        <Grid size={{ xs: 12, md: 4 }}>
                            <CardContent>
                                <Typography variant="h5" fontWeight={700}>
                                    3500+
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Patients
                                </Typography>
                            </CardContent>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <CardContent>
                                <Typography variant="h5" fontWeight={700}>
                                    25+
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   Doctors
                                </Typography>
                            </CardContent>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <CardContent>
                                <Typography variant="h5" fontWeight={700}>
                                    30+
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Years of experience
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Box>
    );
};

export default HeroSection;
