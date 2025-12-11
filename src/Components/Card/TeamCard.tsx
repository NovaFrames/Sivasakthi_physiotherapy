import { Box, Card, Grid, Typography, useTheme } from "@mui/material";

interface Activity {
    name: string;
    role: string;
    image: string;
    description?: string;
}

interface TeamCardProps {
    therapists: Activity[];
}

const TeamCard: React.FC<TeamCardProps> = ({ therapists }) => {
    const theme = useTheme();

    return (
        <Grid container spacing={3}>
            {therapists.map((t, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                    <Card
                        sx={{
                            borderRadius: "20px",
                            overflow: "visible",
                            boxShadow: "none",
                            backgroundColor: "transparent",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {/* Image with rounded background */}
                        <Box
                            sx={{
                                width: "100%",
                                backgroundColor: "#E8F0F2",
                                borderRadius: "20px",
                                mb: 2,
                                overflow: "hidden",
                                minHeight: 280,
                            }}
                        >
                            <Box
                                component="img"
                                src={t.image}
                                alt={t.name}
                                sx={{
                                    width: "100%",
                                    height: 280,
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    display: "block",
                                }}
                            />
                        </Box>

                        {/* Name */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 0.5,
                                fontSize: "18px",
                            }}
                        >
                            {t.name}
                        </Typography>

                        {/* Role */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: "14px",
                                fontWeight: 400,
                            }}
                        >
                            {t.role}
                        </Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default TeamCard;