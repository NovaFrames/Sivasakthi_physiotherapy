import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    useTheme,
    Avatar,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import doctorHero from "./../../assets/doctor_hero.png";

const HeroSection = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                pt: { xs: 20, md: 30 },
                pb: { xs: 6, md: 12 },
                minHeight: { md: "90vh" },
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg">
                <Grid container alignItems="center" spacing={{ xs: 4, md: 6 }}>
                    {/* --- LEFT SECTION --- */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            {/* Main Heading */}
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 400,
                                    lineHeight: 1.3,
                                    mb: 3,
                                    color: theme.palette.text.primary,
                                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        color: theme.palette.primary.main,
                                        fontWeight: 500,
                                    }}
                                >
                                    Sivasakthi
                                </Box>
                                <br />
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                    Physiotherapy
                                </Box>
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.8,
                                    mb: 4,
                                    maxWidth: 520,
                                    fontSize: "16px",
                                }}
                            >
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout the point of
                                using lorem the ipsum less normal distribution of letters.
                            </Typography>

                            {/* Buttons */}
                            <Box sx={{ display: "flex", gap: 2, mb: 5, flexWrap: "wrap" }}>
                                <Button
                                    variant="contained"
                                    endIcon={<ArrowForwardIcon />}
                                    onClick={() => navigate("/service")}
                                    sx={{
                                        bgcolor: theme.palette.primary.main,
                                        color: "white",
                                        textTransform: "none",
                                        fontWeight: 600,
                                        fontSize: "15px",
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: "50px",
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            bgcolor: theme.palette.primary.dark,
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                                        },
                                    }}
                                >
                                    Explore Services
                                </Button>
                                <Button
                                    variant="outlined"
                                    endIcon={<ArrowForwardIcon />}
                                    onClick={() => navigate("/book-appointment")}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        borderColor: theme.palette.primary.main,
                                        textTransform: "none",
                                        fontWeight: 600,
                                        fontSize: "15px",
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: "50px",
                                        borderWidth: "2px",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            borderWidth: "2px",
                                            bgcolor: theme.palette.primary.main,
                                            color: "white",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    Book Appointment
                                </Button>
                            </Box>

                            {/* Stats Section */}
                            <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                                {/* 24/7 Emergency Care */}
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            color: theme.palette.primary.main,
                                            fontSize: { xs: "2rem", md: "2.5rem" },
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        24/7
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: "14px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Emergency Care
                                    </Typography>
                                </Box>

                                {/* 80+ Doctors */}
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            color: theme.palette.primary.main,
                                            fontSize: { xs: "2rem", md: "2.5rem" },
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        80+
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: "14px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Doctors
                                    </Typography>
                                </Box>

                                {/* 100k+ Customer */}
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            color: theme.palette.primary.main,
                                            fontSize: { xs: "2rem", md: "2.5rem" },
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        100k+
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: "14px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Customer
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* --- RIGHT SECTION: DOCTOR IMAGE --- */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {/* Circular Background */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    width: { xs: 300, md: 420 },
                                    height: { xs: 300, md: 420 },
                                    borderRadius: "50%",
                                    backgroundColor: theme.palette.primary.main,
                                    opacity: 0.9,
                                    top: "45%",
                                    right: { xs: "10%", md: "5%" },
                                    transform: "translateY(-50%)",
                                    zIndex: 0,
                                }}
                            />

                            {/* Doctor Image */}
                            <Box
                                component="img"
                                src={doctorHero}
                                alt="Professional Doctor"
                                sx={{
                                    position: "relative",
                                    width: { xs: 320, md: 480 },
                                    height: "auto",
                                    zIndex: 1,
                                    objectFit: "contain",
                                    marginRight: { xs: 0, md: -4 },
                                }}
                            />

                            {/* Doctor Info Card */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: { xs: 20, md: 40 },
                                    left: { xs: "10%", md: "15%" },
                                    backgroundColor: "white",
                                    borderRadius: "16px",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                                    px: 2.5,
                                    py: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    zIndex: 2,
                                }}
                            >
                                <Avatar
                                    src={doctorHero}
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        border: `3px solid ${theme.palette.primary.main}`,
                                    }}
                                />
                                <Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 700,
                                            color: theme.palette.text.primary,
                                            fontSize: "15px",
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        Dr. Jamie Smith
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: "13px",
                                        }}
                                    >
                                        Physiotherapy
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* --- FEATURES SECTION --- */}
                <Box
                    sx={{
                        mt: { xs: 6, md: 10 },
                        backgroundColor: theme.palette.primary.dark,
                        borderRadius: "16px",
                        py: 4,
                        px: { xs: 3, md: 6 },
                    }}
                >
                    <Grid container spacing={4}>
                        {/* Expert Therapists */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                                <Box
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Box
                                        component="svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "white",
                                            fontWeight: 700,
                                            fontSize: "18px",
                                            mb: 1,
                                        }}
                                    >
                                        Expert Therapists
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgba(255, 255, 255, 0.8)",
                                            fontSize: "14px",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Our team of licensed and certified physiotherapists
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Emergency Service */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                                <Box
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Box
                                        component="svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "white",
                                            fontWeight: 700,
                                            fontSize: "18px",
                                            mb: 1,
                                        }}
                                    >
                                        Emergency Service
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgba(255, 255, 255, 0.8)",
                                            fontSize: "14px",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Our emergency physiotherapy services are designed to address
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Free Consultant */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                                <Box
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Box
                                        component="svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                    >
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "white",
                                            fontWeight: 700,
                                            fontSize: "18px",
                                            mb: 1,
                                        }}
                                    >
                                        Free Consultant
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgba(255, 255, 255, 0.8)",
                                            fontSize: "14px",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Our mission is to enhance the quality of life of our patients
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
