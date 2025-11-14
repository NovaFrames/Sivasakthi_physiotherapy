import { Box, Typography, IconButton, Divider, Link } from "@mui/material";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 5,
          mb: 6,
        }}
      >
        {/* Logo & Description */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{
                bgcolor: "white",
                p: 1.5,
                borderRadius: 1,
              }}
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: "#1a4d4d" }}
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </Box>

            <Box>
              <Typography variant="h5" fontWeight="bold">
                SIVASAKTHI
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                PHYSIOTHERAPY
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.7 }}>
            New-age physio care delivering high-quality personalized treatments
            by seamlessly integrating clinic, home & tele-rehab.
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <IconButton
                key={idx}
                sx={{ color: "white", "&:hover": { opacity: 0.7 } }}
              >
                <Icon size={20} />
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* More Services */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6" sx={{ opacity: 0.8, fontSize: "1rem" }}>
            More Services
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {["About Us", "Blog", "FAQ"].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  color: "white",
                  fontSize: "0.95rem",
                  "&:hover": { opacity: 0.7 },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Contact */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6" sx={{ opacity: 0.8, fontSize: "1rem" }}>
            Contact
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Mail size={18} />
            <Link
              href="mailto:help@cbphysiotherapy.in"
              underline="none"
              sx={{ color: "white", "&:hover": { opacity: 0.7 } }}
            >
              help@cbphysiotherapy.in
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", mb: 3 }} />

      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          Copyright 2025 Curebooth Healthcare Services Pvt. Ltd.
          All Rights Reserved.
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          {["Terms And Conditions", "FAQ", "Privacy Policy"].map((item) => (
            <Link
              key={item}
              href="#"
              underline="none"
              sx={{
                color: "white",
                fontSize: "0.9rem",
                "&:hover": { opacity: 0.7 },
              }}
            >
              {item}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
