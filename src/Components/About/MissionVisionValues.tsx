import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { EmojiPeople, Favorite, School } from '@mui/icons-material';


const colors = {
  primary: '#D9663D',
  text: '#333',
  textLight: '#666',
};

const MissionVisionValues = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
          Our Guiding Principles
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{xs:12,md:4}}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <CardContent>
                <EmojiPeople sx={{ fontSize: 60, color: colors.primary, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, color: colors.text }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" color={colors.textLight}>
                  To restore and enhance physical function, reduce pain, and improve quality of life 
                  through evidence-based physiotherapy interventions delivered with compassion and expertise.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{xs:12,md:4}}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <CardContent>
                <Favorite sx={{ fontSize: 60, color: colors.primary, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, color: colors.text }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" color={colors.textLight}>
                  To be the most trusted and innovative physiotherapy center in Tamil Nadu, 
                  setting new standards in patient care and rehabilitation outcomes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{xs:12,md:4}}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <CardContent>
                <School sx={{ fontSize: 60, color: colors.primary, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, color: colors.text }}>
                  Our Values
                </Typography>
                <Typography variant="body1" color={colors.textLight}>
                  Compassion, Professionalism, Integrity, Innovation, and Excellence in every 
                  aspect of patient care and clinical practice.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </Container>
  );
};

export default MissionVisionValues;