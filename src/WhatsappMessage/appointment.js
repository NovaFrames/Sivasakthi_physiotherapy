// /api/send-whatsapp.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, service, date, time, notes } = req.body;

  const WHATSAPP_TOKEN = "YOUR_META_WHATSAPP_TOKEN";
  const PHONE_NUMBER_ID = "YOUR_PHONE_NUMBER_ID"; // example: 309876543210987
  const BUSINESS_NUMBER = "91XXXXXXXXXX"; // Your clinic WhatsApp number (without +)

  try {
    const whatsappResponse = await fetch(
      `https://graph.facebook.com/v20.0/${PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: BUSINESS_NUMBER,
          type: "template",
          template: {
            name: "new_booking", // Template name from WhatsApp dashboard
            language: { code: "en_US" },
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", text: name },
                  { type: "text", text: phone },
                  { type: "text", text: service },
                  { type: "text", text: date },
                  { type: "text", text: time },
                  { type: "text", text: notes || "No Notes" },
                ],
              },
            ],
          },
        }),
      }
    );

    const result = await whatsappResponse.json();

    if (result.messages) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false, error: result });
    }

  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
