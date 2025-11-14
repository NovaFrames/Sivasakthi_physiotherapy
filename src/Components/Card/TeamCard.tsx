import { Box, Card, CardContent, Grid, Typography } from "@mui/material"

interface Activity {
    name: string;
    role: string;
    image: string;
}

interface TeamCardProps {
    therapists: Activity[];
}

const TeamCard: React.FC<TeamCardProps> = ({ therapists }) => {
    return (
        <Grid container spacing={4}>
            {therapists.map((t, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <Card
                        sx={{
                            borderRadius: 4,
                            overflow: "hidden",
                        }}
                    >
                        {/* Image */}
                        <Box
                            component="img"
                            src={t.image}
                            alt={t.name}
                            sx={{
                                width: "100%",
                                height: 320,
                                objectFit: "cover",
                            }}
                        />

                        {/* Name Box */}
                        <CardContent
                            sx={{
                                textAlign: "center",
                                py: 3,
                                backgroundColor: "#fff",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, color: "#000", mb: 0.5 }}
                            >
                                {t.name}
                            </Typography>

                            <Typography variant="body2" sx={{ color: "gray" }}>
                                {t.role}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default TeamCard