import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    Button,
    useTheme,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const TheraphyList = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    // Therapy services data
    const therapyServices = [
        {
            title: "Manual Therapy",
            description: "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
            ),
        },
        {
            title: "Chronic Pain",
            description: "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            ),
        },
        {
            title: "Hand Therapy",
            description: "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
            ),
        },
        {
            title: "Sports Therapy",
            description: "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                </svg>
            ),
        },
        {
            title: "Cupping Therapy",
            description: "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
                </svg>
            ),
        },
        {
            title: "Laser Therapy",
            description: "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 9a3 3 0 1 1 6 0" />
                    <path d="M12 12v.01" />
                    <path d="M11 15h2" />
                    <path d="M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" />
                    <path d="M12 19v3" />
                </svg>
            ),
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                py: { xs: 6, md: 10 },
            }}
        >
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 6,
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    <Box>
                        {/* Badge */}
                        <Box
                            sx={{
                                display: "inline-block",
                                backgroundColor: theme.palette.primary.main,
                                color: "white",
                                px: 2.5,
                                py: 0.75,
                                borderRadius: "20px",
                                fontSize: "13px",
                                fontWeight: 300,
                                mb: 2,
                            }}
                        >
                            Therapy List
                        </Box>

                        {/* Title */}
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 400,
                                fontSize: { xs: "2rem", md: "2.8rem" },
                                lineHeight: 1.3,
                                color: theme.palette.text.primary,
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    color: theme.palette.primary.main,
                                    fontWeight: 500,
                                }}
                            >
                                We Provide
                            </Box>{" "}
                            The Best
                            <br />
                            Services
                        </Typography>
                    </Box>

                    {/* View All Services Button */}
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
                        View All Services
                    </Button>
                </Box>

                {/* Services Grid */}
                <Grid container spacing={3}>
                    {therapyServices.map((service, index) => (
                        <Grid
                            key={index}
                            size={{ xs: 12, sm: 6, md: 3 }}
                        >
                            <Card
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    backgroundColor: "white",
                                    color: theme.palette.text.primary,
                                    borderRadius: "16px",
                                    border: "1px solid #E8E8E8",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                    position: "relative",
                                    overflow: "hidden",
                                    zIndex: 1,
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: "0%",
                                        backgroundColor: theme.palette.primary.light,
                                        transition: "height 0.4s ease",
                                        zIndex: -1,
                                        borderRadius: "16px",
                                    },
                                    "&:hover::before": {
                                        height: "100%",
                                    },
                                    "&:hover": {
                                        "& .service-title": {
                                            color: "white",
                                        },
                                        "& .service-description": {
                                            color: "rgba(255, 255, 255, 0.9)",
                                        },
                                        "& .service-icon": {
                                            backgroundColor: "white",
                                            color: theme.palette.primary.main,
                                        },
                                    },
                                }}
                            >
                                {/* Icon */}
                                <Box
                                    className="service-icon"
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        backgroundColor: theme.palette.primary.main,
                                        color: "white",
                                        borderRadius: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mb: 3,
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    {service.icon}
                                </Box>

                                {/* Title */}
                                <Typography
                                    variant="h6"
                                    className="service-title"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "20px",
                                        mb: 2,
                                        color: theme.palette.text.primary,
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {service.title}
                                </Typography>

                                {/* Description */}
                                <Typography
                                    variant="body2"
                                    className="service-description"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        fontSize: "14px",
                                        lineHeight: 1.7,
                                        mb: 3,
                                        flexGrow: 1,
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {service.description}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}

                    {/* Call to Action Section - Inside Grid */}
                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                        <Box
                            sx={{
                                p: 4,
                                height: "100%",
                                backgroundColor: theme.palette.background.default,
                                borderRadius: "16px",
                                border: "1px solid #E8E8E8",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    color: theme.palette.text.primary,
                                    fontSize: "18px",
                                }}
                            >
                                Ready To Start Your Journey To Recovery?
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    mb: 3,
                                    fontSize: "14px",
                                    lineHeight: 1.6,
                                }}
                            >
                                We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.
                            </Typography>
                            <Button
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                onClick={() => navigate("/book-appointment")}
                                sx={{
                                    bgcolor: theme.palette.primary.main,
                                    color: "white",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    px: 3,
                                    py: 1.25,
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
                                Book Appointment
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TheraphyList;
