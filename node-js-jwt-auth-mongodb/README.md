# Skygoal Backend Assignment

A secure and modular backend application built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. This project demonstrates core backend development skills, including database integration, authentication, and role-based access control.

---

## **Tech Stack**
- **Node.js**: Runtime environment for executing JavaScript on the server-side.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for data persistence.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Tokens)**: Authentication mechanism for secure API access.
- **dotenv**: Manages environment variables.
- **bcryptjs**: Encrypts user passwords for security.

---

## **Features**
1. **Authentication and Authorization**
   - User signup with hashed passwords using `bcryptjs`.
   - Login mechanism with JWT token generation.
   - Role-based access control:
     - **User Roles:** `user`, `admin`, `moderator`.
     - Admins can manage all users, while regular users can manage their own data.

2. **Database Management**
   - MongoDB integration using Mongoose.
   - Environment variable-based connection string for secure credentials.

3. **API Routes**
   - Authentication routes for signup and signin.
   - Protected routes with token verification.

4. **Scalable Project Structure**
   - Organized into folders: `routes/`, `controllers/`, `models/`, `middlewares/`, `config/`.

---

## **Project Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/<your-github-username>/<repository-name>.git
cd <repository-name>