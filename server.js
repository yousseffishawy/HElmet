const express = require("express");
const twilio = require("twilio");

const app = express();
app.use(express.json());

const client = twilio(
  "AC30b26f40d3443e5eb606441dafcaa958",
  "a83f399366b7b66bc1f5dee287b3ba46"
);

app.post("/crash", async (req, res) => {
  try {
    await client.messages.create({
      body: "🚨 EMERGENCY ALERT\nCrash detected by smart helmet.\nRider unresponsive.",
      from: "+15183135146",
      to: "+201033282416"
    });
    res.send("SMS Sent");
  } catch (err) {
    res.status(500).send("Error sending SMS");
  }
});

app.listen(3000, () => console.log("Server running"));
