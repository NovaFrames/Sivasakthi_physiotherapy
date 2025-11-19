import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import TeamCard from "../Card/TeamCard";
import Header from "../Header/Header";

const therapists = [
  {
    name: "Jenny Wilson",
    role: "Therapist A",
    image:
      "https://images.pexels.com/photos/8460046/pexels-photo-8460046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Darrell Steward",
    role: "Therapist C",
    image:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Cameron Williamson",
    role: "Therapist C",
    image:
      "https://images.pexels.com/photos/5452203/pexels-photo-5452203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jacob Jones",
    role: "Therapist B",
    image:
      "https://images.pexels.com/photos/8460040/pexels-photo-8460040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Savannah Nguyen",
    role: "Therapist A",
    image:
      "https://images.pexels.com/photos/8460045/pexels-photo-8460045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Robert Fox",
    role: "Therapist B",
    image:
      "https://images.pexels.com/photos/6951672/pexels-photo-6951672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TeamSection = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        {/* Header */}

        <Header
          title="✤ Our Professional Therapist"
          subtitle="Meet Our Caring Therapists"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna." />


        {/* Therapist Cards */}
        <Grid container spacing={4}>
          <TeamCard therapists={therapists} />
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
