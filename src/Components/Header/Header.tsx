import { Grid, Typography } from "@mui/material"

interface HeaderProps {
    title:string,
    subtitle:string,
    description:string,
}

const Header:React.FC<HeaderProps>=({title, subtitle, description}) => {
    return (
        <Grid container spacing={4} alignItems="flex-start" mb={5}>
            <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                    variant="subtitle1"
                    sx={{ color: "#1a4d4d", fontWeight: 600, mb: 1 }}
                >
                    {title}
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        color: "#111",
                        lineHeight: 1.3,
                        mb: 2,
                    }}
                >
                    {subtitle}
                </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.8, mt: 2 }}
                >
                    {description}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Header