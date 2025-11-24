import React, { useState } from "react";
import {
  Box,
  Paper,
  IconButton,
  TextField,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ChatWindow: React.FC<Props> = ({ open, onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "What can this website do?",
    "Show me popular products",
    "Help me choose a service",
  ];

  const handleVoiceInput = () => {
    const recog = new (window as any).webkitSpeechRecognition();
    recog.lang = "en-US";

    recog.onresult = (event: any) => {
      setInput(event.results[0][0].transcript);
    };

    recog.start();
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    setInput("");

    // 🔥 Replace with your API route
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage.text }),
    });

    const data = await res.json();

    const botMessage = { sender: "bot", text: data.reply };
    setMessages((prev) => [...prev, botMessage]);

    setLoading(false);
  };

  if (!open) return null;

  return (
    <Paper
      elevation={6}
      sx={{
        width: 350,
        height: 470,
        position: "fixed",
        bottom: 90,
        right: 20,
        p: 2,
        borderRadius: 3,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Assistant</Typography>
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
          mb: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {messages.map((msg, i) => (
          <Box
            key={i}
            sx={{
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              bgcolor: msg.sender === "user" ? "primary.main" : "grey.300",
              color: msg.sender === "user" ? "white" : "black",
              p: 1.2,
              borderRadius: 2,
              maxWidth: "80%",
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

      {/* Suggestions */}
      <Box display="flex" gap={1} flexWrap="wrap" mb={1}>
        {suggestions.map((s) => (
          <Button
            size="small"
            variant="outlined"
            key={s}
            onClick={() => setInput(s)}
          >
            {s}
          </Button>
        ))}
      </Box>

      {/* Input */}
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton onClick={handleVoiceInput}>
          <MicIcon />
        </IconButton>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton onClick={sendMessage} color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatWindow;
