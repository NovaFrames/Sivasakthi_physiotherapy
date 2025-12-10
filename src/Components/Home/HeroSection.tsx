import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme,
    Card,
    Avatar,
    AvatarGroup,
    IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Import generated images - replace these paths with your actual image imports
import mainPhysio from "./../../assets/main_physiotherapist.png";
import secondPhysio from "./../../assets/second_physiotherapist.png";
import therapy1 from "./../../assets/therapy_session_1.png";
import therapy2 from "./../../assets/therapy_session_2.png";
import therapy3 from "./../../assets/therapy_session_3.png";
import therapy4 from "./../../assets/therapy_session_4.png";
import therapy5 from "./../../assets/therapy_session_5.png";
import therapy6 from "./../../assets/therapy_session_6.png";

const HeroSection = () => {
    const theme = useTheme();
    const [currentDoctor, setCurrentDoctor] = useState(0);

    // Doctors data
    const doctors = [
        {
            image: mainPhysio,
            name: "Dr. Juliana",
            title: "Senior Physio",
            initials: "DJ",
            color: theme.palette.primary.main,
        },
        {
            image: secondPhysio,
            name: "Dr. Marcus",
            title: "Lead Therapist",
            initials: "DM",
            color: theme.palette.secondary.main,
        },
    ];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDoctor((prev) => (prev + 1) % doctors.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [doctors.length]);

    // Therapy images carousel state
    const [currentTherapyIndex, setCurrentTherapyIndex] = useState(0);

    // Therapy session images array
    const therapyImages = [therapy1, therapy2, therapy3, therapy4, therapy5, therapy6];

    // Navigation functions for therapy images
    const handlePrevTherapy = () => {
        setCurrentTherapyIndex((prev) => (prev - 1 + therapyImages.length) % therapyImages.length);
    };

    const handleNextTherapy = () => {
        setCurrentTherapyIndex((prev) => (prev + 1) % therapyImages.length);
    };

    // Team member avatars (you can replace with actual team photos)
    const teamMembers = [
        { name: "Dr. Sarah", color: "#FF6B6B" },
        { name: "Dr. John", color: "#4ECDC4" },
        { name: "Dr. Lisa", color: "#45B7D1" },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "white",
                pt: { xs: 6, md: 10 },
                pb: { xs: 6, md: 12 },
                minHeight: { md: "90vh" },
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="xl">
                <Grid container alignItems="center" spacing={{ xs: 2, md: 2 }}>
                    {/* --- LEFT SECTION --- */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                width: "100%",
                            }}
                        >
                            {/* Welcome Text */}
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 400,
                                    lineHeight: 1.3,
                                    color: theme.palette.text.primary,
                                    mb: 2,
                                    fontSize: { xs: "1.8rem", md: "2rem" },
                                    textAlign: "center",
                                }}
                            >
                                Welcome To
                                <br />
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                    Sivasakthi Physiotherapy
                                </Box>
                            </Typography>

                            {/* Star Rating */}
                            <Box sx={{ display: "flex", gap: 0.5, mb: 1.5, justifyContent: "center" }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <StarIcon
                                        key={star}
                                        sx={{
                                            fontSize: 20,
                                            color: "#FFB800",
                                        }}
                                    />
                                ))}
                            </Box>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    mb: 3,
                                    maxWidth: 460,
                                    fontSize: "18px",
                                    textAlign: "center",
                                }}
                            >
                                The Sivasakthi Physiotherapy Hospital established by well qualified health professionals, includes Physicians, surgeons, Physiotherapist etc. It has all types of Govt. Permissions

                                We have in fact given life to stroke, paraplegia etc, and made them to lead normal life only with a small scar of the disease or accident. It’s being managed with qualified physiotherapy doctors of dedication round the clock.
                            </Typography>

                            {/* Team Avatars */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4, justifyContent: "center" }}>
                                <AvatarGroup max={4} sx={{ "& .MuiAvatar-root": { width: 40, height: 40, border: "2px solid white" } }}>
                                    {teamMembers.map((member, index) => (
                                        <Avatar
                                            key={index}
                                            sx={{
                                                bgcolor: member.color,
                                                fontSize: "14px",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {member.name.charAt(4)}
                                        </Avatar>
                                    ))}
                                </AvatarGroup>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: 600,
                                        color: theme.palette.text.primary,
                                    }}
                                >
                                    +
                                </Typography>
                            </Box>

                            {/* Healing Badge */}
                            <Card
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    px: 3,
                                    py: 2,
                                    borderRadius: "16px",
                                    backgroundColor: "white",
                                    border: "1px solid #E8E8E8",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        backgroundColor: theme.palette.primary.main,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white",
                                    }}
                                >
                                    <VerifiedIcon sx={{ fontSize: 24 }} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            color: theme.palette.text.primary,
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        25+
                                    </Typography>
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: "14px",
                                            lineHeight: 1.3,
                                            display: "block",
                                        }}
                                    >
                                        Years of Experience
                                        
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>

                    {/* --- CENTER: MAIN IMAGE SECTION --- */}
                    <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: { xs: 320, md: 400 },
                            }}
                        >
                            {/* Doctor Carousel */}
                            <Box
                                sx={{
                                    position: "relative",
                                    backgroundColor: "white",
                                    borderRadius: "24px",
                                    p: 2,
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                                }}
                            >
                                <Box sx={{ position: "relative", overflow: "hidden", borderRadius: "16px" }}>
                                    {doctors.map((doctor, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                position: index === 0 ? "relative" : "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                transform: currentDoctor === index
                                                    ? "translateX(0)"
                                                    : currentDoctor > index
                                                        ? "translateX(-100%)"
                                                        : "translateX(100%)",
                                                transition: "transform 0.8s ease-in-out",
                                                pointerEvents: currentDoctor === index ? "auto" : "none",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={doctor.image}
                                                alt={`${doctor.name} - Professional Physiotherapist`}
                                                sx={{
                                                    width: "100%",
                                                    height: "auto",
                                                    aspectRatio: "3/4",
                                                    objectFit: "cover",
                                                    display: "block",
                                                    backgroundColor: "#1A3A52",
                                                }}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            {/* Doctor Name Tag */}
                            <Card
                                sx={{
                                    position: "absolute",
                                    bottom: { xs: 30, md: 40 },
                                    left: { xs: -20, md: -30 },
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    px: 2.5,
                                    py: 1.5,
                                    borderRadius: "50px",
                                    backgroundColor: doctors[currentDoctor].color,
                                    boxShadow: `0 8px 24px ${doctors[currentDoctor].color}50`,
                                    transition: "all 0.8s ease-in-out",
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        bgcolor: "white",
                                        color: doctors[currentDoctor].color,
                                        fontSize: "14px",
                                        fontWeight: 700,
                                    }}
                                >
                                    {doctors[currentDoctor].initials}
                                </Avatar>
                                <Box>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "white",
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {doctors[currentDoctor].name}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: "rgba(255,255,255,0.8)",
                                            fontSize: "11px",
                                        }}
                                    >
                                        {doctors[currentDoctor].title}
                                    </Typography>
                                </Box>
                            </Card>

                            {/* Navigation Dots */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: { xs: 10, md: 15 },
                                    right: { xs: 15, md: 20 },
                                    display: "flex",
                                    gap: 1,
                                }}
                            >
                                {doctors.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => setCurrentDoctor(index)}
                                        sx={{
                                            width: currentDoctor === index ? 24 : 8,
                                            height: 8,
                                            borderRadius: "4px",
                                            backgroundColor: currentDoctor === index
                                                ? "white"
                                                : "rgba(255,255,255,0.5)",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                backgroundColor: "white",
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* --- RIGHT SECTION --- */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box>

                            {/* Main Heading */}
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 400,
                                    lineHeight: 1.3,
                                    mb: 4,
                                    color: theme.palette.text.primary,
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                }}
                            >
                                See Your Path
                                <br />
                                To Recovery
                                <br />
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                    Begins.
                                </Box>{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        backgroundColor: theme.palette.primary.main,
                                        color: "white",
                                        ml: 1,
                                        verticalAlign: "middle",
                                    }}
                                >
                                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                                </Box>
                            </Typography>

                            {/* Therapy Session Images Carousel */}
                            <Box sx={{ position: "relative", mb: 2 }}>
                                {/* Images Container */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        position: "relative",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* Previous Button */}
                                    <IconButton
                                        onClick={handlePrevTherapy}
                                        sx={{
                                            position: "absolute",
                                            left: -15,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            zIndex: 2,
                                            backgroundColor: "white",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                            width: 36,
                                            height: 36,
                                            "&:hover": {
                                                backgroundColor: theme.palette.primary.main,
                                                color: "white",
                                            },
                                        }}
                                    >
                                        <ChevronLeftIcon />
                                    </IconButton>

                                    {/* Current Image Pair */}
                                    <Box
                                        component="img"
                                        src={therapyImages[currentTherapyIndex]}
                                        alt={`Therapy Session ${currentTherapyIndex + 1}`}
                                        sx={{
                                            width: "48%",
                                            height: 140,
                                            objectFit: "cover",
                                            borderRadius: "16px",
                                            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                    <Box
                                        component="img"
                                        src={therapyImages[(currentTherapyIndex + 1) % therapyImages.length]}
                                        alt={`Therapy Session ${((currentTherapyIndex + 1) % therapyImages.length) + 1}`}
                                        sx={{
                                            width: "48%",
                                            height: 140,
                                            objectFit: "cover",
                                            borderRadius: "16px",
                                            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                                            transition: "all 0.3s ease",
                                        }}
                                    />

                                    {/* Next Button */}
                                    <IconButton
                                        onClick={handleNextTherapy}
                                        sx={{
                                            position: "absolute",
                                            right: -15,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            zIndex: 2,
                                            backgroundColor: "white",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                            width: 36,
                                            height: 36,
                                            "&:hover": {
                                                backgroundColor: theme.palette.primary.main,
                                                color: "white",
                                            },
                                        }}
                                    >
                                        <ChevronRightIcon />
                                    </IconButton>
                                </Box>

                                {/* Image Counter */}
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        mt: 1.5,
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontSize: "12px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {currentTherapyIndex + 1} / {therapyImages.length}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Pagination Dots */}
                            <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                                {therapyImages.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => setCurrentTherapyIndex(index)}
                                        sx={{
                                            width: currentTherapyIndex === index ? 24 : 8,
                                            height: 8,
                                            borderRadius: "4px",
                                            backgroundColor: currentTherapyIndex === index
                                                ? theme.palette.primary.main
                                                : "#D9D9D9",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                backgroundColor: theme.palette.primary.main,
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
