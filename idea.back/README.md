# HR Work Distribution and Timesheet Management Web Application

## Overview
This is a web-based **HR Work Distribution and Timesheet Management Application** built with **React (frontend)** and **Node.js with MongoDB (backend)**. The system provides **candidate management, job tracking, reporting, and admin functionalities**.

## Features
- **Admin Authentication** (Login, Registration)
- **Candidate Management** (Add, Search, Edit, Delete, View Candidates)
- **Job Management** (Add, Edit, Delete, View Jobs)
- **Reports Section** (Time-to-Hire, Open Positions, Hiring Efficiency, Applicant Progress)
- **Profile Management**
- **Protected Routes for Authenticated Users**
- **Responsive Design** for better usability on all devices

---

## Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone <repository-url>
cd <project-folder>
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Start the Development Server
```sh
npm start
```

---

## Project Structure
```
📂 src
│── 📂 pages
│    ├── 📂 login
│    ├── 📂 register
│    ├── 📂 dashboard
│    ├── 📂 candidate
│    │    ├── 📂 addCandidate
│    │    ├── 📂 listCandidate
│    │    ├── 📂 deleteCandidate
│    │    ├── 📂 updateCandidate
│    │    ├── 📂 viewCandidate
│    ├── 📂 jobs
│    │    ├── 📂 addJob
│    │    ├── 📂 deleteJob
│    │    ├── 📂 updateJob
│    │    ├── 📂 viewJob
│    ├── 📂 report
│    │    ├── 📂 timeToHire
│    │    ├── 📂 openPosition
│    │    ├── 📂 hiringEfficency
│    │    ├── 📂 applicantProgress
│    ├── 📂 profile
│
│── 📂 utils
│    ├── protectedRoutes.js
│
│── App.js
│── index.js
│── package.json
```

---

## Frontend Routes
| Route | Component | Description |
|--------|-------------|------------------------|
| `/login` | Login | Admin login page |
| `/register` | Register | Admin registration page |
| `/` | AdminDashboard | Main dashboard (Protected) |
| `/candidate` | Candidate | Candidate section (Protected) |
| `/candidate/addCandidate` | AddCandidate | Add new candidate (Protected) |
| `/candidate/searchCandidate/:id` | ListCandidate | Search candidate by ID (Protected) |
| `/candidate/deleteCandidate` | DeleteCandidate | Delete candidate (Protected) |
| `/candidate/editCandidate/:candidateID` | EditCandidate | Edit candidate details (Protected) |
| `/candidate/viewCandidate` | ViewCandidate | View candidate details (Protected) |
| `/job` | Joblist | Job section (Protected) |
| `/job/addJob` | JobAdd | Add new job (Protected) |
| `/job/deleteJob/:jobId` | JobDelete | Delete job (Protected) |
| `/job/editJob/:jobId` | JobEdit | Edit job details (Protected) |
| `/job/viewJob/:id` | JobView | View job details (Protected) |
| `/profile` | Profile | Admin profile page (Protected) |
| `/reports` | Reports | Reports section (Protected) |
| `/reports/timeToHire` | TimeToHireReport | Time-to-Hire Report (Protected) |
| `/reports/openPosition` | OpenPosition | Open Position Report (Protected) |
| `/reports/hiringEfficiency` | HireEfficency | Hiring Efficiency Report (Protected) |
| `/reports/applicantProgress` | ApplicantProgress | Applicant Progress Report (Protected) |

---

## Technologies Used
### **Frontend:**
- React
- React Router
- Bootstrap


## Future Enhancements
- Add team management
- Implement notifications for hiring progress
- Improve UI design with Tailwind CSS
- Add dark mode for better accessibility
- Integrate third-party authentication


