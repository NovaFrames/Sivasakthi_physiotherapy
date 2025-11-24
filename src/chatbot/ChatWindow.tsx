import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  IconButton,
  TextField,
  Typography,
  CircularProgress,
  Avatar,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import HealingIcon from "@mui/icons-material/Healing";

interface Props {
  open: boolean;
  onClose: () => void;
}

const physiotherapyFAQ = [
  {
    question: "What does physiotherapy treat?",
    answer:
      "Physiotherapy helps with muscle pain, joint stiffness, back pain, neck pain, neurological problems, sports injuries, arthritis, post-surgery recovery, and more.",
  },
  {
    question: "How long does a physiotherapy session last?",
    answer:
      "A typical physiotherapy session lasts 30–45 minutes depending on the treatment plan and patient condition.",
  },
  {
    question: "Is physiotherapy painful?",
    answer:
      "Some discomfort may occur initially, but physiotherapy should not be intensely painful. Your therapist will adjust exercises based on comfort level.",
  },
  {
    question: "How many sessions do I need?",
    answer:
      "It varies from person to person. Minor issues may resolve in 3–5 sessions, while chronic or post-surgery recovery may require 10–20+ sessions.",
  },
  {
    question: "Do I need a doctor’s referral?",
    answer:
      "A referral is not always required. You can directly book an appointment unless your insurance provider requests one.",
  },
];

const ChatWindow: React.FC<Props> = ({ open, onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    if (open) {
      setMessages([
        {
          sender: "bot",
          text: "👋 Hello! I'm your physiotherapy assistant. Click below to pick a question.",
        },
      ]);
    }
  }, [open]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput("");

    const matchedFAQ = physiotherapyFAQ.find(
      (f) => f.question.toLowerCase() === userMessage.text.toLowerCase()
    );

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: matchedFAQ
          ? matchedFAQ.answer
          : "Thank you! A physiotherapist will respond soon. 😊",
      };

      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 1000);
  };

  if (!open) return null;

  return (
    <Paper
      elevation={8}
      sx={{
        width: 360,
        height: 500,
        position: "fixed",
        bottom: 90,
        right: 20,
        p: 2,
        borderRadius: 4,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <HealingIcon fontSize="small" />
          </Avatar>
          <Typography variant="h6" fontWeight={600}>
            Physio Care Assistant
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          mt: 1,
          mb: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          pr: 1,
        }}
      >
        {messages.map((msg, i) => (
          <Box
            key={i}
            sx={{
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              bgcolor: msg.sender === "user" ? "primary.main" : "rgba(0,0,0,0.05)",
              color: msg.sender === "user" ? "white" : "black",
              p: 1.3,
              borderRadius: 3,
              maxWidth: "80%",
              boxShadow: msg.sender === "user"
                ? "0px 3px 8px rgba(0,0,0,0.2)"
                : "0px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {msg.text}
          </Box>
        ))}

        {loading && (
          <Box display="flex" alignItems="center" gap={1}>
            <CircularProgress size={18} />
            <Typography>Typing…</Typography>
          </Box>
        )}
      </Box>

      {/* Dropdown (Above Input Field) */}
      <Collapse in={openDropdown}>
        <Paper
          sx={{
            p: 1,
            mb: 1,
            borderRadius: 2,
            background: "white",
            maxHeight: 140,
            overflowY: "auto",
            border: "1px solid #ddd",
          }}
        >
          <List dense>
            {physiotherapyFAQ.map((item, i) => (
              <ListItemButton
                key={i}
                onClick={() => {
                  setInput(item.question);
                  setOpenDropdown(false);
                }}
              >
                <ListItemText primary={item.question} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      </Collapse>

      {/* Input + Send */}
      <Box display="flex" alignItems="center" gap={1}>
        <TextField
          fullWidth
          size="small"
          value={input}
          placeholder="Select a question..."
          onClick={() => setOpenDropdown(!openDropdown)}
          InputProps={{
            readOnly: true,
            sx: { cursor: "pointer" }
          }}
          sx={{ borderRadius: 2 }}
        />
        <IconButton
          onClick={sendMessage}
          color="primary"
          disabled={!input}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatWindow;
