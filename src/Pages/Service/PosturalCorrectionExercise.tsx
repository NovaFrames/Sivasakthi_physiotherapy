import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  useTheme,
  Paper,
  alpha,
} from "@mui/material";
import GalleryCard from "../../Components/Card/GalleryCard";

import {
  Chair,
  DirectionsRun,
  FitnessCenter,
  Accessibility,
  SelfImprovement,
  SportsGymnastics,
  Support,
  AccessibilityNew,
  MedicalServices,
  Person,
  Hotel,
  Nightlight,
  Spa,
} from "@mui/icons-material";

// Type definitions
interface CategoryItem {
  name: string;
  icon: React.ReactElement;
}

interface Category {
  title: string;
  items: CategoryItem[];
}

interface Section {
  sectionTitle: string;
  sectionDescription: string;
  categories: Category[];
}

// Reusable Category Section Component
interface CategorySectionProps {
  title: string;
  description: string;
  categories: Category[];
  index: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  categories,
}) => {
  const theme = useTheme();

  const sectionColors = [
    { primary: theme.palette.primary.main, secondary: alpha(theme.palette.primary.main, 0.1) },
  ];

  const currentColor = sectionColors[0];

  return (
    <Box
      sx={{
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative element */}
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box textAlign="center" mb={6} position="relative">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: currentColor.primary,
              textTransform: "uppercase",
              letterSpacing: 1,
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              fontSize: "1.2rem",
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Category Cards Grid */}
        <Grid container spacing={3}>
          {categories.map((category, catIndex) => (
            <Grid key={catIndex} size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={2}
                sx={{
                  borderRadius: 4,
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease-in-out",
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    textAlign: "center",
                    color: currentColor.primary,
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  {category.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {category.items.map((item, itemIndex) => (
                    <Box
                      key={itemIndex}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        borderRadius: 3,
                        transition: "all 0.3s ease",
                        border: `1px solid ${alpha(currentColor.primary, 0.1)}`,
                        background: alpha(currentColor.primary, 0.02),
                        '&:hover': {
                          backgroundColor: currentColor.primary,
                          color: 'white',
                          transform: "translateX(8px)",
                          boxShadow: `0 4px 12px ${alpha(currentColor.primary, 0.3)}`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mr: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: alpha(currentColor.primary, 0.1),
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          fontSize: '1rem',
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const PosturalCorrectionExercise: React.FC = () => {
  const theme = useTheme();
  const exerciseData: Section[] = [
    {
      sectionTitle: "Different Type of Sitting",
      sectionDescription:
        "Explore various sitting positions designed to improve posture, enhance comfort, and promote proper spinal alignment for better health outcomes.",
      categories: [
        {
          title: "SITTING POSITIONS",
          items: [
            { name: "Long Sitting", icon: <Chair /> },
            { name: "Crook Sitting", icon: <Accessibility /> },
            { name: "Side Sitting Both Sides", icon: <DirectionsRun /> },
            { name: "Small Stool Sitting", icon: <Chair /> },
          ],
        },
        {
          title: "ADVANCED SITTING",
          items: [
            { name: "Forward-Bending Sitting", icon: <SelfImprovement /> },
            { name: "Backward-Long Sitting", icon: <SportsGymnastics /> },
            { name: "High Stool Sitting", icon: <Chair /> },
            { name: "Sitting & Upper Limb Activity", icon: <FitnessCenter /> },
          ],
        },
        {
          title: "THERAPEUTIC SITTING",
          items: [
            { name: "Shoulder wheel", icon: <FitnessCenter /> },
            { name: "Erect Sitting", icon: <Accessibility /> },
            { name: "Peanut Ball Sitting", icon: <SportsGymnastics /> },
          ],
        },
      ],
    },
    {
      sectionTitle: "Different Type of Standing",
      sectionDescription:
        "Master various standing techniques and support methods to build strength, improve balance, and enhance overall mobility and independence.",
      categories: [
        {
          title: "SUPPORTED STANDING",
          items: [
            { name: "Titling Board", icon: <Support /> },
            { name: "Standing Frame", icon: <AccessibilityNew /> },
            { name: "Crutch Support Standing", icon: <MedicalServices /> },
            { name: "Manual Support Standing", icon: <Person /> },
          ],
        },
        {
          title: "ASSISTED STANDING",
          items: [
            { name: "Wall Support", icon: <Support /> },
            { name: "Use Lower Limb Splints", icon: <MedicalServices /> },
            { name: "Independent Standing", icon: <Person /> },
          ],
        },
        {
          title: "ADAPTIVE STANDING",
          items: [
            { name: "Use Upper Limb Splints", icon: <MedicalServices /> },
            { name: "Walker Support Standing", icon: <Support /> },
          ],
        },
      ],
    },
    {
      sectionTitle: "Different Type of Lying",
      sectionDescription:
        "Discover therapeutic lying positions that promote relaxation, reduce pressure points, and support proper body alignment during rest.",
      categories: [
        {
          title: "BASIC LYING",
          items: [
            { name: "Use Pillow", icon: <Hotel /> },
            { name: "Supine Lying", icon: <Nightlight /> },
            { name: "Side Lying", icon: <Spa /> },
            { name: "Prone Lying", icon: <SelfImprovement /> },
          ],
        },
        {
          title: "SPECIALIZED LYING",
          items: [
            { name: "Prone Lying Variations", icon: <SelfImprovement /> },
            { name: "Peanut Ball Lying", icon: <SportsGymnastics /> },
            { name: "Semi-prone Lying", icon: <Spa /> },
          ],
        },
        {
          title: "BALL THERAPY",
          items: [
            { name: "Pelvic Ball-Sitting / Lying", icon: <SportsGymnastics /> },
            { name: "Swiss Ball-Sitting / Lying", icon: <SportsGymnastics /> },
          ],
        },
      ],
    },
    {
      sectionTitle: "Postural Correction Exercise",
      sectionDescription: "Comprehensive exercise program targeting all major body areas to improve mobility, strength, and postural awareness.",
      categories: [
        {
          title: "UPPER BODY",
          items: [
            { name: "Neck Movement", icon: <FitnessCenter /> },
            { name: "Shoulder Movement", icon: <FitnessCenter /> },
            { name: "Elbow Movement", icon: <FitnessCenter /> },
            { name: "Wrist Movement", icon: <FitnessCenter /> },
          ],
        },
        {
          title: "CORE & TRUNK",
          items: [
            { name: "Spine Movement", icon: <FitnessCenter /> },
            { name: "Upper Limb Concentration", icon: <FitnessCenter /> },
            { name: "Hip Movement", icon: <FitnessCenter /> },
          ],
        },
        {
          title: "LOWER BODY",
          items: [
            { name: "Lower Limb Concentration", icon: <FitnessCenter /> },
            { name: "Knee Movement", icon: <FitnessCenter /> },
            { name: "Ankle Movement", icon: <FitnessCenter /> },
          ],
        },
      ],
    },
  ];

  const gallery = [
    {
      id: 1,
      title: "IFT – Interferential Therapy",
      description:
        "Used for deep pain relief and stimulation of soft tissues to promote healing and reduce inflammation.",
      image:
        "https://images.unsplash.com/photo-1669316714681-5fe047de58b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGh5c2lvdGhlcmFweSUyMGVxdWlwbWVudHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "Ultrasound Therapy",
      description:
        "Utilized to reduce muscle spasms, stiffness, and improve soft tissue healing with sound wave stimulation.",
      image:
        "https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGh5c2lvdGhlcmFweSUyMGVxdWlwbWVudHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "TENS – Transcutaneous Electrical Nerve Stimulation",
      description:
        "Effective for chronic and acute pain management using low-voltage electrical currents.",
      image:
        "https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBoeXNpb3RoZXJhcHklMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      title: "Laser Therapy",
      description:
        "Laser light used to accelerate tissue repair, reduce inflammation, and provide quick pain relief.",
      image:
        "https://images.unsplash.com/photo-1580420768674-7078c2bebec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBoeXNpb3RoZXJhcHklMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      title: "Traction Machine",
      description:
        "Mechanical traction used to gently stretch the spine to relieve pressure and reduce back pain.",
      image:
        "https://images.unsplash.com/photo-1529420681125-2878126af4a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBoeXNpb3RoZXJhcHklMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      title: "Hot and Cold Therapy",
      description:
        "Combines heating pads and cold compressors to treat muscle soreness, inflammation, and joint pain.",
      image:
        "https://images.unsplash.com/photo-1580281657702-257584239a55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBoeXNpb3RoZXJhcHklMjBlcXVpcG1lbnRzfGVufDB8fDB8fHww",
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white', // Make sure text is visible over the image
          py: 12,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Postural Correction Exercises
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto',
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Comprehensive guide to proper body alignment and therapeutic positions for enhanced mobility and well-being
          </Typography>
        </Container>
      </Box>

      {/* Exercise Sections */}
      {exerciseData.map((section, index) => (
        <CategorySection
          key={index}
          title={section.sectionTitle}
          description={section.sectionDescription}
          categories={section.categories}
          index={index}
        />
      ))}

      {/* Gallery Section */}
      <Box
        sx={{
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                color: theme.palette.primary.main,
                mb: 2,
              }}
            >
              Therapeutic Equipment & Modalities
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Explore the advanced equipment and techniques used in modern physical therapy and rehabilitation
            </Typography>
          </Box>
          <GalleryCard activities={gallery} />
        </Container>
      </Box>
    </Box>
  );
};

export default PosturalCorrectionExercise;