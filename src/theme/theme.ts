// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    navbar?: string;
    sidebar?: string;
    footer?: string;
    section?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    danger: true;
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#134E4A", // Teal-900
    },
    secondary: {
      main: "#0f766e", // Teal-700
    },
    error: {
      main: "#dc2626",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
      navbar: "#134E4A",
      sidebar: "#134E4A",
      footer: "#ffffff",
      section: "#f9f9f9",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
      disabled: "#94a3b8",
    },
  },

  typography: {
    fontFamily: '"Darker Grotesque", sans-serif',
  },

  // ----------------------------------------------------
  // COMPONENT OVERRIDES
  // ----------------------------------------------------
  components: {
    // CUSTOM BUTTON VARIANTS
    MuiButton: {
      variants: [
        // PRIMARY BUTTON
        {
          props: { variant: "primary" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            color: "#ffffff",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#0f3f3c",
            },
          }),
        },

        // SECONDARY BUTTON
        {
          props: { variant: "secondary" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.secondary.main,
            color: "#ffffff",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#0c5b56",
            },
          }),
        },

        // TEXT BUTTON
        {
          props: { variant: "text" },
          style: ({ theme }) => ({
            backgroundColor: "#f0fdfa",
            color: theme.palette.primary.main,
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              color: "#ffffff",
            },
          }),
        },

        // DANGER BUTTON
        {
          props: { variant: "danger" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.error.main,
            color: "#ffffff",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#b91c1c",
            },
          }),
        },
      ],
    },

    // Paper Style
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          background: "#ffffff",
          boxShadow: "none",
          padding: "12px 16px",
        },
      },
    },

    // Icons
    MuiSvgIcon: {
      styleOverrides: {
        root: () => ({
          // custom icon styling if needed
        }),
      },
    },
  },
});
