import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

interface Activity {
    id: number | string;
    image: string;
    title: string;
    description: string;
}

interface GalleryCardProps {
    activities: Activity[];
}

const GalleryCard: React.FC<GalleryCardProps> = ({ activities }) => {
    return (
        <Grid container spacing={4}>
            {activities.map((act) => (
                <Grid key={act.id} size={{ xs: 12, lg: 4 }}>
                    <Card
                        sx={{
                            cursor: "pointer",
                            borderRadius: 3,
                            transition: "0.3s",
                        }}
                        elevation={3}
                    >
                        <CardMedia
                            component="img"
                            height="220"
                            image={act.image}
                            alt={act.title}
                            sx={{
                                transition: "0.3s",
                                "&:hover": { transform: "scale(1.04)" },
                            }}
                        />

                        <CardContent>
                            <Typography variant="h6" fontWeight={600}>
                                {act.title}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {act.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default GalleryCard;
