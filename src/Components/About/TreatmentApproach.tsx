import { Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const colors = {
  text: '#333',
};

const TreatmentApproach = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
        Our Treatment Philosophy
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, color: colors.text }}>
            Evidence-Based, Patient-Centered Care
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We combine the latest research with clinical expertise to develop personalized
            treatment plans that address your specific needs and goals.
          </Typography>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Comprehensive Assessment</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Detailed evaluation of your condition, medical history, and lifestyle to
                understand the root cause of your problem.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Personalized Treatment</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Customized therapy sessions combining manual therapy, therapeutic exercises,
                and advanced modalities tailored to your recovery goals.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Recovery & Prevention</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Focus on restoring function while equipping you with strategies and exercises
                to prevent future injuries and maintain optimal health.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              width: '100%',
              height: 400,
              backgroundColor: '#e0e0e0',
              backgroundImage: `url('https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TreatmentApproach;