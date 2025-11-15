import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import GalleryCard from "../../Components/Card/GalleryCard"

const Gallery = () => {
    const theme = useTheme();
    const activities = [
    {
        id: 1,
        title: "Balance Training",
        description: "Improve stability and prevent falls through targeted exercises",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    },
    {
        id: 2,
        title: "Strength Building",
        description: "Progressive resistance training for functional movement",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    },
    {
        id: 3,
        title: "Mobility Exercises",
        description: "Enhance range of motion and flexibility for daily activities",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop",
    },
    {
        id: 4,
        title: "Gait Training",
        description: "Restore normal walking patterns and improve coordination",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    },
    {
        id: 5,
        title: "Core Stabilization",
        description: "Strengthen your core for better posture and movement control",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
    },
    {
        id: 6,
        title: "Sport-Specific Training",
        description: "Return to your favorite activities with confidence",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    },
    {
        id: 7,
        title: "Manual Therapy",
        description: "Hands-on treatment to reduce pain and improve function",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    },
    {
        id: 8,
        title: "Stretching Therapy",
        description: "Targeted stretching to improve flexibility and reduce tension",
        image: "https://images.unsplash.com/photo-1522898467493-49726bf28798?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 9,
        title: "Post-Surgery Rehabilitation",
        description: "Comprehensive recovery programs for optimal healing",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
    {
        id: 10,
        title: "Spinal Therapy",
        description: "Specialized treatment for back and neck conditions",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
    },
    {
        id: 11,
        title: "Therapeutic Exercise",
        description: "Customized exercise programs for injury recovery",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    },
    {
        id: 12,
        title: "Posture Correction",
        description: "Address alignment issues and develop better movement habits",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    },
    {
        id: 13,
        title: "Elderly Care Physiotherapy",
        description: "Specialized treatment for age-related mobility challenges",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
    },
    {
        id: 14,
        title: "Pain Management",
        description: "Evidence-based approaches to reduce chronic pain",
        image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&h=600&fit=crop",
    },
    {
        id: 15,
        title: "Functional Movement Training",
        description: "Train movements that translate to real-life activities",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop",
    },
];


    return (
        <Box>
            <Typography
                                variant="h4"
                                component="h1"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.palette.primary.main,
                                    textTransform: 'uppercase',
                                    textAlign: 'center',
                                    mt: 8,
                                    mb: 4,
                                }}
                            >
                                Gallery
                            </Typography>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <GalleryCard activities={activities} />
                </Grid>
            </Container>

        </Box>
    )
}

export default Gallery