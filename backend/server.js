import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import mongooseConnect from "./config/mongoose.connect.js";
import patientsRouter from "./routes/patients.routes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongooseConnect();

app.get("/", (_, res) => {
  res.send("Server Running!");
});

app.use("/api/patients", patientsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
