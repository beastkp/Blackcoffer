const express = require("express");
const helmet = require("helmet");
const connectDB = require("./db/connect");
const cors = require("cors");
require("dotenv").config();

const insertRouter = require("./routes/insertion");
const dashboardRouter = require("./routes/dashboard");

const app = express();
app.use(express.json());
app.use(cors());
// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         connectSrc: [
//           "'self'",
//           "http://127.0.0.1:8000",
//           "ws://localhost:42877/",
//         ],
//       },
//     },
//   })
// );

app.use("/api/v1/json", insertRouter);
app.use("/api/v1/dashboard", dashboardRouter);

const port = 8080;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
