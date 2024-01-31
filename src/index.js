const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // Note: extended set to true
app.use(cookieParser());

routes(app);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    // console.log("Connected to database!");
  })
  .catch((err) => {
    // console.log("error", err);
  });

app.listen(port, () => {
  // console.log("server listening on port", + port);
});
