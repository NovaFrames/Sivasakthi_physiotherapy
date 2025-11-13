import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';

const colors = {
  secondaryLight: '#E8F5E8',
  textLight: '#666',
};

const GallerySection = () => {
  return (
    <Box sx={{ backgroundColor: colors.secondaryLight, py: 8 }}>
      <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
            In The Media
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid size={{xs:12,md:3,sm:6}} key={item}>
                <Card>
                  <Box
                    sx={{
                      width: '100%',
                      height: 200,
                      backgroundColor: '#e0e0e0',
                      backgroundImage: `url('https://images.pexels.com/photos/7731098/pexels-photo-7731098.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Health Awareness Workshop
                    </Typography>
                    <Typography variant="body2" color={colors.textLight}>
                      Featured in The Hindu - September 2023
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

export default GallerySection;