import http from "http";
import app from "./app";

import { config } from "./config/env";
import { prisma } from "./config/prisma";

const server = http.createServer(app);
const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");
    server.listen(config.port, () => {
      console.log(`🚀 Server running on port ${config.port}`);
    });
  } catch (error) {
    process.exit(1);
  }
};

process.on("SigINT", () => server.close());
process.on("SIGTERM", () => server.close());

startServer();
