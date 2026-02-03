import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "moltbot backend running" });
});

app.post("/intervene", (req, res) => {
  console.log("Intervention received:");
  console.log(req.body);
  res.json({ ok: true });
});

app.get("/rooms", (req, res) => {
  res.json([]);
});

app.get("/rooms/:room_id/messages", (req, res) => {
  res.json([]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

