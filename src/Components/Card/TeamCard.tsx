import { Box, Card, CardContent, Grid, Typography, IconButton, useTheme } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

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
        <Grid container spacing={4}>
            {therapists.map((t, index) => {
                // Odd indices (0, 2, 4...) = Image on top
                // Even indices (1, 3, 5...) = Content on top
                const isImageFirst = index % 2 === 0;

                return (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Card
                            sx={{
                                borderRadius: 0,
                                overflow: "hidden",
                                boxShadow: "none",
                                backgroundColor: "transparent",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {isImageFirst ? (
                                <>
                                    {/* Image First */}
                                    <Box
                                        component="img"
                                        src={t.image}
                                        alt={t.name}
                                        sx={{
                                            width: "100%",
                                            height: 320,
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />

                                    {/* Content Below */}
                                    <CardContent
                                        sx={{
                                            pt: 4,
                                            pb: 3,
                                            px: 3,
                                            backgroundColor: theme.palette.background.paper,
                                        }}
                                    >
                                        {/* Name */}
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                                mb: 1,
                                                fontSize: "18px",
                                            }}
                                        >
                                            {t.name}
                                        </Typography>

                                        {/* Role */}
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: theme.palette.primary.main,
                                                textTransform: "uppercase",
                                                letterSpacing: "2px",
                                                fontSize: "11px",
                                                fontWeight: 500,
                                                display: "block",
                                                mb: 2,
                                            }}
                                        >
                                            {t.role}
                                        </Typography>

                                        {/* Description */}
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.6,
                                                fontSize: "13px",
                                                mb: 2,
                                                minHeight: "40px",
                                            }}
                                        >
                                            {t.description || "Consectetur adipiscing elit, sed diam nonumy."}
                                        </Typography>

                                        {/* Social Icons */}
                                        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    "&:hover": {
                                                        color: theme.palette.primary.main,
                                                    },
                                                }}
                                            >
                                                <FacebookIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    "&:hover": {
                                                        color: theme.palette.primary.main,
                                                    },
                                                }}
                                            >
                                                <TwitterIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    "&:hover": {
                                                        color: theme.palette.primary.main,
                                                    },
                                                }}
                                            >
                                                <InstagramIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </>
                            ) : (
                                <>
                                    {/* Content First */}
                                    <CardContent
                                        sx={{
                                            pt: 4,
                                            pb: 3,
                                            px: 3,
                                            backgroundColor: theme.palette.background.paper,
                                        }}
                                    >
                                        {/* Name */}
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                                mb: 1,
                                                fontSize: "18px",
                                            }}
                                        >
                                            {t.name}
                                        </Typography>

                                        {/* Role */}
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: theme.palette.primary.main,
                                                textTransform: "uppercase",
                                                letterSpacing: "2px",
                                                fontSize: "11px",
                                                fontWeight: 500,
                                                display: "block",
                                                mb: 2,
                                            }}
                                        >
                                            {t.role}
                                        </Typography>

                                        {/* Description */}
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.6,
                                                fontSize: "13px",
                                                mb: 2,
                                                minHeight: "40px",
                                            }}
                                        >
                                            {t.description || "Consectetur adipiscing elit, sed diam nonumy."}
                                        </Typography>

                                        {/* Social Icons */}
                                        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    "&:hover": {
                                                        color: theme.palette.primary.main,
                                                    },
                                                }}
                                            >
                                                <FacebookIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    "&:hover": {
                                                        color: theme.palette.primary.main,
                                                    },
                                                }}
                                            >
                                                <TwitterIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    "&:hover": {
                                                        color: theme.palette.primary.main,
                                                    },
                                                }}
                                            >
                                                <InstagramIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </CardContent>

                                    {/* Image Below */}
                                    <Box
                                        component="img"
                                        src={t.image}
                                        alt={t.name}
                                        sx={{
                                            width: "100%",
                                            height: 320,
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />
                                </>
                            )}
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default TeamCard;