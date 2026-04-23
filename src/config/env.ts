import "dotenv/config";
import { SignOptions } from "jsonwebtoken";

export const config = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  db_url: process.env.DB_URI as string,
  jwt_secret: process.env.JWT_SECRET as string,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET as string,
  jwt_expires_in: process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
  jwt_refresh_expires_in: process.env
    .JWT_REFRESH_EXPIRES_IN as SignOptions["expiresIn"],
};
