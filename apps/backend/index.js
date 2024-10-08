const express = require("express");
const mongoose = require("mongoose");
const app = express();
const session = require("express-session");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const dev = process.env.NODE_ENV != "production";

const imageRoute = require("./routes/imageRoute");
const nftsRoute = require("./routes/nftsRoute");
const walletRoute = require("./routes/walletRoute");
const path = require("path");
const { errorHandler } = require("./middlewares/error");

const port = process.env.PORT || 8080;

// Middleware to parse request body and cookies
// app.use(cookieParser());

// CORS configuration
app.use(
  cors({
    origin: "*", // TODO: (@SOUMITRO-SAHA) Update this to Later in AWS Deployment
    methods: "GET, HEAD, PUT,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.use(express.json());

// Session configuration
app.use(
  session({
    secret: "your-sodh93ehhs-key", // Change this to a secure key
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set secure to true in production
      maxAge: 1000 * 60 * 30, // Session expires in 30 minutes
    },
  })
);

app.use(cookieParser());

app.use("./uploads", express.static(path.join(__dirname, "uploads")));

app.use(errorHandler);
app.use("/api/v1/image", imageRoute);
app.use("/api/v1/nfts", nftsRoute); // Expose the NFT route
// for wallet
app.use("/api/v1/wallet", walletRoute);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
// Database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.error("DB connection error:", err));
