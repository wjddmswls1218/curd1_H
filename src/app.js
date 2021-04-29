import express from "express";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import postRouter from "./router/postRouter";
import bodyParser from "body-parser";
import connect from "../db";
dotenv.config();

const app = express();
const PORT = 7001;

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(morgan(`dev`));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
connect();

app.use("/", postRouter);

app.listen(PORT, () => {
  console.log(`${PORT} 🐳 Server Start`);
});
