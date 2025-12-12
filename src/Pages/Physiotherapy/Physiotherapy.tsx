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
        <Box sx={{ mt: { xs: -12, md: -14 } }}>
            {/* ================= HERO ================= */}
            <Box
                sx={{
                    height: { xs: 550, md: 550 },
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
                                        "url('https://plus.unsplash.com/premium_photo-1683133816393-b04d94c65872?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D')",
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
                                img: "https://images.unsplash.com/photo-1609113160023-4e31f3765fd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
                            },
                            {
                                title: "Neurological Physiotherapy",
                                icon: <PsychologyIcon />,
                                img: "https://plus.unsplash.com/premium_photo-1663047572047-6c576fe76ae8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
                            },
                            {
                                title: "Cardio Respiratory Physiotherapy",
                                icon: <FitnessCenterIcon />,
                                img: "https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
                            },
                            {
                                title: "Gynaecological Physiotherapy",
                                icon: <PregnantWomanIcon />,
                                img: "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg",
                            },
                            {
                                title: "Geriatric Physiotherapy",
                                icon: <ElderlyIcon />,
                                img: "https://images.unsplash.com/photo-1709880754472-be89c13abc52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
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
                                img: "https://images.unsplash.com/photo-1708687045030-26702e62fc65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBoeXNpb3RoZXJhcHklMjBDb25zdWx0YXRpb258ZW58MHx8MHx8fDA%3D",
                            },
                            {
                                step: "2",
                                title: "Treatment Plan",
                                subtitle: "Personalized treatment program",
                                img: "https://images.unsplash.com/photo-1691935444011-6dc287f96586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBoeXNpb3RoZXJhcHklMjBDb25zdWx0YXRpb258ZW58MHx8MHx8fDA%3D",
                            },
                            {
                                step: "3",
                                title: "Recovery",
                                subtitle: "Exercise and rehabilitation routines",
                                img: "https://plus.unsplash.com/premium_photo-1661963554665-67c3f9538c9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                                image: "https://plus.unsplash.com/premium_photo-1664298669573-307774b8161f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBoeXNpb3RoZXJhcHklMjBDb25zdWx0YXRpb258ZW58MHx8MHx8fDA%3D",
                            },
                            {
                                title: "Joint Replacement Physiotherapy",
                                content:
                                    "After knee, hip, or shoulder joint replacement surgeries, physiotherapy helps improve mobility and strength using tailored exercises and CPM equipment.",
                                image: "https://plus.unsplash.com/premium_photo-1661724706652-92a34496cac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBoeXNpb3RoZXJhcHklMjBDb25zdWx0YXRpb258ZW58MHx8MHx8fDA%3D",
                            },
                            {
                                title: "Sports Physiotherapy",
                                content:
                                    "Sports physiotherapists are trained in field management, kinesio taping, functional rehabilitation, and returning athletes to their sport safely.",
                                image: "https://plus.unsplash.com/premium_photo-1683133808231-cf6b6bba73d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHBoeXNpb3RoZXJhcHklMjBDb25zdWx0YXRpb258ZW58MHx8MHx8fDA%3D",
                            },
                            {
                                title: "Rheumatologic Physiotherapy",
                                content:
                                    "Focuses on arthritis and chronic pain management. Aims at joint protection, break pain cycle, deformity prevention, and functional correction.",
                                image: "https://plus.unsplash.com/premium_photo-1661698068272-987480c4074d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHBoeXNpb3RoZXJhcHklMjBDb25zdWx0YXRpb258ZW58MHx8MHx8fDA%3D",
                            },
                            {
                                title: "Neurological Physiotherapy",
                                content:
                                    "Targets neurological issues with functional re-education, task-oriented therapy, and spinal injury care to maximize recovery.",
                                image: "https://plus.unsplash.com/premium_photo-1661962399003-d2feebf8cf4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHBoeXNpb3RoZXJhcHklMjBDb25zdWx0YXRpb258ZW58MHx8MHx8fDA%3D",
                            },
                            {
                                title: "Cardio-Respiratory Physiotherapy",
                                content:
                                    "Helps manage ICU, post-surgical, and respiratory care with bronchial hygiene, postural drainage and rehabilitation routines.",
                                image: "https://plus.unsplash.com/premium_photo-1733306487434-e0438608dd10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxwaHlzaW90aGVyYXB5JTIwQ29uc3VsdGF0aW9ufGVufDB8fDB8fHww",
                            },
                            {
                                title: "Gynaecological Physiotherapy",
                                content:
                                    "Deals with issues related to pregnancy, PCOS, dysmenorrhea, and pelvic health using targeted exercise programs.",
                                image: "https://media.istockphoto.com/id/857090084/photo/back-problems.webp?a=1&b=1&s=612x612&w=0&k=20&c=ek71kzvkNwnQlbj4Dd3cPBAXsPw3SNRJvuUw5VJTTYQ=",
                            },
                            {
                                title: "Geriatric Physiotherapy",
                                content:
                                    "Addresses age-related issues such as fall risk, arthritis, posture, and mobility through tailored supervised exercises.",
                                image: "https://media.istockphoto.com/id/805089584/photo/just-relax-ill-take-care-of-the-rest.webp?a=1&b=1&s=612x612&w=0&k=20&c=lqIQfL6uY4LtawFxZoIQ58BIgehXBLuHnhavIkw67zY=",
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
