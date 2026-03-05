import express, { type Application } from "express";
import cors from "cors";
import { logger } from "./utils/logger";
import { notFound } from "./middlewares/notFound";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: [],
    credentials: true,
  }),
);
app.use(logger);

app.get("/", (req, res) => {
  res.send("Project is running");
});

// Not Found Middleware
app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
