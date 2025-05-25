const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); 

const app = express();
app.use(cors());
app.use(express.json());

let accessToken = null;
async function getAccessToken() {
  if (accessToken) return accessToken; 

  try {
    const res = await axios.post("https://accounts.zoho.com/oauth/v2/token", null, {
      params: {
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: "refresh_token"
      }
    });

    accessToken = res.data.access_token;

    setTimeout(() => {
      accessToken = null;
    }, 55 * 60 * 1000);

    return accessToken;
  } catch (err) {
    console.error("Failed to refresh access token:", err.response?.data || err.message);
    throw new Error("Token refresh failed");
  }
}

app.post("/submit-ticket", async (req, res) => {
  console.log("Received request:", req.body);

  try {
    const token = await getAccessToken();

    const response = await axios.post(
      "https://www.zohoapis.com/creator/v2.1/data/support2327/support-desk-application/form/Ticket_form",
      { data: req.body.data },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Zoho API Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
