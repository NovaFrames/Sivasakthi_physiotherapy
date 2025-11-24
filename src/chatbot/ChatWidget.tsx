import { useState } from "react";
import ChatWindow from "./ChatWindow";
import { Fab } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Fab
        color="primary"
        onClick={() => setOpen(!open)}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <ChatIcon />
      </Fab>

      <ChatWindow open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ChatWidget;
