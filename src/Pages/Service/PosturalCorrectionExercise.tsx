import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    Container,
    useTheme,
} from '@mui/material';
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
} from '@mui/icons-material';
import GalleryCard from '../../Components/Card/GalleryCard';

const PosturalCorrectionExercise = () => {
    const theme = useTheme();

    const sittingCategories = [
        {
            title: "SITTING",
            items: [
                { name: "Long Sitting", icon: <Chair /> },
                { name: "Crook Sitting", icon: <Accessibility /> },
                { name: "Side Sitting Both Sides", icon: <DirectionsRun /> },
                { name: "Small Stool Sitting", icon: <Chair /> },
            ]
        },
        {
            title: "SITTING",
            items: [
                { name: "Forward-Bending Sitting", icon: <SelfImprovement /> },
                { name: "Backward-Long Sitting", icon: <SportsGymnastics /> },
                { name: "High Stool Sitting", icon: <Chair /> },
                { name: "Sitting & Upper Limb Activity", icon: <FitnessCenter /> },
            ]
        },
        {
            title: "SITTING",
            items: [
                { name: "Shoulder wheel", icon: <FitnessCenter /> },
                { name: "Erect Sitting", icon: <Accessibility /> },
                { name: "Peanut Ball Sitting", icon: <SportsGymnastics /> },
            ]
        }
    ];

    const standingCategories = [
        {
            title: "STANDING",
            items: [
                { name: "Titling Board", icon: <Support /> },
                { name: "Standing Frame", icon: <AccessibilityNew /> },
                { name: "Crutch Support Standing", icon: <MedicalServices /> },
                { name: "Manual Support Standing", icon: <Person /> },
            ]
        },
        {
            title: "STANDING",
            items: [
                { name: "Wall Support", icon: <Support /> },
                { name: "Use Lower Limb Splints", icon: <MedicalServices /> },
                { name: "Independent Standing", icon: <Person /> },
            ]
        },
        {
            title: "STANDING",
            items: [
                { name: "Use Upper Limb Splints", icon: <MedicalServices /> },
                { name: "Walker Support Standing", icon: <Support /> },
            ]
        }
    ];

    const lyingCategories = [
        {
            title: "LYING",
            items: [
                { name: "Use Pillow", icon: <Hotel /> },
                { name: "Supine Lying", icon: <Nightlight /> },
                { name: "Side Lying", icon: <Spa /> },
                { name: "Prone Lying", icon: <SelfImprovement /> },
            ]
        },
        {
            title: "LYING",
            items: [
                { name: "Prone Lying", icon: <SelfImprovement /> },
                { name: "Peanut Ball Lying", icon: <SportsGymnastics /> },
                { name: "Semi-prone Lying", icon: <Spa /> },
            ]
        },
        {
            title: "LYING",
            items: [
                { name: "Pelvic Ball-Sitting / Lying", icon: <SportsGymnastics /> },
                { name: "Swiss Ball-Sitting / Lying", icon: <SportsGymnastics /> },
            ]
        }
    ];

    const exerciseCategories = [
        {
            title: "EXERCISE",
            items: [
                { name: "Neck Movement", icon: <FitnessCenter /> },
                { name: "Shoulder Movement", icon: <FitnessCenter /> },
                { name: "Elbow Movement", icon: <FitnessCenter /> },
                { name: "Wrist Movement", icon: <FitnessCenter /> },
            ]
        },
        {
            title: "EXERCISE",
            items: [
                { name: "Spine Movement", icon: <FitnessCenter /> },
                { name: "Upper Limb Concentration", icon: <FitnessCenter /> },
                { name: "Hip Movement", icon: <FitnessCenter /> },
            ]
        },
        {
            title: "EXERCISE",
            items: [
                { name: "Lower Limb Concentration", icon: <FitnessCenter /> },
                { name: "Knee Movement", icon: <FitnessCenter /> },
                { name: "Ankle Movement", icon: <FitnessCenter /> },
            ]
        }
    ];
    const gallery = [
    {
      id: 1,
      title: "IFT – Interferential Therapy",
      description:
        "Used for deep pain relief and stimulation of soft tissues to promote healing and reduce inflammation.",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    },
    {
      id: 2,
      title: "Ultrasound Therapy",
      description:
        "Promotes tissue healing, reduces swelling, and improves blood flow using high-frequency sound waves.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    },
    {
      id: 3,
      title: "TENS – Nerve Stimulation",
      description:
        "Used to relieve chronic and acute pain by sending gentle electrical impulses to nerves.",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
    },
    {
      id: 4,
      title: "Heat Therapy",
      description:
        "Effective for muscle relaxation, improving flexibility, and reducing stiffness in joints.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    },
    {
      id: 5,
      title: "Laser Therapy",
      description:
        "Accelerates healing, reduces inflammation, and promotes tissue regeneration using focused laser energy.",
      image:
        "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80",
    },
    {
      id: 6,
      title: "Traction Unit",
      description:
        "Used for spinal decompression therapy to relieve pressure from spinal discs.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
  ];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Header */}
            <Box textAlign="center" mb={6}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main,
                        textTransform: 'uppercase'
                    }}
                >
                    Different Type of Sitting
                </Typography>
                <Typography
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: 'auto' }}
                >
                    Postural Correction Exercises for Better Health and Alignment
                </Typography>
            </Box>

            {/* Sitting Categories */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
                {sittingCategories.map((category, categoryIndex) => (
                    <Grid size={{ xs: 12, lg: 4 }} key={categoryIndex}>
                        <Card
                            sx={{
                                height: '100%',
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                {/* Category Title */}
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.secondary.main,
                                        textAlign: 'center',
                                        mb: 3,
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {category.title}
                                </Typography>

                                {/* Exercise Items */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    {category.items.map((item, itemIndex) => (
                                        <Box
                                            key={itemIndex}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                p: 1,
                                                borderRadius: 2,
                                            }}
                                        >
                                            {/* Icon */}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.primary.light,
                                                    color: theme.palette.primary.contrastText,
                                                    mr: 2,
                                                    flexShrink: 0
                                                }}
                                            >
                                                {item.icon}
                                            </Box>

                                            {/* Exercise Name */}
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontWeight: 500,
                                                    flex: 1
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Standing Section Header */}
            <Box textAlign="center" mb={6}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main,
                        textTransform: 'uppercase'
                    }}
                >
                    Different Type of Standing
                </Typography>
                <Typography
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: 'auto' }}
                >
                    Various Standing Positions and Support Methods for Rehabilitation
                </Typography>
            </Box>

            {/* Standing Categories */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
                {standingCategories.map((category, categoryIndex) => (
                    <Grid size={{ xs: 12, lg: 4 }} key={categoryIndex}>
                        <Card
                            sx={{
                                height: '100%',
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                {/* Category Title */}
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.secondary.main,
                                        textAlign: 'center',
                                        mb: 3,
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {category.title}
                                </Typography>

                                {/* Exercise Items */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    {category.items.map((item, itemIndex) => (
                                        <Box
                                            key={itemIndex}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                p: 1,
                                                borderRadius: 2,
                                            }}
                                        >
                                            {/* Icon */}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.primary.light,
                                                    color: theme.palette.primary.contrastText,
                                                    mr: 2,
                                                    flexShrink: 0
                                                }}
                                            >
                                                {item.icon}
                                            </Box>

                                            {/* Exercise Name */}
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontWeight: 500,
                                                    flex: 1
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Lying Section Header */}
            <Box textAlign="center" mb={6}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main,
                        textTransform: 'uppercase'
                    }}
                >
                    Different Type of Lying
                </Typography>
                <Typography
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: 'auto' }}
                >
                    Various Lying Positions for Comfort and Therapeutic Benefits
                </Typography>
            </Box>

            {/* Lying Categories */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
                {lyingCategories.map((category, categoryIndex) => (
                    <Grid size={{ xs: 12, lg: 4 }} key={categoryIndex}>
                        <Card
                            sx={{
                                height: '100%',
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                {/* Category Title */}
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.secondary.main,
                                        textAlign: 'center',
                                        mb: 3,
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {category.title}
                                </Typography>

                                {/* Exercise Items */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    {category.items.map((item, itemIndex) => (
                                        <Box
                                            key={itemIndex}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                p: 1,
                                                borderRadius: 2,
                                            }}
                                        >
                                            {/* Icon */}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.primary.light,
                                                    color: theme.palette.primary.contrastText,
                                                    mr: 2,
                                                    flexShrink: 0
                                                }}
                                            >
                                                {item.icon}
                                            </Box>

                                            {/* Exercise Name */}
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontWeight: 500,
                                                    flex: 1
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Exercise Section Header */}
            <Box textAlign="center" mb={6}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main,
                        textTransform: 'uppercase'
                    }}
                >
                    Postural Correction Exercise
                </Typography>
                <Typography
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: 'auto' }}
                >
                    Track Your Exercise Progress and Completion
                </Typography>
            </Box>

            {/* Exercise Categories */}
            <Grid container spacing={4}>
                {exerciseCategories.map((category, categoryIndex) => (
                    <Grid size={{xs:12, lg:4}} key={categoryIndex}>
                        <Card
                            sx={{
                                height: '100%',
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                {/* Category Title */}
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.secondary.main,
                                        textAlign: 'center',
                                        mb: 3,
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {category.title}
                                </Typography>

                                {/* Exercise Items */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    {category.items.map((item, itemIndex) => (
                                        <Box
                                            key={itemIndex}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                p: 1,
                                                borderRadius: 2,
                                            }}
                                        >
                                            {/* Icon */}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.primary.light,
                                                    color: theme.palette.primary.contrastText,
                                                    mr: 2,
                                                    flexShrink: 0
                                                }}
                                            >
                                                {item.icon}
                                            </Box>

                                            {/* Exercise Name */}
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontWeight: 500,
                                                    flex: 1
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
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
                <GalleryCard activities={gallery} />
            </Box>
        </Container>
    );
};

export default PosturalCorrectionExercise;