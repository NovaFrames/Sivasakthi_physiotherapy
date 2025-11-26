import {
  Box,
  Container,
  Typography,
  Grid,
  Card,


} from "@mui/material";

// MUI ICONS
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BoltIcon from "@mui/icons-material/Bolt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GalleryCard from "../../Components/Card/GalleryCard";

interface ActivityType {
  id: number;
  title: string;
  description: string;
  image: string;
}

const FunctionalActivities = () => {

  const activities: ActivityType[] = [
    {
      id: 1,
      title: "Balance Training",
      description: "Improve stability and prevent falls through targeted exercises",
      image: "https://images.unsplash.com/photo-1669316714681-5fe047de58b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2lvdGhlcmFwaHklMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "Strength Building",
      description: "Progressive resistance training for functional movement",
      image: "https://images.unsplash.com/photo-1717500251997-80b234166d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGh5c2lvdGhlcmFwaHklMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "Mobility Exercises",
      description: "Enhance range of motion and flexibility for daily activities",
      image: "https://images.unsplash.com/photo-1627257058769-0a99529e4312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGh5c2lvdGhlcmFwaHklMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      title: "Gait Training",
      description: "Restore normal walking patterns and improve coordination",
      image: "https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBoeXNpb3RoZXJhcGh5JTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      title: "Core Stabilization",
      description: "Strengthen your core for better posture and movement control",
      image: "https://images.unsplash.com/photo-1622878327584-40ac62f6a97b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBoeXNpb3RoZXJhcGh5JTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      title: "Sport-Specific Training",
      description: "Return to your favorite activities with confidence",
      image: "https://images.unsplash.com/photo-1580281657702-257584239a55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBoeXNpb3RoZXJhcGh5JTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const benefits = [
    {
      icon: <TrackChangesIcon sx={{ fontSize: 40 }} />,
      title: "Personalized Goals",
      description: "Custom treatment plans tailored to your specific needs",
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      title: "Holistic Approach",
      description: "Address the root cause, not just symptoms",
    },
    {
      icon: <BoltIcon sx={{ fontSize: 40 }} />,
      title: "Faster Recovery",
      description: "Evidence-based techniques for optimal results",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: "Expert Care",
      description: "Licensed professionals with years of experience",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "white" }}>
      {/* HERO SECTION */}
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
          <FitnessCenterIcon
            sx={{ fontSize: 70, mb: 2, display: "block", mx: "auto" }}
          />

          <Typography variant="h3" fontWeight={700} gutterBottom>
            Functional Activities
          </Typography>

          <Typography variant="h6" maxWidth="700px" mx="auto" color="grey.200">
            Regain independence and improve your quality of life through targeted
            functional training
          </Typography>
        </Container>
      </Box>

      {/* INTRODUCTION */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          color="primary.main"
          mb={2}
        >
          What Are Functional Activities?
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          maxWidth="800px"
          mx="auto"
          mb={6}
        >
          Functional activities focus on exercises and movements that directly
          relate to your daily life. Our approach helps you regain strength,
          mobility, and confidence to perform everyday tasks with ease.
        </Typography>

        {/* BENEFIT CARDS */}
        <Grid container spacing={3} mb={10}>
          {benefits.map((b, index) => (
            <Grid size={{ xs: 12, lg: 3 }} key={index}>
              <Card
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                }}
              >
                <Box color="primary.main" mb={1}>
                  {b.icon}
                </Box>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  {b.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {b.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* ACTIVITIES SECTION */}
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={5}
          color="primary.main"
        >
          Our Functional Training Programs
        </Typography>

        <Grid container spacing={4}>
          <GalleryCard activities={activities}/>
        </Grid>
      </Container>
    </Box>
  );
};

export default FunctionalActivities;
