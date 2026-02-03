import express from "express";

const app = express();
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "moltbot backend running" });
});

// ---- INTERVENTION ENDPOINTS ----
// Base44 may call either of these, so we support both

app.post("/intervene", (req, res) => {
  console.log("Intervention received at /intervene");
  console.log(req.body);
  res.json({ ok: true });
});

app.post("/api/intervene", (req, res) => {
  console.log("Intervention received at /api/intervene");
  console.log(req.body);
  res.json({ ok: true });
});

// ---- ROOMS ----

app.get("/rooms", (req, res) => {
  console.log("GET /rooms");
  res.json([]);
});

app.get("/api/rooms", (req, res) => {
  console.log("GET /api/rooms");
  res.json([]);
});

// ---- ROOM MESSAGES ----

app.get("/rooms/:room_id/messages", (req, res) => {
  console.log("GET /rooms/:room_id/messages");
  res.json([]);
});

app.get("/api/rooms/:room_id/messages", (req, res) => {
  console.log("GET /api/rooms/:room_id/messages");
  res.json([]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

