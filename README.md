
# Role-Based Access Control (RBAC) with JWT

A simple Node.js & Express project demonstrating **role-based access control** (RBAC) using **JWT authentication**.

## Features
- User roles: `admin`, `faculty`, `student`
- JWT-based authentication
- Protected routes with role-based authorization
- Simple JSON data store for users

## Technologies
- Node.js
- Express.js
- Passport.js (JWT strategy)
- JSON Web Tokens (JWT)
- dotenv for environment variables

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ashutoshh-jhaa/role-based-access-control-jwt.git
cd role-based-access-control-jwt
```
2. Install dependencies:
```bash
npm install 
```
3. Create a `.env` file in the root:
```bash
JWT_SECRET=your-secret-key
```

## Running the App
```bash
npm run dev 
```
The server will start on `http://localhost:4000`.

## API Endpoints

-   `/auth/admin/login` → Admin login
    
-   `/auth/faculty/login` → Faculty login
    
-   `/auth/student/login` → Student login
    
-   `/admin` → Admin-only routes
    
-   `/faculty` → Faculty & Admin routes
    
-   `/student` → Student, Faculty & Admin routes
    

All protected routes require a **Bearer token** in the Authorization header.

## Notes

-   Passwords are currently stored in plain JSON (for demo purposes). For production, use hashed passwords (e.g., bcrypt).
    
-   JWT payload currently contains minimal data (`id` and `role`) for security.

## License 
- This project is licensed under the MIT License.
