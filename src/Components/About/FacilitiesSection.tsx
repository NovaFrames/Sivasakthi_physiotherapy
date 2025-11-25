import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GalleryCard from "../Card/GalleryCard";
import Header from "../Header/Header";

interface ActivityType {
  id: number;
  title: string;
  description: string;
  image: string;
}


const FacilitiesPage = () => {

  const activities: ActivityType[] = [
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
  ];

  return (
    <Box sx={{ py: 5, backgroundColor: "#F9FAFB" }}>
      <Container maxWidth="lg">
        {/* -------------------------------- */}
        {/* SECTION: Heading */}
        {/* -------------------------------- */}
        <Header
          title=" ★ Facilities & Infrastructure"
          subtitle="Excellence in Care Begins with Our Space"
          description="Our Hi-Tech Physiotherapy Hospital is designed to deliver world-class physiotherapy, rehabilitation, and long-term recovery care. With a fully equipped therapeutic gym, modern treatment technologies, and a peaceful natural environment, we ensure every patient receives the highest standard of care.
" />
        {/* -------------------------------- */}
        {/* SECTION: Feature Cards */}
        {/* -------------------------------- */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {[
            {
              title: "100-Bed Hi-Tech Physiotherapy Hospital",
              img: "https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg",
              desc: "Spacious, well-ventilated rooms designed for comfort and fast recovery.",
            },
            {
              title: "Advanced Physiotherapy Gym",
              img: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBoeXNpb3RoZXJhcHklMjBjbGluaWN8ZW58MHx8MHx8fDA%3D",
              desc: "Equipped with modern rehabilitation machines for strength and mobility training.",
            },
            {
              title: "24/7 Emergency Physiotherapy Care",
              img: "https://plus.unsplash.com/premium_photo-1661374820636-35f204935945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBoeXNpb3RoZXJhcHklMjBjbGluaWN8ZW58MHx8MHx8fDA%3D",
              desc: "Round-the-clock physiotherapy and nursing support for urgent conditions.",
            },
            {
              title: "Expert Medical Professionals",
              img: "https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBoeXNpb3RoZXJhcHklMjBjbGluaWN8ZW58MHx8MHx8fDA%3D",
              desc: "Highly trained physiotherapists, specialists, and rehabilitation doctors.",
            },
          ].map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: 170,
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ mb: 1, color: "#1F2937" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* -------------------------------- */}
        {/* SECTION: Facility Gallery */}
        {/* -------------------------------- */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" fontWeight={700}>
            Our Facility Gallery
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mt: 1, maxWidth: 700, mx: "auto" }}
          >
            Take a look at the modern therapeutic spaces and equipment available for
            patient care.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <GalleryCard activities={activities} />
        </Grid>

        {/* -------------------------------- */}
        {/* SECTION: Treatments & Services */}
        {/* -------------------------------- */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" fontWeight={800}>
            Treatments & Services
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 800, mx: "auto", mt: 1 }}
          >
            Comprehensive physiotherapy services designed to restore mobility,
            strength, confidence, and independence.
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 10 }}>
          {[
            "Walking Training",
            "Balance Training",
            "Fitness Counseling",
            "Diet Counseling",
            "Music Therapy",
            "Cryotherapy",
            "Psychological Counseling",
            "Recreational Therapy",
            "Speech Therapy",
            "Group Therapy",
            "Specialist Doctor Visits",
            "Modern Physiotherapy Equipment",
            "Nursing Care Services",
            "Pager Positioning Table Therapy",
          ].map((s, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#1a4d4d" }} />
                </ListItemIcon>
                <ListItemText primary={s} />
              </ListItem>
            </Grid>
          ))}
        </Grid>

        {/* -------------------------------- */}
        {/* SECTION: Footer Notes */}
        {/* -------------------------------- */}
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "text.secondary",
            maxWidth: 850,
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Our rehabilitation center delivers both inpatient and outpatient care with
          modern equipment, advanced physiotherapy technology, and a peaceful natural
          healing environment for patients to recover faster and live independently.
        </Typography>
      </Container>
    </Box>
  );
};

export default FacilitiesPage;
