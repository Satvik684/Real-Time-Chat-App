# 💬 Real-Time Chat App (MERN + Socket.IO + Cloudinary)

A modern real-time chat application built with the **MERN stack**. It features real-time messaging using **Socket.IO**, secure user authentication with **JWT**, and image/media uploads via **Cloudinary**. The UI is powered by **React**, **Tailwind CSS**, **Zustand**, and **DaisyUI**.

---

## ✨ Features

- 🧑‍🤝‍🧑 User authentication (signup/login with JWT + bcrypt)
- 💬 Real-time messaging with Socket.IO
- 📁 Media/image upload using Cloudinary
- 🌐 Persistent chat rooms and user sessions
- 📱 Responsive UI with DaisyUI + Tailwind CSS
- 🍪 Cookie-based auth using `cookie-parser`
- ⚡ Zustand for global state management

---

## 🛠 Tech Stack

**Frontend**:
- React
- Tailwind CSS
- DaisyUI
- Zustand
- Axios
- Socket.IO Client

**Backend**:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + bcrypt
- Cookie-parser
- Socket.IO Server
- Cloudinary SDK

---

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
https://github.com/Satvik684/Real-Time-Chat-App.git
cd Real-Time-Chat-App
```

### 2.Setup backend with nodemon
```bash
cd backend
npm install
```

### 3.create a .env file in backend folder
```bash
MONGODB_URI = your_mongodb_uri
PORT = 5001
JWT_SECRET = your_jwt_secret
NODE_ENC = development

CLOUDINARY_CLOUD_NAME = your_cloud_name
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_API_SECRET = your_api_secret
```
### 4.Start the backend server
```bash
npm start
```
# 5.Setup frontend
```bash
cd ../frontend
npm install
npm run dev
```

Now the project should be running on your local react server



