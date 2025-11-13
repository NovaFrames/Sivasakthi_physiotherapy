import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import Chip from '../Chip/Chip';

const colors = {
  secondaryLight: '#E8F5E8',
  primary: '#D9663D',
  text: '#333',
};

const FounderSection = () => {
  return (
    <Box sx={{ backgroundColor: colors.secondaryLight, py: 8 }}>
      <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
            Meet Our Founder
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{xs:12,md:4}}>
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  backgroundColor: '#e0e0e0',
                  backgroundImage: `url('https://images.pexels.com/photos/7578804/pexels-photo-7578804.jpeg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2
                }}
              />
            </Grid>
            <Grid size={{xs:12,md:8}}>
              <Card sx={{ p: 4 }}>
                <CardContent>
                  <Typography variant="h4" sx={{ mb: 2, color: colors.text }}>
                    Dr. Arjun Kumar, BPT, MPT, PhD
                  </Typography>
                  <Typography variant="h6" color={colors.primary} sx={{ mb: 3 }}>
                    Founder & Chief Physiotherapist
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    With over 15 years of clinical experience and numerous publications in 
                    rehabilitation science, Dr. Kumar founded this clinic with a simple vision: 
                    to provide accessible, high-quality physiotherapy that transforms lives.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                    "I started this clinic because I believe everyone deserves the chance to 
                    live without pain and move without limitations. Our team is committed to 
                    making that belief a reality for every patient who walks through our doors."
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Chip label="Sports Rehabilitation Specialist" />
                    <Chip label="Published Researcher" />
                    <Chip label="15+ Years Experience" />
                    <Chip label="Mentor & Educator" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
      </Container>
    </Box>
  );
};

export default FounderSection;