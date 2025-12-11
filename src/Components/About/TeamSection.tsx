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
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww",
  },
  {
    name: "Darrell Steward",
    role: "Therapist C",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fHww",
  },
  {
    name: "Cameron Williamson",
    role: "Therapist C",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Jacob Jones",
    role: "Therapist B",
    image:
      "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Savannah Nguyen",
    role: "Therapist A",
    image:
      "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Robert Fox",
    role: "Therapist B",
    image:
      "https://plus.unsplash.com/premium_photo-1681966907271-1e350ec3bb95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Savannah Nguyen",
    role: "Therapist A",
    image:
      "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Robert Fox",
    role: "Therapist B",
    image:
      "https://plus.unsplash.com/premium_photo-1681966907271-1e350ec3bb95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
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
          description=" Our physiotherapy centre is dedicated to helping patients overcome pain and regain strength through expert care and personalized treatments" />


        {/* Therapist Cards */}
        <Grid container spacing={4}>
          <TeamCard therapists={therapists} />
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
