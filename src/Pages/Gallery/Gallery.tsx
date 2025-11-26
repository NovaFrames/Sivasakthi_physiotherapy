import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import GalleryCard from "../../Components/Card/GalleryCard"

const Gallery = () => {
    const theme = useTheme();
    const activities = [
        {
            id: 1,
            title: "Balance Training",
            description: "Improve stability and prevent falls through targeted exercises",
            image: "https://images.unsplash.com/photo-1619975101918-6d27886e8c6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGh5c2lvdGhlcmFweSUyMEhvc3BpdGFsc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            id: 2,
            title: "Strength Building",
            description: "Progressive resistance training for functional movement",
            image: "https://plus.unsplash.com/premium_photo-1663100395591-dd952cd55707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBoeXNpb3RoZXJhcHklMjBIb3NwaXRhbHN8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 3,
            title: "Mobility Exercises",
            description: "Enhance range of motion and flexibility for daily activities",
            image: "https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 4,
            title: "Gait Training",
            description: "Restore normal walking patterns and improve coordination",
            image: "https://plus.unsplash.com/premium_photo-1683133816393-b04d94c65872?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 5,
            title: "Core Stabilization",
            description: "Strengthen your core for better posture and movement control", 
            image: "https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 6,
            title: "Sport-Specific Training",
            description: "Return to your favorite activities with confidence",
            image: "https://plus.unsplash.com/premium_photo-1661779581951-eb3a2fe942bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 7,
            title: "Manual Therapy",
            description: "Hands-on treatment to reduce pain and improve function",
            image: "https://images.unsplash.com/photo-1709880754472-be89c13abc52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
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
            image: "https://plus.unsplash.com/premium_photo-1661779559284-b7ee4bfdbbe2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 10,
            title: "Spinal Therapy",
            description: "Specialized treatment for back and neck conditions",
            image: "https://plus.unsplash.com/premium_photo-1661766924609-2667ea7398b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHBoeXNpb3RoZXJhcHl8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 11,
            title: "Therapeutic Exercise",
            description: "Customized exercise programs for injury recovery",
            image: "https://plus.unsplash.com/premium_photo-1664475675425-125f8182c4b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxwaHlzaW90aGVyYXB5fGVufDB8fDB8fHww",
        },
        {
            id: 12,
            title: "Posture Correction",
            description: "Address alignment issues and develop better movement habits",
            image: "https://plus.unsplash.com/premium_photo-1682094350784-37b8003d93dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHxwaHlzaW90aGVyYXB5fGVufDB8fDB8fHww",
        },
        {
            id: 13,
            title: "Elderly Care Physiotherapy",
            description: "Specialized treatment for age-related mobility challenges",
            image: "https://media.istockphoto.com/id/2195014982/photo/indian-physiotherapist-help-elderly-man-with-dumbbell-exercise-to-recover-from-injury-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pk49qIE7UHQJFftaihdWXRxNWnmDFHLMI_7e0sonwSg=",
        },
        {
            id: 14,
            title: "Pain Management",
            description: "Evidence-based approaches to reduce chronic pain",
            image: "https://media.istockphoto.com/id/2195013042/photo/indian-female-physiotherapist-stretching-band-and-mature-patient-medical-care-and-wellness.webp?a=1&b=1&s=612x612&w=0&k=20&c=H17BYTz1X9y4Y73qkQYx6ofGJStO_QYDMpwzHT4-92k=",
        },
        {
            id: 15,
            title: "Functional Movement Training",
            description: "Train movements that translate to real-life activities",
            image: "https://media.istockphoto.com/id/1468021691/photo/checking-range-of-motion.webp?a=1&b=1&s=612x612&w=0&k=20&c=ssdJmnMXbuYtJaw1HGxvrU2iO-em8e7tRkaXo3VlXFo=",
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