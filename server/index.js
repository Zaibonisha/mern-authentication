const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");


// Load environment variables
dotenv.config();

// Set up server
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());

// Allow CORS from all origins and enable credentials (cookies)
// Allow CORS from http://localhost:3000 and enable credentials (cookies)
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

// Connect to MongoDB
mongoose.connect(process.env.MONGO_CONNECT)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// set up routes
app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));