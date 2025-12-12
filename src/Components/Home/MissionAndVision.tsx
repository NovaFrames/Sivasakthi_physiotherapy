import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    useTheme,
} from "@mui/material";

const MissionVisionSection = () => {
    const theme = useTheme();

    const cardData = [
        {
            title: "Our Mission",
            text: `To prepare competent professionals with sound knowledge, moral values,
            and excellent skills through quality education while providing global 
            health services for rural communities.`,
        },
        {
            title: "Our Vision",
            text: `To promote globally competitive training in medicine and physiotherapy,
            enhancing scientific temper and excellence across all medical disciplines.`,
        },
        {
            title: "Our Motto",
            text: `"We can see God through the smile of disabled people."`,
        },
    ];

    return (
        <Box sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
            <Container maxWidth="lg">

                {/* Section Header */}
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: theme.palette.text.primary }}>
                        Our Guiding Principles
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ mt: 2, color: theme.palette.text.secondary, maxWidth: 600, mx: "auto" }}
                    >
                        Driven by compassion and excellence, we strive to make a meaningful difference
                        in every life we touch.
                    </Typography>
                </Box>

                {/* Dynamic Cards */}
                <Grid container spacing={4}>
                    {cardData.map((item, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    backgroundColor: theme.palette.background.paper,
                                    color: theme.palette.text.primary,
                                    borderRadius: 4,
                                }}
                            >
                                <CardContent sx={{ p: 4, textAlign: "center" }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                        {item.title}
                                    </Typography>

                                    <Typography sx={{ mt: 2, lineHeight: 1.7 }}>
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
};

export default MissionVisionSection;
