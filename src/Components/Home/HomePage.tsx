import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Stack,
    Card,
    CardContent,
    Chip,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import HeroImage from '../../assets/heroImage.png';

const colors = {
    primary: "#1a4d4d",
    dark: "#0f2b2b",
    light: "#f4fafa",
};

// ======================= HERO SECTION =======================

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                position: "relative",
                background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.primary} 100%)`,
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                color: "#fff",
                overflow: "hidden",
            }}
        >
            {/* Abstract background elements */}
            <Box
                sx={{
                    position: "absolute",
                    top: -100,
                    right: -100,
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: -150,
                    left: -150,
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.03)",
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Chip 
                            label="Since 1999" 
                            sx={{ 
                                backgroundColor: "rgba(255,255,255,0.15)", 
                                color: "white", 
                                mb: 3,
                                fontWeight: 600
                            }} 
                        />
                        
                        <Typography
                            variant={isMobile ? "h3" : "h2"}
                            sx={{ 
                                fontWeight: 800, 
                                lineHeight: 1.1,
                                background: "linear-gradient(45deg, #fff 30%, #f4fafa 90%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Restoring Movement, Renewing Lives
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{ 
                                mt: 3, 
                                fontWeight: 400, 
                                opacity: 0.9,
                                fontStyle: "italic"
                            }}
                        >
                            "Doctors add years to life — Physiotherapists add life to those years"
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ 
                                mt: 3, 
                                opacity: 0.8,
                                fontSize: "1.1rem"
                            }}
                        >
                            Fully approved Government facility established by qualified physicians, 
                            surgeons and physiotherapists dedicated to comprehensive rehabilitation.
                        </Typography>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 5 }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: colors.light,
                                    color: colors.primary,
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: "50px",
                                    fontWeight: 700,
                                    "&:hover": {
                                        backgroundColor: "#fff",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                                    },
                                    transition: "all 0.3s ease"
                                }}
                            >
                                Book Consultation
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: colors.light,
                                    color: colors.light,
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: "50px",
                                    fontWeight: 600,
                                    "&:hover": {
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        borderColor: "#fff",
                                        transform: "translateY(-2px)",
                                    },
                                    transition: "all 0.3s ease"
                                }}
                            >
                                Our Services
                            </Button>
                        </Stack>
                    </Grid>
                    
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                position: "relative",
                                height: 500,
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                                transform: "rotate(-2deg)",
                                "&:hover": {
                                    transform: "rotate(0deg) scale(1.02)",
                                },
                                transition: "all 0.5s ease"
                            }}
                        >
                            <Box
                                component="img"
                                src={HeroImage}
                                alt="Physiotherapy Treatment"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

// ======================= ABOUT SECTION =======================

const AboutSection = () => (
    <Box sx={{ py: 15}}>
        <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center">
                
                {/* Text Content */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{ 
                            fontWeight: 800, 
                            color: colors.dark,
                            position: "relative",
                            "&:after": {
                                content: '""',
                                position: "absolute",
                                bottom: -10,
                                left: 0,
                                width: 60,
                                height: 4,
                                backgroundColor: colors.primary,
                                borderRadius: 2
                            }
                        }}
                    >
                        About Our Legacy
                    </Typography>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}>
                            Founded in 1999 by visionary healthcare professionals, Sivasakthi Physiotherapy 
                            Hospital has been at the forefront of bringing advanced rehabilitation services 
                            to rural communities.
                        </Typography>

                        <Box sx={{ pl: 2, borderLeft: `4px solid ${colors.light}` }}>
                            <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, mb: 2 }}>
                                <strong>Dr. M. Arumugasamy, BPT, DVMS, PGDFM</strong> and{" "}
                                <strong>Dr. P. B. M. A Doss, MPT (Ortho), D.S.P.</strong> established 
                                this institution with a mission to make quality physiotherapy accessible to all.
                            </Typography>
                        </Box>

                        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, mt: 3 }}>
                            Today, we offer multiple specialized streams of physiotherapy, combining 
                            traditional knowledge with modern technology for comprehensive patient care.
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: colors.primary,
                                px: 4,
                                borderRadius: "25px",
                                fontWeight: 600,
                            }}
                        >
                            Meet Our Team
                        </Button>
                        <Button
                            sx={{
                                color: colors.primary,
                                textTransform: "none",
                                fontWeight: 600,
                            }}
                        >
                            View Certifications →
                        </Button>
                    </Stack>
                </Grid>

                {/* Image Grid */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 6 }}>
                            <Box
                                sx={{
                                    height: 200,
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    mb: 2,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                }}
                            >
                                <img
                                    src="https://images.pexels.com/photos/8460091/pexels-photo-8460091.jpeg"
                                    alt="Therapy Session"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    height: 250,
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                }}
                            >
                                <img
                                    src="https://images.pexels.com/photos/6627840/pexels-photo-6627840.jpeg"
                                    alt="Modern Equipment"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <Box
                                sx={{
                                    height: 250,
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    mb: 2,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                }}
                            >
                                <img
                                    src="https://images.pexels.com/photos/4506165/pexels-photo-4506165.jpeg"
                                    alt="Patient Care"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    height: 200,
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                }}
                            >
                                <img
                                    src="https://images.pexels.com/photos/6129688/pexels-photo-6129688.jpeg"
                                    alt="Facility"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    </Box>
);

// ======================= MISSION & VISION SECTION =======================

const MissionVisionSection = () => {
    const cardData = [
        {
            title: "Our Mission",
            text: `To prepare competent professionals with sound knowledge, moral values,
            and excellent skills through quality education while providing global 
            health services for rural communities.`,
            bg: "white",
            color: colors.dark,
            isGradient: false,
        },
        {
            title: "Our Vision",
            text: `To promote globally competitive training in medicine and physiotherapy,
            enhancing scientific temper and excellence across all medical disciplines.`,
            bg: "white",
            color: colors.dark,
            isGradient: false,
        },
        {
            title: "Our Motto",
            text: `"We can see God through the smile of disabled people."`,
            bg: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)`,
            color: "white",
            isGradient: true,
        },
    ];

    return (
        <Box>
            <Container maxWidth="lg">
                
                {/* Section Header */}
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: colors.dark }}>
                        Our Guiding Principles
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, color: "#666", maxWidth: 600, mx: "auto" }}>
                        Driven by compassion and excellence, we strive to make a meaningful difference 
                        in every life we touch
                    </Typography>
                </Box>

                {/* Dynamic Cards */}
                <Grid container spacing={4}>
                    {cardData.map((card, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    background: card.bg,
                                    color: card.color,
                                    borderRadius: 4,
                                    border: card.isGradient ? "none" : `2px solid ${colors.light}`,
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <CardContent sx={{ p: 4, textAlign: "center" }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                        {card.title}
                                    </Typography>
                                    <Typography sx={{ mt: 2, lineHeight: 1.7, fontStyle: card.isGradient ? "italic" : "normal" }}>
                                        {card.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
};


// ======================= FACILITIES SECTION =======================

const FacilitiesSection = () => (
    <Box sx={{ py: 15}}>
        <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: colors.dark }}>
                    World-Class Facilities
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, color: "#666", maxWidth: 600, mx: "auto" }}>
                    Equipped with advanced technology and staffed by dedicated professionals, 
                    we provide comprehensive care under one roof
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {[
                    {
                        title: "24/7 Nursing Support",
                        desc: "Round-the-clock monitoring ensuring patient safety and accelerated recovery.",
                        img: "https://images.pexels.com/photos/6129688/pexels-photo-6129688.jpeg",
                    },
                    {
                        title: "Advanced Therapeutics",
                        desc: "State-of-the-art electrotherapy and pain management systems for optimal results.",
                        img: "https://images.pexels.com/photos/6627840/pexels-photo-6627840.jpeg",
                    },
                    {
                        title: "Gait Rehabilitation School",
                        desc: "India's premier gait training facility for advanced mobility restoration.",
                        img: "https://images.pexels.com/photos/4506165/pexels-photo-4506165.jpeg",
                    },
                    {
                        title: "De-addiction Center",
                        desc: "Comprehensive psychiatric care with constant monitoring and support.",
                        img: "https://images.pexels.com/photos/6749771/pexels-photo-6749771.jpeg",
                        
                    },
                    {
                        title: "Senior Care Home",
                        desc: "Peaceful environment with full-time medical and nursing care for elderly.",
                        img: "https://images.pexels.com/photos/7328829/pexels-photo-7328829.jpeg",
                    },
                    {
                        title: "Sports Rehabilitation",
                        desc: "Specialized programs for athletes and sports injury recovery.",
                        img: "https://images.pexels.com/photos/6456151/pexels-photo-6456151.jpeg",
                    },
                ].map((item, index) => (
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                        <Card
                            sx={{
                                height: "100%",
                                borderRadius: 3,
                                overflow: "hidden",
                            }}
                        >
                            <Box sx={{ position: "relative" }}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{ 
                                        width: "100%", 
                                        height: 200, 
                                        objectFit: "cover" 
                                    }}
                                />
                            </Box>

                            <CardContent sx={{ p: 3 }}>
                                <Typography 
                                    variant="h6" 
                                    sx={{ 
                                        fontWeight: 700,
                                        color: colors.dark
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        mt: 1, 
                                        color: "#555",
                                        lineHeight: 1.6
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                                <Button
                                    sx={{
                                        mt: 2,
                                        color: colors.primary,
                                        textTransform: "none",
                                        fontWeight: 600,
                                        fontSize: "0.875rem",
                                        p: 1
                                    }}
                                >
                                    Learn more →
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Box>
);

// ======================= EXPORT =======================

const Homepage = () => (
    <Box>
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <FacilitiesSection />
    </Box>
);

export default Homepage;