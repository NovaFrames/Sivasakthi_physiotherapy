import { Box, Container, Typography, Card, CardContent } from '@mui/material';

const colors = {
  secondaryLight: '#E8F5E8',
  primary: '#D9663D',
  text: '#333',
  textLight: '#666',
};

const JourneySection = () => {
  const milestones = [
    { year: '2010', event: 'Clinic Foundation', details: 'Started with a single treatment room' },
    { year: '2014', event: 'First Expansion', details: 'Moved to larger facility with 3 treatment rooms' },
    { year: '2018', event: 'Team Growth', details: 'Expanded to 5 physiotherapists and support staff' },
    { year: '2022', event: 'Modernization', details: 'Complete upgrade with advanced equipment' },
    { year: '2024', event: 'Milestone', details: '10,000+ patients treated successfully' }
  ];

  return (
    <Box sx={{ backgroundColor: colors.secondaryLight, py: 8 }}>
      <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
            Our Journey
          </Typography>
          <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
            {milestones.map((milestone, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: colors.primary,
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    mr: 3,
                    zIndex: 2
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{milestone.year}</Typography>
                </Box>
                <Card sx={{ flexGrow: 1, p: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: colors.text }}>
                      {milestone.event}
                    </Typography>
                    <Typography variant="body2" color={colors.textLight}>
                      {milestone.details}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
      </Container>
    </Box>
  );
};

export default JourneySection;