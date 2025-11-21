import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const WHATSAPP_TOKEN = "EAAYwZCrtV1kIBQBrIbZAypz3Kvnon9pHykqaTzoOFiiZCDTZCzC5K39dJeXnyWVpdq9a3jzp1rWKOlU8W6uuC95GKv8ljppXyBub4I1jrbWC5E2lesRHizZCt1DaaJ9u037sT5H0Ew72GTuZCplwpZAvutjVgHMa6QowSZAE3YVIqnDzLitwF7AUvuteOZC32iXmJpbjHcZAWK2ZBgAqK1lJz4Asd4Xp2qykdY2qvbZBO8clvhehzg3kBWI8Ce4JG35dk2rQxGZAnIxeKkEOwZBDKtCO201WBG";
const WHATSAPP_NUMBER_ID = "805113832692020";
const ADMIN_PHONE = "919715768735"; // Replace with the admin's WhatsApp number in international format

// Health check route (optional)
app.get("/", (req, res) => {
  res.send("WhatsApp API Server is Running 🚀");
});

// API to send WhatsApp messages
app.post("/send-whatsapp", async (req, res) => {
  try {
    const { name, phone, email, service, date, time, notes } = req.body;

    const messageText = `
📌 *New Appointment Booking*

👤 Name: ${name}
📞 Phone: ${phone}
✉️ Email: ${email}
💼 Service: ${service}
📅 Date: ${date}
⏰ Time: ${time}
📝 Notes: ${notes || "No additional notes"}
    `.trim();

    const data = {
      messaging_product: "whatsapp",
      to: ADMIN_PHONE,
      type: "text",
      text: { body: messageText }
    };

    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${WHATSAPP_NUMBER_ID}/messages`,
      data,
      {
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
      meta: response.data
    });

  } catch (error) {
    console.error("❌ ERROR:", error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
