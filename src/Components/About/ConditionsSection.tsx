import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';

const colors = {
  secondaryLight: '#E8F5E8',
  text: '#333',
  textLight: '#666',
};

const ConditionsSection = () => {
  const conditions = [
    { name: 'Sports Injuries', icon: '🏃', description: 'Sprains, strains, fractures, and overuse injuries' },
    { name: 'Back & Neck Pain', icon: '👤', description: 'Disc problems, sciatica, whiplash, and posture issues' },
    { name: 'Joint Problems', icon: '🦵', description: 'Arthritis, tendonitis, bursitis, and joint replacements' },
    { name: 'Neurological Conditions', icon: '🧠', description: 'Stroke, Parkinson\'s, multiple sclerosis, neuropathy' },
    { name: 'Post-Surgery Rehabilitation', icon: '🏥', description: 'Recovery after orthopedic and other surgeries' },
    { name: 'Pediatric Conditions', icon: '👶', description: 'Developmental delays, cerebral palsy, injuries' }
  ];

  return (
    <Box sx={{ backgroundColor: colors.secondaryLight, py: 8 }}>
      <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
            Conditions We Specialize In
          </Typography>
          <Grid container spacing={3}>
            {conditions.map((condition, index) => (
              <Grid size={{xs:12,md:3,sm:6}} key={index}>
                <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                  <CardContent>
                    <Typography variant="h3" sx={{ mb: 2 }}>{condition.icon}</Typography>
                    <Typography variant="h6" sx={{ mb: 2, color: colors.text }}>
                      {condition.name}
                    </Typography>
                    <Typography variant="body2" color={colors.textLight}>
                      {condition.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
      </Container>
    </Box>
  );
};

export default ConditionsSection;