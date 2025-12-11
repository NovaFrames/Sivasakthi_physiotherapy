import  { useState } from "react";
import { Box, Typography, Paper, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FaqItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs: FaqItem[] = [
    {
      question: "What Is Precision Care For Pain-Free Mobility?",
      answer:
        "Precision Care for Pain-Free Mobility is CB Physiotherapy's technology-driven approach to physiotherapy treatment. It uses AI-powered diagnosis and personalized rehabilitation plans to deliver targeted pain relief and improve mobility.",
    },
    {
      question: "What Are The Services Offered By Cb Physiotherapy In India?",
      answer:
        "CB Physiotherapy offers a comprehensive range of services including in-clinic physiotherapy, home physiotherapy visits, tele-rehabilitation, sports injury treatment, orthopedic rehab, neurological rehab, and more.",
    },
    {
      question:
        "Do You Offer Remote Physiotherapy / Virtual Physiotherapy To Overseas Patients.",
      answer:
        "Yes, we offer virtual physiotherapy services to overseas patients via our tele-rehabilitation platform with expert physiotherapists.",
    },
    {
      question: "How Do I Book An Appointment For Clinic Or Home Physiotherapy Services?",
      answer:
        "You can book via phone, WhatsApp, website, or our official app by choosing your preferred service and time slot.",
    },
    {
      question: "What Conditions Do You Treat At Cb Physiotherapy?",
      answer:
        "We treat back pain, neck pain, joint pain, sports injuries, arthritis, stroke recovery, neurological issues, post-surgical rehab and more.",
    },
    {
      question: "Are Your Physiotherapists Certified And Experienced?",
      answer:
        "All physiotherapists are certified, registered, and trained in specialized domains to deliver expert physiotherapy care.",
    },
  ];

  const toggleFaq = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  return (
    <Box
      sx={{
        backgroundColor: "#f9fafb",
        py: 8,
        px: { xs: 2, sm: 4, lg: 8 },
      }}
    >
      <Box sx={{ maxWidth: "800px", mx: "auto" }}>
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={(theme) => ({ color: theme.palette.primary.main })}
          >
            FAQ'S
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Some frequently asked questions regarding physiotherapy / chiropractor
            services.
          </Typography>
        </Box>

        {/* FAQ Accordion */}
        <Box>
          {faqs.map((faq, index) => (
            <Paper
              key={index}
              elevation={1}
              sx={{
                mb: 2,
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid #e5e7eb",
              }}
            >
              {/* Question */}
              <Box
                onClick={() => toggleFaq(index)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 3,
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                <Typography
                  fontWeight={600}
                  sx={{ color: "#111827", pr: 2, flex: 1 }}
                >
                  {faq.question}
                </Typography>

                <IconButton
                  sx={{
                    transition: "0.3s",
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: "#fff",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    },
                  }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Box>

              {/* Answer */}
              <Collapse in={openIndex === index} timeout={300}>
                <Typography sx={{ px: 3, pb: 3, color: "text.secondary", lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </Collapse>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
