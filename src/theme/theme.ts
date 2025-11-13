import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: '"Darker Grotesque", sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Darker Grotesque", sans-serif',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Darker Grotesque", sans-serif',
        },
      },
    },
  },
});


export default theme;
