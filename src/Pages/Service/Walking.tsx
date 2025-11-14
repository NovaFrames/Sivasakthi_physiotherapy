import {
  DirectionsWalk,
  Groups,
  MedicalServices,
  Shield,
  CheckCircle,
  AccessTime,
  TrendingUp,
  FlashOn,
  Star,
  SportsHandball,
  SportsSoccer,
} from "@mui/icons-material";

import { Box, Grid, Typography, Paper, Stack, useTheme } from "@mui/material";

const Walking = () => {
  const theme = useTheme();

  const walkingActivities = [
    {
      title: "PARALLEL BAR WALKING",
      icon: <MedicalServices sx={{ fontSize: 32 }} />,
      items: [
        "Side Walking",
        "Backward Walking",
        "Double Support Walking",
        "Tandem Walking",
      ],
      gradient: `linear-gradient(135deg, ${theme.palette.primary.light}20, ${theme.palette.primary.main}20)`,
      iconBg: theme.palette.primary.light,
      iconColor: theme.palette.primary.main,
    },
    {
      title: "WALKER SUPPORT WALKING",
      icon: <Groups sx={{ fontSize: 32 }} />,
      items: [
        "Long Step Walking",
        "High Step Walking",
        "Arm Swing Walking Spinal Ext",
        "Head Tilt Walking",
      ],
      gradient: `linear-gradient(135deg, ${theme.palette.success.light}20, ${theme.palette.success.main}20)`,
      iconBg: theme.palette.success.light,
      iconColor: theme.palette.success.main,
    },
    {
      title: "CRUTCH SUPPORT WALKING",
      icon: <DirectionsWalk sx={{ fontSize: 32 }} />,
      items: ["Distinct Walking", "Sensory Ball Walking", "Swalling"],
      gradient: `linear-gradient(135deg, ${theme.palette.secondary.light}20, ${theme.palette.secondary.main}20)`,
      iconBg: theme.palette.secondary.light,
      iconColor: theme.palette.secondary.main,
    },
    {
      title: "MANUAL SUPPORT WALKING",
      icon: <Shield sx={{ fontSize: 32 }} />,
      items: ["Gig & Jag Walking", "Static Running", "Static Jagling"],
      gradient: `linear-gradient(135deg, ${theme.palette.warning.light}20, ${theme.palette.warning.main}20)`,
      iconBg: theme.palette.warning.light,
      iconColor: theme.palette.warning.main,
    },
  ];

  const playingActivities = [
    {
      category: "UPPER LIMB",
      items: ["Ball Throwing", "Catching", "Rolling"],
      icon: <SportsHandball sx={{ fontSize: 28 }} />,
      gradient: `linear-gradient(135deg, ${theme.palette.error.main}, ${theme.palette.error.dark})`,
    },
    {
      category: "LOWER LIMB",
      items: ["Kicking", "Side Kicking"],
      icon: <SportsSoccer sx={{ fontSize: 28 }} />,
      gradient: `linear-gradient(135deg, ${theme.palette.info.main}, ${theme.palette.info.dark})`,
    },
    {
      category: "SWISS BALL ROLLING",
      items: ["Roller", "Twister", "Ring Ball", "Sensor Ball Cat"],
      icon: <MedicalServices sx={{ fontSize: 28 }} />,
      gradient: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
    },
    {
      category: "COORDINATION",
      items: ["Gig & Jag Walking", "Static Running", "Static Jagling"],
      icon: <FlashOn sx={{ fontSize: 28 }} />,
      gradient: `linear-gradient(135deg, ${theme.palette.warning.main}, ${theme.palette.warning.dark})`,
    },
  ];

  const stats = [
    {
      label: "Active Sessions",
      value: "156",
      icon: <MedicalServices sx={{ fontSize: 28 }} />,
      color: theme.palette.primary.main,
    },
    {
      label: "Success Rate",
      value: "94%",
      icon: <TrendingUp sx={{ fontSize: 28 }} />,
      color: theme.palette.primary.main,
    },
    {
      label: "Avg. Duration",
      value: "45min",
      icon: <AccessTime sx={{ fontSize: 28 }} />,
      color: theme.palette.primary.main,
    },
    {
      label: "Patient Rating",
      value: "4.8",
      icon: <Star sx={{ fontSize: 28 }} />,
      color: theme.palette.primary.main,
    },
  ];

  const benefits = [
    {
      title: "Improved Balance",
      description:
        "Enhanced stability and coordination through progressive exercises that build confidence and reduce fall risk.",
      icon: <TrendingUp sx={{ fontSize: 40, color: "white" }} />,
      gradient: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
      borderColor: theme.palette.primary.light,
    },
    {
      title: "Strength Building",
      description:
        "Develop muscle strength and endurance safely with targeted exercises for functional independence.",
      icon: <MedicalServices sx={{ fontSize: 40, color: "white" }} />,
      gradient: `linear-gradient(135deg, ${theme.palette.success.light}, ${theme.palette.success.main})`,
      borderColor: theme.palette.success.light,
    },
    {
      title: "Mobility Enhancement",
      description:
        "Restore functional movement patterns and improve gait quality for daily activities.",
      icon: <DirectionsWalk sx={{ fontSize: 40, color: "white" }} />,
      gradient: `linear-gradient(135deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
      borderColor: theme.palette.secondary.light,
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* HERO SECTION */}
      <Box sx={{ bgcolor: "background.paper", py: 10, px: 20
       }}>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {/* LEFT */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Typography variant="h3" fontWeight="bold" color="primary.main" mb={3}>
              Therapeutic Walking <br /> Activities Program
            </Typography>

            <Typography variant="h6" color="text.primary" mb={4}>
              Evidence-based rehabilitation programs designed to improve
              mobility, strength, and coordination.
            </Typography>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 4,
                backdropFilter: "blur(8px)",
                bgcolor: "background.paper",
              }}
            >
              <Grid container spacing={3}>
                {stats.map((stat, i) => (
                  <Grid size={{ xs: 12, lg: 6 }} key={i}>
                    <Paper
                      sx={{
                        p: 3,
                        textAlign: "center",
                        borderRadius: 3,
                        bgcolor: "primary.50",
                        transition: "0.3s",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    >
                      <Box sx={{ color: stat.color, mb: 1 }}>{stat.icon}</Box>
                      <Typography variant="h4" fontWeight="bold" color="text.primary">
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* WALKING ACTIVITIES */}
      <Box sx={{ maxWidth: 1200, mx: "auto", py: 10 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="primary.main"
          mb={6}
        >
          Supported Walking Activities
        </Typography>

        <Grid container spacing={4}>
          {walkingActivities.map((activity, i) => (
            <Grid size={{ xs: 12, lg: 6 }} key={i}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: activity.gradient,
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                  <Box
                    sx={{
                      bgcolor: activity.iconBg,
                      color: activity.iconColor,
                      p: 2,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {activity.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" color="text.primary">
                    {activity.title}
                  </Typography>
                </Stack>

                <Stack spacing={1.5}>
                  {activity.items.map((item, idx) => (
                    <Stack
                      key={idx}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <CheckCircle sx={{ color: "success.main", fontSize: 22 }} />
                      <Typography color="text.primary">{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* PLAYING ACTIVITIES */}
      <Box sx={{ maxWidth: 1200, mx: "auto", py: 10 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="primary.main"
          mb={6}
        >
          Playing Activities
        </Typography>

        <Grid container spacing={4}>
          {playingActivities.map((activity, i) => (
            <Grid size={{ xs: 12, lg: 6 }} key={i}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  transition: "0.3s",
                  bgcolor: "background.paper",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 3,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: activity.gradient,
                    color: "white",
                  }}
                >
                  {activity.icon}
                </Box>

                <Typography variant="h6" fontWeight="bold" mb={2} color="text.primary">
                  {activity.category}
                </Typography>

                <Stack spacing={1.5}>
                  {activity.items.map((item, idx) => (
                    <Paper
                      key={idx}
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: "grey.50",
                      }}
                    >
                      <Typography fontSize={14} color="text.primary">
                        {item}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* BENEFITS */}
      <Box sx={{ maxWidth: 1200, mx: "auto", py: 10 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="primary.main"
          mb={6}
        >
          Therapeutic Benefits
        </Typography>

        <Grid container spacing={4}>
          {benefits.map((benefit, i) => (
            <Grid size={{ xs: 12, lg: 6 }} key={i}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  border: `2px solid ${benefit.borderColor}`,
                  transition: "0.3s",
                  bgcolor: "background.paper",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 3,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: benefit.gradient,
                  }}
                >
                  {benefit.icon}
                </Box>

                <Typography variant="h6" fontWeight="bold" mb={2} color="text.primary">
                  {benefit.title}
                </Typography>

                <Typography color="text.secondary">
                  {benefit.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Walking;