import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';

const colors = {
  textLight: '#666',
};

const FacilityImage = () => (
  <Box
    sx={{
      width: '100%',
      height: 200,
      backgroundColor: '#e0e0e0',
      backgroundImage: `url('https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 1,
    }}
  />
);

const FacilitiesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
          Our Modern Facilities
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid size={{xs:12,md:3,sm:6}} key={item}>
              <Card>
                <FacilityImage />
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Advanced Therapy Gym
                  </Typography>
                  <Typography variant="body2" color={colors.textLight}>
                    Fully equipped with the latest rehabilitation equipment for comprehensive treatment.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Container>
  );
};

export default FacilitiesSection;