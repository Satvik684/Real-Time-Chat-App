const express = require("express");

const dotenv = require("dotenv");

const connectDB = require("./lib/db");

const cookieParser = require("cookie-parser");

const cors = require("cors");

dotenv.config();

const authRoutes = require("./routes/auth.route");
const messageRoutes = require("./routes/message.route");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
  connectDB();
});
 