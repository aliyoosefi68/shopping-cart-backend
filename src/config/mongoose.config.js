const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connect to DB");
  })
  .catch((error) => {
    console.log(err?.message ?? "Failed to connect toDB");
  });
