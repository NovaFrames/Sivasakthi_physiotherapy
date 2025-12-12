import { Box, Container, Typography, useTheme } from "@mui/material";
import TeamCard from "../../Components/Card/TeamCard";

const Teamspage = () => {
    const theme = useTheme();

    // Array of 10 doctors with their details
    const doctors = [
        {
            name: "Dr. Sarah Johnson",
            role: "Chief Physiotherapist",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
            description: "Specialized in sports rehabilitation and orthopedic physiotherapy"
        },
        {
            name: "Dr. Michael Chen",
            role: "Neurological Specialist",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
            description: "Expert in neurological rehabilitation and stroke recovery"
        },
        {
            name: "Dr. Emily Rodriguez",
            role: "Pediatric Physiotherapist",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
            description: "Specialized in pediatric development and child therapy"
        },
        {
            name: "Dr. James Williams",
            role: "Sports Medicine Expert",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
            description: "Professional athlete rehabilitation and injury prevention"
        },
        {
            name: "Dr. Priya Sharma",
            role: "Geriatric Specialist",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
            description: "Expert in elderly care and mobility enhancement"
        },
        {
            name: "Dr. David Thompson",
            role: "Manual Therapy Specialist",
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
            description: "Advanced manual therapy and joint mobilization techniques"
        },
        {
            name: "Dr. Lisa Anderson",
            role: "Women's Health Physiotherapist",
            image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop",
            description: "Specialized in prenatal and postnatal physiotherapy"
        },
        {
            name: "Dr. Robert Martinez",
            role: "Cardiopulmonary Specialist",
            image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
            description: "Expert in cardiac and respiratory rehabilitation"
        },
        {
            name: "Dr. Aisha Patel",
            role: "Pain Management Specialist",
            image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop",
            description: "Chronic pain management and therapeutic interventions"
        },
        {
            name: "Dr. Thomas Lee",
            role: "Orthopedic Physiotherapist",
            image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=400&h=400&fit=crop",
            description: "Post-surgical rehabilitation and musculoskeletal disorders"
        }
    ];

    return (
        <Box sx={{ bgcolor: theme.palette.background.default, py: 8 }}>
            <Container maxWidth="lg">
                {/* Page Header */}
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 2,
                        }}
                    >
                        Meet Our Expert Team
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            maxWidth: 700,
                            mx: "auto",
                            fontSize: "16px",
                            lineHeight: 1.8,
                        }}
                    >
                        Our dedicated team of highly qualified physiotherapists brings years of
                        experience and specialized expertise to provide you with the best care possible.
                        Each member is committed to your recovery and well-being.
                    </Typography>
                </Box>

                {/* Team Cards Grid */}
                <TeamCard therapists={doctors} />
            </Container>
        </Box>
    );
};

export default Teamspage;
