import { Box, Typography, Grid, Stack } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import SpaIcon from '@mui/icons-material/Spa';
import PhoneIcon from '@mui/icons-material/Phone';

// Placeholder for the images/icons. In a real app, you'd use <img /> or a background image.
const PatientImage = () => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      minHeight: { xs: '300px', md: '550px' }, // Ensure height on smaller screens
      backgroundColor: '#ddd', // Placeholder color
      backgroundImage: `url('https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg')`, // Example source for the image shown
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // The actual image in the source is complex, using a simple Box to hold the space.
    }}
  />
);


const About = () => {
  // Define the colors based on the image's palette
  const accentColor = '#D9663D'; // The orange/brown color
  const accentlightColor = '#F0C4B4'; // The orange/brown color
  const primaryTextColor = '#333';

  return (
    <Box sx={{ p: { xs: 2, md: 5 }, backgroundColor: 'white', maxWidth: '1200px', mx: 'auto' }}>
      <Grid container spacing={{ xs: 3, md: 5 }}>
        {/* === Left Column (Image and Experience Box) === */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative' }}>
          <PatientImage />

          {/* 25 Years Experience Box */}
          <Box
            sx={{
              position: { xs: 'static', md: 'absolute' },
              top: 0,
              right: 0,
              mt: { xs: 2, md: -2 },
              width: 170,
              height: 170,
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 2,
              p: 2, // padding for outer box
            }}
          >
            <Box
              sx={{
                width: 150,
                height: 150,
                backgroundColor: accentColor,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: 2,
                p: 2, // padding inside the second box
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700, lineHeight: 1 }}>
                25
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 0.5, lineHeight: 1 }}>
                Years
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                Experience
              </Typography>
            </Box>
          </Box>

        </Grid>

        {/* === Right Column (Text and Features) === */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: primaryTextColor,
              mb: 3
            }}
          >
            The Leading Physiotherapy Center

          </Typography>

          {/* Highlighted Text Block */}
          <Box
            sx={{
              backgroundColor: '#E0F8E0', // Light green to symbolize healing and wellness
              border: '1px solid #b2e0b2',
              p: 2,
              mb: 3,
              borderRadius: 1
            }}
          >
            <Typography variant="body1" sx={{ color: primaryTextColor, fontWeight: 500 }}>
              **We believe in restoring mobility, strength, and confidence through personalized physiotherapy care.**
            </Typography>
          </Box>

          {/* Feature Icons and Text */}
          <Grid container spacing={4} mb={3}>
            {/* Expert Physiotherapists */}
            <Grid size={{xs:12, md:6}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <GroupIcon
                  sx={{
                    color: accentColor,
                    fontSize: 40,
                    backgroundColor: accentlightColor,
                    borderRadius: '8px',
                    p: 0.5,
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: primaryTextColor }}
                >
                  Experienced Physiotherapists
                </Typography>
              </Box>
            </Grid>

            {/* Advanced Rehabilitation Care */}
            <Grid size={{xs:12, md:6}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <SpaIcon
                  sx={{
                    color: accentColor,
                    fontSize: 40,
                    backgroundColor: accentlightColor,
                    borderRadius: '8px',
                    p: 0.5,
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: primaryTextColor }}
                >
                  Advanced Rehabilitation Care
                </Typography>
              </Box>
            </Grid>
          </Grid>


          {/* Main Body Text */}
          <Typography variant="body2" sx={{ color: '#666', mb: 3, textAlign: "justify" }}>
            Our physiotherapy team is dedicated to improving your quality of life through evidence-based treatments
            and personalized exercise programs. Whether you’re recovering from surgery, injury, or chronic pain,
            we focus on restoring your body’s natural movement and strength. Each session is carefully designed
            to support faster recovery and long-term wellness.
          </Typography>

          {/* Call Us Section */}
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 3 }}>
            <PhoneIcon sx={{ color: accentColor, fontSize: 20 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: primaryTextColor }}>
              Call Us: **+91 99653 55809**
            </Typography>
          </Stack>


        </Grid>
      </Grid>
    </Box>
  );
};

export default About;