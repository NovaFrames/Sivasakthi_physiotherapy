import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const colors = {
  secondaryLight: '#E8F5E8',
  primary: '#D9663D',
  textLight: '#666',
};

const TeamMemberPhoto = () => (
  <Box
    sx={{
      width: 120,
      height: 120,
      backgroundColor: '#ddd',
      borderRadius: '50%',
      backgroundImage: `url('https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
);

const TeamSection = () => {
  return (
    <Box sx={{ backgroundColor: colors.secondaryLight, py: 8 }}>
      <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
            Meet Our Expert Team
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3, 4].map((item) => (
              <Grid size={{xs:12,md:3,sm:6}} key={item}>
                <Card sx={{ textAlign: 'center', p: 3 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      <TeamMemberPhoto />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Dr. Priya Sharma
                    </Typography>
                    <Typography variant="body2" color={colors.primary} sx={{ mb: 1 }}>
                      BPT, MPT (Sports Medicine)
                    </Typography>
                    <Typography variant="body2" color={colors.textLight} sx={{ mb: 2 }}>
                      8+ Years Experience
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
                      "My passion is helping athletes return to their peak performance."
                    </Typography>
                    <Button variant="text" endIcon={<ArrowForward />}>
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;