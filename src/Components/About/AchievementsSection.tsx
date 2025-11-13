import { Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { WorkspacePremium } from '@mui/icons-material';
const colors = {
  primary: '#D9663D',
  secondary: '#2E7D32',
};

const AchievementsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
          Our Credentials
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{xs:12,md:6}}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <WorkspacePremium sx={{ color: colors.primary, fontSize: 40 }} />
                </ListItemIcon>
                <ListItemText 
                  primary="Award for Excellence in Physiotherapy 2022"
                  secondary="Recognized for outstanding patient care and clinical outcomes"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WorkspacePremium sx={{ color: colors.primary, fontSize: 40 }} />
                </ListItemIcon>
                <ListItemText 
                  primary="ISO 9001:2015 Certified"
                  secondary="Quality management system certification"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WorkspacePremium sx={{ color: colors.primary, fontSize: 40 }} />
                </ListItemIcon>
                <ListItemText 
                  primary="Member: Indian Association of Physiotherapists"
                  secondary="Active participation in professional development"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid size={{xs:12,md:6}}>
              <Box
                sx={{
                  width: '100%',
                  height: 300,
                  backgroundColor: '#e0e0e0',
                  backgroundImage: `url('https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg')`,
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

export default AchievementsSection;