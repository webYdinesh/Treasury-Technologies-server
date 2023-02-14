const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const MainRouter = require("./Routes/MainRouter");
const { connectDB } = require("./Database/ConnectDB");
const app = express();
//connect env
dotenv.config({ path: "./Config/.env" });
//cors setup
app.use(cors({ origin: process.env.ORIGIN }));

//body-parser
app.use(express.json());

//connect DB
connectDB();

//server entry Point
app.get("/", (req, res) => {
    return res.send(
        `Our Website Is Live..<a href=${process.env.ORIGIN} target="_blank">Click Here</a>`
    );
});

app.use("/api/v1", MainRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`);
});
