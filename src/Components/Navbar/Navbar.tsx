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
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // desktop submenu
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const navigate = useNavigate();

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
        { label: "Specialities", path: "/service/specialities" },
        { label: "Postural correction exercise", path: "/service/postural-correction" },
        { label: "Playing activities", path: "/service/playing-activities" },
        { label: "Lab testing", path: "/service/lab-testing" },
      ],
    },
    { label: "Physiotheraphy", path: "/physiotheraphy" },
    { label: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      <AppBar
        sx={{
          bgcolor: "background.navbar",
          px: 3,
          py: 1,
        }}
      >
        <Toolbar sx={{ maxWidth: "1400px", width: "100%", mx: "auto" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                bgcolor: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              <svg width="30" height="30" fill="#1a4d4d" viewBox="0 0 24 24">
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
              <Typography variant="h6" sx={{ color: "primary.navText", fontWeight: 700 }}>
                SIVASAKTHI
              </Typography>
              <Typography
                sx={{
                  color: "primary.navText",
                  fontSize: "0.8rem",
                }}
              >
                PHYSIOTHERAPY
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto", gap: 3 }}>
            {navItems.map((item) =>
              item.submenu ? (
                <Box key={item.label}>
                  <Button
                    endIcon={<ChevronDown size={16} />}
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    sx={{ color: "primary.navText", fontWeight: 500 }}
                  >
                    {item.label}
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                  >
                    {item.submenu.map((sub) => (
                      <MenuItem
                        key={sub.path}
                        onClick={() => {
                          navigate(sub.path);
                          setAnchorEl(null);
                        }}
                      >
                        {sub.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  sx={{ color: "primary.navText", fontWeight: 500 }}
                >
                  {item.label}
                </Button>
              )
            )}
          </Box>

          {/* Desktop Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, ml: 3 }}>
            <Button variant="primary" onClick={() => navigate("/contact")}>
              Contact
            </Button>
            <Button variant="primary" onClick={() => navigate("/book-appointment")}>
              Book Appointment
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

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
