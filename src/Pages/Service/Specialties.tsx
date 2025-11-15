import {
    Box,
    Container,
    Grid,
    Typography,
    Paper,
} from "@mui/material";
import {

    CheckCircle,
} from "@mui/icons-material";



const inpatientItems = [
    "In-Patients Facility",
    "24 hrs Intensive Physio Care",
    "24 hrs Nurses Care",
    "Hi-Tech Physiotherapy Instruments",
    "Hi-Tech Therapeutic Gym",
    "Hydro Therapy Swimming Pool",
    "Bio Feedback",
    "Homely Environment",
    "Specialist Consultation",
    "Psychological Consultant",
];

const Specialties = () => {
    return (
        <Box mb={10}>
            <Box
                sx={{
                    position: "relative",
                    py: { xs: 12, md: 20 },
                    textAlign: "center",
                    color: "white",
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1589104759909-e355f8999f7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhdGllbnQlMjBldmVudHN8ZW58MHx8MHx8fDA%3D')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                />

                <Container sx={{ position: "relative", zIndex: 2 }}>
                    <Typography variant="h3" fontWeight={700} gutterBottom>
                        Our Specialties
                    </Typography>

                    <Typography variant="h6" maxWidth="700px" mx="auto" color="grey.200">
                        Regain independence and improve your quality of life through targeted
                        functional training
                    </Typography>
                </Container>
            </Box>
            <Container maxWidth="lg">


                {/* ---------------------- IN-PATIENT FACILITY ---------------------- */}
                <Paper elevation={3} sx={{ mb: 10, p: 4,mt:10 }}>
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        color="primary.main"
                        mb={3}
                    >
                        In-Patients Facility
                    </Typography>

                    <Box
                        sx={{
                            p: 4,
                            borderRadius: 3,
                        }}

                    >
                        <Grid container spacing={2}>
                            {inpatientItems.map((text, idx) => (
                                <Grid size={{ xs: 12, lg: 4 }} key={idx}>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <CheckCircle color="primary" sx={{ mr: 1 }} />
                                        <Typography variant="body1" color="text.primary">
                                            {text}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Paper>


                {/* ---------------------- FACILITIES ---------------------- */}
                <Paper elevation={3} sx={{ mb: 10, p: 4 }}>
                    <Grid container spacing={6} alignItems="center">
                        {/* LEFT SIDE – CONTENT */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Typography
                                variant="h4"
                                fontWeight={700}
                                color="primary.main"
                                mb={2}
                            >
                                Facilities
                            </Typography>

                            <Box sx={{ p: 4, borderRadius: 3 }} >
                                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                                    The hospital is supported by 24 hrs nursing staff to take care of
                                    all the needs of the patients. We have specialized doctors who visit
                                    regularly and provide guidance for speedy recovery. The hospital is
                                    equipped with advanced therapeutic equipment and a large therapeutic
                                    exercise hall.
                                    <br />
                                    <br />
                                    For recreation, the hospital features a modern auditorium equipped
                                    with advanced sound & lighting systems, including a meditation hall.
                                    The entire complex covers 3 acres with scenic gardens, ample parking
                                    space, indoor auditorium, canteen, and a lush coconut grove offering
                                    a peaceful, natural environment.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* RIGHT SIDE – IMAGE */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    paddingTop: "60%", // fixed aspect ratio
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBoeXNpb3RoZXJhcHklMjBpbnN0cnVtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt="Facility"
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        top: 0,
                                        left: 0,
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>


                {/* ---------------------- DE-ADDICTION ---------------------- */}
                <Paper elevation={3} sx={{ mb: 10, p: 4 }}>
                    <Grid container spacing={6} alignItems="center">
                        {/* LEFT SIDE — CONTENT */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    paddingTop: "60%", // fixed aspect ratio
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1527236438218-d82077ae1f85?w=1200"
                                    alt="De-Addiction Center"
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        top: 0,
                                        left: 0,
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Grid>

                        {/* RIGHT SIDE — IMAGE */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Typography
                                variant="h4"
                                fontWeight={700}
                                color="primary.main"
                                mb={2}
                            >
                                De-Addiction
                            </Typography>

                            <Box sx={{ p: 4, borderRadius: 3 }} >
                                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                                    The hospital is planning a separate De-Addiction block supported by
                                    continuous monitoring from eminent psychiatrists. Medical
                                    professionals across Tamil Nadu recommend our centre for effective
                                    rehabilitation and recovery for physiotherapy and addiction patients.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>


                {/* ---------------------- OLD AGE HOME ---------------------- */}
                <Paper elevation={3}>
                    <Grid container spacing={6} alignItems="center">
                        {/* LEFT SIDE — CONTENT */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Typography
                                variant="h4"
                                fontWeight={700}
                                color="primary.main"
                                mb={2}
                            >
                                Old Age Home
                            </Typography>

                            <Box sx={{ p: 4, borderRadius: 3 }} >
                                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                                    We also run an Old Age Home, specializing in caring for elderly
                                    individuals and offering them a peaceful, safe, and medically
                                    supervised environment. Our goal is to give every senior a fresh
                                    lease of life with proper nursing care, attention, and emotional
                                    support.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* RIGHT SIDE — IMAGE */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    paddingTop: "60%", // maintains aspect ratio
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200"
                                    alt="Old Age Home"
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        top: 0,
                                        left: 0,
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

            </Container>
        </Box>
    );
};

export default Specialties;
