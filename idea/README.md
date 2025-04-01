# 🛠 Backend - Applicant Tracking System (ATS)

This is the backend of the **ATS Project**, built using **Node.js**, **Express.js**, and **MongoDB**. It handles authentication, candidate management, job tracking, and reports.

---

## 🚀 Overview

The backend provides REST APIs to manage:
- ✅ **Admin Authentication**  
- ✅ **Candidate Management**  
- ✅ **Job Management**  
- ✅ **Reports & Analytics**  

---

## 🌍 Environment Variables

Create a `.env` file in the **backend** folder with the following:

```plaintext
PORT=7000
DATABASE=<your-mongodb-connection-string>
SECRET=<your-jwt-secret-key>
```

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/ATS-PROJECT.git
cd ATS-PROJECT/backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Server**
```sh
npm start  # Or use nodemon
```

The backend will run on [http://localhost:7000/](http://localhost:7000/).

---

## 📌 API Endpoints

### 🔹 Admin Routes

| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| GET    | `/admin/getDetail/:email` | Get admin details by email |
| POST   | `/admin/admin-register`   | Register a new admin      |
| POST   | `/admin/admin-login`      | Admin login               |
| DELETE | `/admin/delete/:id`       | Delete an admin           |

### 🔹 Candidate Routes

| Method | Endpoint                                      | Description                     |
|--------|-----------------------------------------------|---------------------------------|
| GET    | `/candidates/`                                | Get all candidates             |
| GET    | `/candidates/search`                          | Search candidates              |
| GET    | `/candidates/test`                            | Test route                     |
| GET    | `/candidates/allCandidates`                   | Get all candidates list        |
| GET    | `/candidates/candidateForActivity/candidates` | Get candidates for activity    |
| GET    | `/candidates/getAdminCandidate`               | Get candidates assigned to admin |
| POST   | `/candidates/add`                             | Add a new candidate            |
| PUT    | `/candidates/update/:id`                      | Update a candidate             |
| DELETE | `/candidates/delete/:id`                      | Delete a candidate             |

### 🔹 Job Routes

| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| GET    | `/jobs/get-job/:id` | Get job by ID     |
| GET    | `/jobs/all-jobs`    | Get all jobs      |
| GET    | `/jobs/`            | Get all jobs      |
| GET    | `/jobs/byId/:id`    | Get job from ID   |
| POST   | `/jobs/`            | Create a new job  |
| PUT    | `/jobs/update/:id`  | Update a job      |
| DELETE | `/jobs/delete/:id`  | Delete a job      |

### 🔹 Report Routes

| Method | Endpoint                        | Description                  |
|--------|---------------------------------|------------------------------|
| GET    | `/reports/time-to-hire`         | Get Time to Hire report      |
| GET    | `/reports/applicant-progress`   | Get Applicant Progress report |
| GET    | `/reports/open-positions`       | Get Open Positions report    |
| GET    | `/reports/hiring-efficiency`    | Get Hiring Efficiency report |

---

## 📦 Dependencies

| Package       | Version | Description                   |
|---------------|---------|-------------------------------|
| express       | latest  | Backend framework            |
| mongoose      | latest  | MongoDB ODM                  |
| jsonwebtoken  | latest  | JWT authentication           |
| bcryptjs      | latest  | Password hashing             |
| multer        | latest  | File uploads                 |
| dotenv        | latest  | Environment variable management |
| cors          | latest  | Cross-origin requests        |

---

## 🔐 Authentication

The admin login route (`/admin/admin-login`) returns a JWT token.

Use this token in the `Authorization` header (`Bearer <token>`) for protected routes.

---

## 🚨 Error Handling

| Status Code | Meaning                     |
|-------------|-----------------------------|
| 200 OK      | Successful request          |
| 400 Bad Request | Missing or invalid parameters |
| 500 Internal Server Error | Unexpected server issue |