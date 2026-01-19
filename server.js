require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// 1. CORS should be here
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// 2. Body parser
app.use(express.json());

// 3. Connect DB
connectDB();

// 4. Routes

// app.get("/test", (req, res) => {
//   res.send("Server OK");
// });
 
app.use("/api", userRoutes);

// 5. Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
