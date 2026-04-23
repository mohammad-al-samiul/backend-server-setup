# 🚀 Node.js Backend API

A simple backend API built with Node.js, Express, and PostgreSQL.

## 📦 Features

- JWT Authentication (Access + Refresh Token)
- PostgreSQL Database
- Environment-based configuration
- REST API structure

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Supabase

## ⚙️ Installation

```
# Clone the repository
git clone <your-repo-url>

# Go to project directory
cd <your-project-name>

# Install dependencies
npm install
```

## 🔐 Environment Variables

Create a .env file in the root directory and add the following:

```
NODE_ENV=development
PORT=5000

DB_URI=postgresql://<username>:<password>@<host>:<port>/<database>

JWT_SECRET=your_access_token_secret
JWT_EXPIRES_IN=7d

JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_REFRESH_EXPIRES_IN=30d
```

## ▶️ Running the Project

```
# Development mode
npm run dev

# Production mode
npm start
```

Server will run on:

```
http://localhost:5000
```

## 🔑 Authentication

This project uses:

- Access Token (short-lived)
- Refresh Token (long-lived)

Make sure to store tokens securely on the client side.

## 📁 Project Structure

```
src/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── middlewares/
 ├── config/
 └── app.js
```

## ⚠️ Important Notes

- Never commit your .env file
- Add .env to .gitignore
- Use strong secrets for JWT in production
- Always use secure database credentials

## 📌 Example API Endpoints

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/user/profile

```

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

## 📄 License

This project is licensed under the MIT License.
