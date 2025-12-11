import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon, Close, ExpandMore } from "@mui/icons-material";
import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // desktop submenu
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About US", path: "/about" },
    {
      label: "Service",
      path: "/service",
      submenu: [
        { label: "Gait school", path: "/service/gait-school" },
        { label: "Functional activity", path: "/service/functional-activity" },
        { label: "Walking", path: "/service/walking" },
        { label: "Instruments", path: "/service/instruments" },
        { label: "Specialties", path: "/service/specialties" },
        { label: "Postural correction exercise", path: "/service/postural-correction-exercise" },
      ],
    },
    { label: "Physiotheraphy", path: "/physiotheraphy" },
    { label: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      {/* Floating Centered Navbar */}
      <Box
        sx={{
          position: "sticky",
          top: 26,
          zIndex: 1100,
          px: { xs: 2, md: 4 },
        }}
      >
        <AppBar
          position="static"
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            borderRadius: "50px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            maxWidth: "1200px",
            mx: "auto",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 12px 48px rgba(0, 0, 0, 0.12)",
            },
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              px: { xs: 2, md: 4 },
              py: 1,
              minHeight: { xs: "64px", md: "70px" },
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              <Box
                sx={{
                  bgcolor: "primary.main",
                  p: 1.2,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "rotate(5deg) scale(1.05)",
                  },
                }}
              >
                <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 
                  10 10 10 10-4.48 10-10S17.52 2 
                  12 2zm0 3c1.66 0 3 1.34 3 
                  3s-1.34 3-3 3-3-1.34-3-3 
                  1.34-3 3-3zm0 14.2c-2.5 
                  0-4.71-1.28-6-3.22.03-1.99 
                  4-3.08 6-3.08 1.99 0 5.97 
                  1.09 6 3.08-1.29 1.94-3.5 
                  3.22-6 3.22z" />
                </svg>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  SIVASAKTHI
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "10px",
                    letterSpacing: "1px",
                  }}
                >
                  PHYSIOTHERAPY
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation - Centered */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {navItems.map((item) =>
                item.submenu ? (
                  <Box key={item.label} sx={{ position: "relative" }}>
                    {/* Nav Parent Item */}
                    <Box
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        cursor: "pointer",
                        color: location.pathname.startsWith("/service") ? "primary.main" : "text.primary",
                        fontWeight: 500,
                        fontSize: "15px",
                        position: "relative",
                        py: 1,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "primary.main",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: location.pathname.startsWith("/service") ? "100%" : "0%",
                          height: "2px",
                          bgcolor: "primary.main",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::after": {
                          width: "100%",
                        },
                      }}
                    >
                      <Typography fontSize="15px" fontWeight={500}>
                        {item.label}
                      </Typography>
                      <ChevronDown size={16} />
                    </Box>

                    {/* Dropdown Menu */}
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={() => setAnchorEl(null)}
                      sx={{
                        "& .MuiPaper-root": {
                          borderRadius: "16px",
                          mt: 1,
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                          minWidth: "200px",
                        },
                      }}
                    >
                      {item.submenu.map((sub) => (
                        <MenuItem
                          key={sub.path}
                          onClick={() => {
                            navigate(sub.path);
                            setAnchorEl(null);
                          }}
                          sx={{
                            py: 1.5,
                            px: 2.5,
                            fontSize: "14px",
                            "&:hover": {
                              bgcolor: "primary.light",
                              color: "primary.main",
                            },
                          }}
                        >
                          {sub.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Box
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    sx={{
                      cursor: "pointer",
                      color: location.pathname === item.path ? "primary.main" : "text.primary",
                      fontWeight: 500,
                      fontSize: "15px",
                      position: "relative",
                      py: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: location.pathname === item.path ? "100%" : "0%",
                        height: "2px",
                        bgcolor: "primary.main",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    <Typography fontSize="15px" fontWeight={500}>
                      {item.label}
                    </Typography>
                  </Box>
                )
              )}
            </Box>

            {/* Desktop Buttons */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1.5 }}>
              <Button
                onClick={() => navigate("/contact")}
                sx={{
                  color: "text.primary",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "14px",
                  px: 2.5,
                  py: 1,
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                Contact
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate("/book-appointment")}
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                  px: 3,
                  py: 1,
                  borderRadius: "25px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "primary.dark",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                Book Appointment
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{
                display: { xs: "block", md: "none" },
                color: "text.primary",
                bgcolor: "rgba(0, 0, 0, 0.04)",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.08)",
                },
              }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* =================== MOBILE DRAWER =================== */}
      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 270, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={() => setMobileOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <List>
            {navItems.map((item) =>
              item.submenu ? (
                <Box key={item.label}>
                  <ListItemButton onClick={() => setMobileServiceOpen(!mobileServiceOpen)}>
                    <ListItemText primary={item.label} />
                    <ExpandMore
                      sx={{
                        transform: mobileServiceOpen ? "rotate(180deg)" : "none",
                        transition: "0.2s",
                      }}
                    />
                  </ListItemButton>

                  <Collapse in={mobileServiceOpen}>
                    {item.submenu.map((sub) => (
                      <ListItemButton
                        key={sub.path}
                        sx={{ pl: 4 }}
                        onClick={() => {
                          navigate(sub.path);
                          setMobileOpen(false);
                        }}
                      >
                        <ListItemText primary={sub.label} />
                      </ListItemButton>
                    ))}
                  </Collapse>
                </Box>
              ) : (
                <ListItemButton
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileOpen(false);
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              )
            )}
          </List>

          <Box sx={{ mt: 3 }}>
            <Button
              fullWidth
              variant="primary"
              onClick={() => navigate("/contact")}
              sx={{ mb: 1 }}
            >
              Contact
            </Button>

            <Button fullWidth variant="primary" onClick={() => navigate("/book-appointment")}>
              Book Appointment
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
