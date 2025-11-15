import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    Stack,
    Divider,
    Button,
    Avatar,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HealingIcon from "@mui/icons-material/Healing";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import ElderlyIcon from "@mui/icons-material/Elderly";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ScheduleIcon from "@mui/icons-material/Schedule";

const colors = {
    primary: "#1E4620",
    accent: "#E37B3C",
    softBg: "#F6FFF6",
    lightGray: "#F1F5F2",
};

interface SectionProps {
    title: string,
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <Box sx={{ py: 8 }}>
        <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            sx={{ mb: 4 }}
        >
            {title}
        </Typography>
        {children}
    </Box>
);

const Physiotheraphy = () => {
    return (
        <Box>
            {/* ================= HERO ================= */}
            <Box
                sx={{
                    height: { xs: 350, md: 450 },
                    backgroundImage:
                        "url('https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        px: 2,
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight={700}
                        sx={{ color: "#fff", textAlign: "center", maxWidth: 600 }}
                    >
                        Restore Movement. Reduce Pain. Rebuild Strength.
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="lg">
                {/* ================= WHAT IS PHYSIO ================= */}
                <Section title="What is Physiotherapy?">
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                                Physiotherapy is a medical science that helps people restore,
                                maintain, and maximize their physical strength and function. It is
                                used to treat musculoskeletal issues, neurological disorders,
                                sports injuries, and much more.
                                <br />
                                <br />
                                Physiotherapists are professionally trained to:
                            </Typography>

                            <Stack spacing={1.2} sx={{ mt: 2 }}>
                                {[
                                    "Diagnose physical conditions and develop treatment plans",
                                    "Rehabilitate injury and mobility loss",
                                    "Manage chronic conditions with exercise therapy",
                                    "Educate patients for long-term health",
                                ].map((item, i) => (
                                    <Stack key={i} direction="row" spacing={1} alignItems="center">
                                        <CheckCircleIcon sx={{ color: colors.primary }} />
                                        <Typography>{item}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    height: 350,
                                    backgroundImage:
                                        "url('https://images.pexels.com/photos/4506141/pexels-photo-4506141.jpeg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: 4,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Section>

                <Divider />

                {/* ================= SPECIALTIES ================= */}
                <Section title="Physiotherapy Specialties">
                    <Grid container spacing={4}>
                        {[
                            {
                                title: "Musculoskeletal Physiotherapy",
                                icon: <HealingIcon />,
                                img: "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg",
                            },
                            {
                                title: "Sports Physiotherapy",
                                icon: <SportsMartialArtsIcon />,
                                img: "https://images.pexels.com/photos/5327569/pexels-photo-5327569.jpeg",
                            },
                            {
                                title: "Neurological Physiotherapy",
                                icon: <PsychologyIcon />,
                                img: "https://images.pexels.com/photos/8369773/pexels-photo-8369773.jpeg",
                            },
                            {
                                title: "Cardio Respiratory Physiotherapy",
                                icon: <FitnessCenterIcon />,
                                img: "https://images.pexels.com/photos/3845761/pexels-photo-3845761.jpeg",
                            },
                            {
                                title: "Gynaecological Physiotherapy",
                                icon: <PregnantWomanIcon />,
                                img: "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg",
                            },
                            {
                                title: "Geriatric Physiotherapy",
                                icon: <ElderlyIcon />,
                                img: "https://images.pexels.com/photos/7989029/pexels-photo-7989029.jpeg",
                            },
                        ].map((s, i) => (
                            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        overflow: "hidden",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: 180,
                                            backgroundImage: `url(${s.img})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    />
                                    <CardContent sx={{ backgroundColor: "#fff" }}>
                                        <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
                                            <Avatar sx={{ backgroundColor: colors.primary }}>{s.icon}</Avatar>
                                            <Typography fontWeight={700}>{s.title}</Typography>
                                        </Stack>
                                        <Typography variant="body2">
                                            Specialized training for effective diagnosis, manual therapy, and
                                            recovery.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Section>

                <Divider />

                {/* ================= FEATURES ================= */}
                <Section title="Why Choose Us?">
                    <Grid container spacing={5}>
                        {[
                            {
                                icon: <LocalHospitalIcon fontSize="large" />,
                                title: "Modern Technology",
                                subtitle: "Laser, EMG-Biofeedback, Shockwave",
                            },
                            {
                                icon: <AccessTimeIcon fontSize="large" />,
                                title: "Quick Recovery",
                                subtitle: "Advanced protocols to speed up healing",
                            },
                            {
                                icon: <ThumbUpIcon fontSize="large" />,
                                title: "Certified Experts",
                                subtitle: "100+ years of combined experience",
                            },
                        ].map((item, index) => (
                            <Grid key={index} size={{ xs: 12, md: 4 }}>
                                <Card
                                    sx={{
                                        p: 3,
                                        textAlign: "center",
                                        borderRadius: 4,
                                        backgroundColor: "white",
                                        height: "100%",
                                    }}
                                >
                                    <Avatar
                                        sx={{ bgcolor: colors.primary, mx: "auto", mb: 2, width: 56, height: 56 }}
                                    >
                                        {item.icon}
                                    </Avatar>
                                    <Typography fontWeight={700}>{item.title}</Typography>
                                    <Typography>{item.subtitle}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Section>

                <Divider />

                {/* ================= PROCESS TIMELINE ================= */}
                <Section title="Our Treatment Process">
                    <Grid container spacing={4}>
                        {[
                            {
                                step: "1",
                                title: "Consultation",
                                subtitle: "Initial evaluation with diagnosis",
                                img: "https://images.pexels.com/photos/3845755/pexels-photo-3845755.jpeg",
                            },
                            {
                                step: "2",
                                title: "Treatment Plan",
                                subtitle: "Personalized treatment program",
                                img: "https://images.pexels.com/photos/4506100/pexels-photo-4506100.jpeg",
                            },
                            {
                                step: "3",
                                title: "Recovery",
                                subtitle: "Exercise and rehabilitation routines",
                                img: "https://images.pexels.com/photos/4506107/pexels-photo-4506107.jpeg",
                            },
                        ].map((item, i) => (
                            <Grid key={i} size={{ xs: 12, md: 4 }}>
                                <Card
                                    sx={{
                                        borderRadius: 6,
                                        overflow: "hidden",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: 200,
                                            backgroundImage: `url(${item.img})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={600}>
                                            {item.step}. {item.title}
                                        </Typography>
                                        <Typography variant="body2">{item.subtitle}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Section>

                <Divider />

                {/* ================= PHYSIO RESPONSIBILITIES ================= */}
                <Section title="Responsibilities of a Physical Therapist">
                    <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                        Physical therapists are qualified and professionally required to:
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid size={6}>

                            <Stack spacing={1.8}>
                                {[
                                    "Undertake a comprehensive examination of the patient/client or needs of a group",
                                    "Evaluate the findings to make clinical judgments",
                                    "Formulate a diagnosis, prognosis, and treatment plan",
                                ].map((point, i) => (
                                    <Stack direction="row" spacing={1.5} key={i}>
                                        <CheckCircleIcon sx={{ color: colors.primary }} />
                                        <Typography>{point}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid size={6}>
                            <Stack spacing={1.8}>
                                {[
                                    "Provide consultation and refer to other professionals when necessary",
                                    "Implement a treatment programme",
                                    "Measure outcomes of interventions and make self-management recommendations",
                                ].map((point, i) => (
                                    <Stack direction="row" spacing={1.5} key={i}>
                                        <CheckCircleIcon sx={{ color: colors.primary }} />
                                        <Typography>{point}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Section>

                <Divider />

                {/* ================= DETAILED SPECIALTIES CONTENT ================= */}
                <Section title="Detailed Physiotherapy Specialties">
                    <Grid container spacing={4}>
                        {[
                            {
                                title: "Musculoskeletal / Orthopaedic Physiotherapy",
                                content:
                                    "Specially trained in manual therapy and postural corrections. Focuses on mechanical diagnosis and correcting pain-producing structures while breaking the pain-spasm cycle.",
                                image: "https://images.pexels.com/photos/7189776/pexels-photo-7189776.jpeg",
                            },
                            {
                                title: "Joint Replacement Physiotherapy",
                                content:
                                    "After knee, hip, or shoulder joint replacement surgeries, physiotherapy helps improve mobility and strength using tailored exercises and CPM equipment.",
                                image: "https://images.pexels.com/photos/4506103/pexels-photo-4506103.jpeg",
                            },
                            {
                                title: "Sports Physiotherapy",
                                content:
                                    "Sports physiotherapists are trained in field management, kinesio taping, functional rehabilitation, and returning athletes to their sport safely.",
                                image: "https://images.pexels.com/photos/4324020/pexels-photo-4324020.jpeg",
                            },
                            {
                                title: "Rheumatologic Physiotherapy",
                                content:
                                    "Focuses on arthritis and chronic pain management. Aims at joint protection, break pain cycle, deformity prevention, and functional correction.",
                                image: "https://images.pexels.com/photos/4056921/pexels-photo-4056921.jpeg",
                            },
                            {
                                title: "Neurological Physiotherapy",
                                content:
                                    "Targets neurological issues with functional re-education, task-oriented therapy, and spinal injury care to maximize recovery.",
                                image: "https://images.pexels.com/photos/4505724/pexels-photo-4505724.jpeg",
                            },
                            {
                                title: "Cardio-Respiratory Physiotherapy",
                                content:
                                    "Helps manage ICU, post-surgical, and respiratory care with bronchial hygiene, postural drainage and rehabilitation routines.",
                                image: "https://images.pexels.com/photos/4498193/pexels-photo-4498193.jpeg",
                            },
                            {
                                title: "Gynaecological Physiotherapy",
                                content:
                                    "Deals with issues related to pregnancy, PCOS, dysmenorrhea, and pelvic health using targeted exercise programs.",
                                image: "https://images.pexels.com/photos/7619999/pexels-photo-7619999.jpeg",
                            },
                            {
                                title: "Geriatric Physiotherapy",
                                content:
                                    "Addresses age-related issues such as fall risk, arthritis, posture, and mobility through tailored supervised exercises.",
                                image: "https://images.pexels.com/photos/5698104/pexels-photo-5698104.jpeg",
                            },
                        ].map((spec, i) => (
                            <Grid size={{ xs: 12, md: 6 }} key={i}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        height: "100%",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: 220,
                                            backgroundImage: `url(${spec.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                                            {spec.title}
                                        </Typography>
                                        <Typography variant="body2">{spec.content}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Section>


                <Divider />

                {/* ================= ADVANCED TECHNIQUES ================= */}
                <Section title="Advanced Physiotherapy Approaches & Concepts">
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        Our experts use a combination of evidence-based practices and advanced therapeutic techniques, including:
                    </Typography>

                    <Grid container spacing={3}>
                        {[
                            {
                                category: "Musculoskeletal Manual Therapy Concepts",
                                items: ["Cyriax", "Maitland", "Mulligan", "Mckenzie", "Neural Mobilization"],
                            },
                            {
                                category: "Myofascial Techniques",
                                items: [
                                    "Integrated neuromuscular inhibition",
                                    "Myofascial release",
                                    "Trigger point therapy",
                                    "Muscle energy technique",
                                    "Positional release technique",
                                ],
                            },
                            {
                                category: "Neurological Approaches",
                                items: [
                                    "Task oriented approach",
                                    "Bobath/Neuro developmental therapy",
                                    "Brunstrom movement therapy",
                                    "Motor Relearning",
                                    "Jonestone approach",
                                    "Sensory Integration",
                                    "PNF (Proprioceptive Neuromuscular Facilitation)",
                                    "Roods approach",
                                ],
                            },
                            {
                                category: "Advanced Therapies",
                                items: [
                                    "Dry Needling",
                                    "Kinesio Taping",
                                    "Rigid tapping",
                                    "Advanced Core stabilization",
                                    "Exercise prescription for life style disorders",
                                    "Comprehensive rehabilitation for neurological problems",
                                    "Laser",
                                    "EMG – Bio feedback & Triggered stimulation",
                                    "Cryo/cuff cryotherapy unit",
                                    "IFT UST Combination therapy unit",
                                ],
                            },
                        ].map((category, i) => (
                            <Grid key={i} size={{ xs: 12, sm: 6 }}>
                                <Card
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        sx={{ mb: 2, color: colors.primary, textAlign: "center" }}
                                    >
                                        {category.category}
                                    </Typography>

                                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                        {category.items.map((item, idx) => (
                                            <Typography
                                                key={idx}
                                                component="li"
                                                variant="body2"
                                                sx={{ mb: 0.7 }}
                                            >
                                                {item}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Section>



            </Container>

            {/* ================= CTA SECTION ================= */}
            <Box
                sx={{
                    pb: 4,
                    textAlign: "center",
                    color: "#000",
                }}
            >
                <Typography variant="h4" fontWeight={700}>
                    Ready to Recover Faster?
                </Typography>
                <Typography sx={{ mt: 1, mb: 3 }}>
                    Book an appointment with our expert physiotherapists today.
                </Typography>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "#1a4d4d", color: "#fff", px: 5 }}
                    startIcon={<ScheduleIcon />}
                >
                    Book Now
                </Button>
            </Box>
        </Box>
    );
};

export default Physiotheraphy;
