import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    useMediaQuery,
    useTheme,
    Card,
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
                        mt: 6,
                        py: 4,
                        px: { xs: 2, md: 4 },
                        borderRadius: 3,
                        border: "1px solid #E6E6E6",
                        backgroundColor: "#f9fafb",
                    }}
                >
                    <Grid container spacing={3} justifyContent="center">
                        {[
                            { value: "+3.500", label: "Pacientes atendidos" },
                            { value: "+15", label: "Especialistas disponíveis" },
                            { value: "+10", label: "Anos no mercado" }
                        ].map((item, index) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1,
                                    }}
                                >
                                    {/* Big Number */}
                                    <Typography
                                        variant="h4"
                                        fontWeight="700"
                                        sx={{ color: "#1A3C34" }}
                                    >
                                        {item.value}
                                    </Typography>

                                    {/* Label */}
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ fontSize: "15px" }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Card>


            </Container>
        </Box>
    );
};

export default HeroSection;
