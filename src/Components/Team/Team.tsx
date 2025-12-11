import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import TeamCard from '../Card/TeamCard';
import doctorFemale1 from '../../assets/teams/doctor_female_1.png';
import doctorMale1 from '../../assets/teams/doctor_male_1.png';
import doctorFemale2 from '../../assets/teams/doctor_female_2.png';
import doctorMale2 from '../../assets/teams/doctor_male_2.png';

const Team = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'Dr. Emily Brown',
      role: 'Senior Physiotherapist',
      image: doctorFemale1,
    },
    {
      name: 'Dr. Lisa Johnson',
      role: 'Pediatric Therapist',
      image: doctorMale1,
    },
    {
      name: 'Dr. Jessica Wilson',
      role: 'Neurological Therapist',
      image: doctorFemale2,
    },
    {
      name: 'Dr. Linda Thomas',
      role: 'Orthopedic Therapist',
      image: doctorMale2,
    }
  ];

  return (
    <Box sx={{ bgcolor: theme.palette.background.paper, py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box>
            {/* Badge */}
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: theme.palette.primary.main,
                color: "white",
                px: 2.5,
                py: 0.75,
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 300,
                mb: 2,
              }}
            >
              Our Team
            </Box>

            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "2rem", md: "2.8rem" },
                lineHeight: 1.3,
                color: theme.palette.text.primary,
              }}
            >
              <Box
                component="span"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                }}
              >
                Our Dedicated
              </Box>{" "}
              & Experienced
              <br />
              Therapist Team
            </Typography>
          </Box>

          {/* View All Team Button */}
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/team")}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: "white",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "15px",
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: theme.palette.primary.dark,
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            View All Team
          </Button>
        </Box>

        {/* Team Grid */}
        <TeamCard therapists={teamMembers} />

      </Container>
    </Box>
  );
};

export default Team;