import { useState } from "react";
import { Box, Typography, Button, Avatar, Paper } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
      name: "Ava Brown",
      position: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quod. Ipsum dolor sit amet consectetur adipisicing elit. Quas, quod tempor erat.",
      name: "John Smith",
      position: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. At lorem lorem magna ut et.",
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  const sideImages = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        px: 2,
        bgcolor: (theme) => theme.palette.background.default,
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* HEADER */}
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          sx={{
            mb: 8,
            color: (theme) => theme.palette.primary.dark,
          }}
        >
          What Our Clients <br />
          Say!
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE IMAGES (Hidden on mobile) */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
              gap: 3,
              mr: 6,
            }}
          >
            {sideImages.slice(0, 3).map((img, i) => (
              <Paper
                key={i}
                sx={{
                  width: 120,
                  height: 120,
                  overflow: "hidden",
                  borderRadius: 2,
                  ml: i === 1 ? -10 : 0,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt="client"
                  sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 5 }}
                />
              </Paper>
            ))}
          </Box>

          {/* CENTER TESTIMONIAL CARD */}
          <Paper
            elevation={2}
            sx={{
              width: "100%",
              maxWidth: 600,
              borderRadius: 4,
              p: { xs: 4, md: 6 },
              bgcolor: (theme) => theme.palette.background.default,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
              <Avatar
                src={testimonials[currentIndex].image}
                sx={{
                  width: { xs: 100, md: 140 },
                  height: { xs: 100, md: 140 },
                }}
              />
            </Box>

            {/* TEXT */}
            <Typography
              sx={{
                color: "text.secondary",
                textAlign: "center",
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              {testimonials[currentIndex].text}
            </Typography>

            {/* NAME */}
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight="bold"
              sx={{
                color: (theme) => theme.palette.primary.dark,
                mb: 1,
              }}
            >
              {testimonials[currentIndex].name}
            </Typography>

            {/* POSITION */}
            <Typography
              textAlign="center"
              sx={{ color: "text.secondary", mb: 4 }}
            >
              {testimonials[currentIndex].position}
            </Typography>

            {/* NAVIGATION BUTTONS */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                onClick={handlePrevious}
                sx={{
                  width: 60,
                  height: 60,
                  minWidth: 0,
                  borderRadius: 2,
                  color: "#fff",
                  bgcolor: (theme) => theme.palette.primary.main,
                  "&:hover": { bgcolor: (theme) => theme.palette.primary.dark },
                  boxShadow: 3,
                }}
              >
                <ChevronLeft />
              </Button>

              <Button
                onClick={handleNext}
                sx={{
                  width: 60,
                  height: 60,
                  minWidth: 0,
                  borderRadius: 2,
                  color: "#fff",
                  bgcolor: (theme) => theme.palette.primary.main,
                  "&:hover": { bgcolor: (theme) => theme.palette.primary.dark },
                  boxShadow: 3,
                }}
              >
                <ChevronRight />
              </Button>
            </Box>
          </Paper>

          {/* RIGHT SIDE IMAGES (Hidden on mobile) */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
              gap: 3,
              mr: -6,
            }}
          >
            {sideImages.slice(0, 3).map((img, i) => (
              <Paper
                key={i}
                sx={{
                  width: 120,
                  height: 120,
                  overflow: "hidden",
                  borderRadius: 2,
                  ml: i === 1 ? 10 : 0,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt="client"
                  sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 5 }}
                />
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
