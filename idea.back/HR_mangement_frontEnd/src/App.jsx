// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//           <i class="fa-solid fa-eye"></i>
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





















////-------------------------------------------------------------original-----------------------------------------------------------------------Original-------------------------




import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import AdminDashboard from "./pages/dashboard/dashboard";

import Candidate from "./pages/candidate/candidate/candidate";
import AddCandidate from "./pages/candidate/addCandidate/addCandi";
import ListCandidate from "./pages/candidate/listCandidate/listCandi";
import DeleteCandidate from "./pages/candidate/deleteCandidate/deleteCandi";
import EditCandidate from "./pages/candidate/updateCandidate/candiUpdate";
import ViewCandidate from "./pages/candidate/viewCandidate/viewCandi";

import Joblist from "./pages/jobs/job";
import JobDelete from "./pages/jobs/deleteJob/deleteJob";
import JobView from "./pages/jobs/viewJob/viewJob";
import JobEdit from "./pages/jobs/updateJob/updateJob";
import JobAdd from "./pages/jobs/addJob/addJob";

import Reports from "./pages/report/report";
import TimeToHireReport from "./pages/report/timeToHire/timeToHire";
import OpenPosition from "./pages/report/openPosition/openPosition";
import HireEfficency from "./pages/report/hiringEfficency/hiringEfficency";
import ApplicantProgress from "./pages/report/applicantProgress/applicantProgress";
import Profile from "./pages/profile/profile";
import ProtectedRoute from './utils/pritectedRoutes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = '/Login' element = {<Login/>} exact />
        <Route path = '/register' element = {<Register/>} />
        <Route path = '/' element = {<ProtectedRoute><AdminDashboard/></ProtectedRoute>} />
        <Route path = '/candidate' element = {<ProtectedRoute><Candidate/></ProtectedRoute>} />
        <Route path = '/candidate/addCandidate' element = {<ProtectedRoute><AddCandidate/></ProtectedRoute>} />
        <Route path = '/candidate/searchCandidate/:id' element = {<ProtectedRoute><ListCandidate/></ProtectedRoute>} />
        <Route path = '/candidate/deleteCandidate/' element = {<ProtectedRoute><DeleteCandidate/></ProtectedRoute>} />
        <Route path = '/candidate/editCandidate/:candidateID' element = {<ProtectedRoute><EditCandidate/></ProtectedRoute>} />
        <Route path = '/candidate/viewCandidate/' element = {<ProtectedRoute><ViewCandidate/></ProtectedRoute>} />
      </Routes>
      <Routes>
        <Route path = '/job' element = {<ProtectedRoute><Joblist/></ProtectedRoute>} />
        <Route path = "/job/deleteJob/:jobId" element = {<ProtectedRoute><JobDelete/></ProtectedRoute>} />
        <Route path = "/job/viewJob/:id" element = {<ProtectedRoute><JobView/></ProtectedRoute>} />
        <Route path = "/job/editJob/:jobId" element = {<ProtectedRoute><JobEdit/></ProtectedRoute>} />
        <Route path = "/job/addJob" element = {<ProtectedRoute><JobAdd/></ProtectedRoute>} />
      </Routes>
      <Routes>
        <Route path = "/profile" element = {<ProtectedRoute><Profile/></ProtectedRoute>} />
      </Routes>
      <Routes>
        <Route path = "/reports" element = {<ProtectedRoute><Reports/></ProtectedRoute>} />
        <Route path = "/reports/timeToHire" element = {<ProtectedRoute><TimeToHireReport/></ProtectedRoute>} />
        <Route path = "/reports/openPosition" element = {<ProtectedRoute><OpenPosition/></ProtectedRoute>} />
        <Route path = "/reports/hiringEfficiency" element = {<ProtectedRoute><HireEfficency/></ProtectedRoute>} />
        <Route path = "/reports/applicantProgress" element = {<ProtectedRoute><ApplicantProgress/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;









//----------------------------------------------------------------------original-----------------------------------------------------------------------













// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './utils/pritectedRoutes';


// import Login from "./pages/login/login";
// import Register from "./pages/register/register";
// import AdminDashboard from "./pages/dashboard/dashboard";

// import Candidate from "./pages/candidate/candidate/candidate";
// import AddCandidate from "./pages/candidate/addCandidate/addCandi";
// import ListCandidate from "./pages/candidate/listCandidate/listCandi";
// import DeleteCandidate from "./pages/candidate/deleteCandidate/deleteCandi";
// import EditCandidate from "./pages/candidate/updateCandidate/candiUpdate";
// import ViewCandidate from "./pages/candidate/viewCandidate/viewCandi";

// import Joblist from "./pages/jobs/job";
// import JobDelete from "./pages/jobs/deleteJob/deleteJob";
// import JobView from "./pages/jobs/viewJob/viewJob";
// import JobEdit from "./pages/jobs/updateJob/updateJob";
// import JobAdd from "./pages/jobs/addJob/addJob";

// import Reports from "./pages/report/report";
// import TimeToHireReport from "./pages/report/timeToHire/timeToHire";
// import OpenPosition from "./pages/report/openPosition/openPosition";
// import HireEfficency from "./pages/report/hiringEfficency/hiringEfficency";
// import ApplicantProgress from "./pages/report/applicantProgress/applicantProgress";

// import ProtectedRoutes from './utils/pritectedRoutes';
// import Profile from "./pages/profile/profile";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route element={<ProtectedRoutes />}>
//           <Route path="/" element={<AdminDashboard />} />

//           {/* Candidate Management */}
//           <Route path="/candidate" element={<Candidate />} />
//           <Route path="/candidate/addCandidate" element={<AddCandidate />} />
//           <Route path="/candidate/searchCandidate/:id" element={<ListCandidate />} />
//           <Route path="/candidate/deleteCandidate" element={<DeleteCandidate />} />
//           <Route path="/candidate/editCandidate/:candidateID" element={<EditCandidate />} />
//           <Route path="/candidate/viewCandidate" element={<ViewCandidate />} />

//           {/* Job Management */}
//           <Route path="/job" element={<Joblist />} />
//           <Route path="/job/deleteJob/:jobId" element={<JobDelete />} />
//           <Route path="/job/viewJob/:id" element={<JobView />} />
//           <Route path="/job/editJob/:jobId" element={<JobEdit />} />
//           <Route path="/job/addJob" element={<JobAdd />} />

//           {/* Profile */}
//           <Route path="/profile" element={<Profile />} />

//           {/* Reports */}
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/reports/timeToHire" element={<TimeToHireReport />} />
//           <Route path="/reports/openPosition" element={<OpenPosition />} />
//           <Route path="/reports/hiringEfficiency" element={<HireEfficency />} />
//           <Route path="/reports/applicantProgress" element={<ApplicantProgress />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;






































// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './utils/pritectedRoutes'

// import Login from "./pages/login/login";
// import Register from "./pages/register/register";
// import AdminDashboard from "./pages/dashboard/dashboard";

// import Candidate from "./pages/candidate/candidate/candidate";
// import AddCandidate from "./pages/candidate/addCandidate/addCandi";
// import ListCandidate from "./pages/candidate/listCandidate/listCandi";
// import DeleteCandidate from "./pages/candidate/deleteCandidate/deleteCandi";
// import EditCandidate from "./pages/candidate/updateCandidate/candiUpdate";
// import ViewCandidate from "./pages/candidate/viewCandidate/viewCandi";

// import Joblist from "./pages/jobs/job";
// import JobDelete from "./pages/jobs/deleteJob/deleteJob";
// import JobView from "./pages/jobs/viewJob/viewJob";
// import JobEdit from "./pages/jobs/updateJob/updateJob";
// import JobAdd from "./pages/jobs/addJob/addJob";

// import Reports from "./pages/report/report";
// import TimeToHireReport from "./pages/report/timeToHire/timeToHire";
// import OpenPosition from "./pages/report/openPosition/openPosition";
// import HireEfficency from "./pages/report/hiringEfficency/hiringEfficency";
// import ApplicantProgress from "./pages/report/applicantProgress/applicantProgress";

// import Profile from "./pages/profile/profile";

// const App = () => {
//   const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route
//           element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
//         >
//           <Route path="/" element={<AdminDashboard />} />

//           {/* Candidate Management */}
//           <Route path="/candidate" element={<Candidate />} />
//           <Route path="/candidate/addCandidate" element={<AddCandidate />} />
//           <Route path="/candidate/searchCandidate/:id" element={<ListCandidate />} />
//           <Route path="/candidate/deleteCandidate" element={<DeleteCandidate />} />
//           <Route path="/candidate/editCandidate/:candidateID" element={<EditCandidate />} />
//           <Route path="/candidate/viewCandidate" element={<ViewCandidate />} />

//           {/* Job Management */}
//           <Route path="/job" element={<Joblist />} />
//           <Route path="/job/deleteJob/:jobId" element={<JobDelete />} />
//           <Route path="/job/viewJob/:id" element={<JobView />} />
//           <Route path="/job/editJob/:jobId" element={<JobEdit />} />
//           <Route path="/job/addJob" element={<JobAdd />} />

//           {/* Profile */}
//           <Route path="/profile" element={<Profile />} />

//           {/* Reports */}
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/reports/timeToHire" element={<TimeToHireReport />} />
//           <Route path="/reports/openPosition" element={<OpenPosition />} />
//           <Route path="/reports/hiringEfficiency" element={<HireEfficency />} />
//           <Route path="/reports/applicantProgress" element={<ApplicantProgress />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;





// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './utils/pritectedRoutes'
// import { isTokenExpired } from "./utils/tokenValid";

// import Login from "./pages/login/login";
// import Register from "./pages/register/register";
// import AdminDashboard from "./pages/dashboard/dashboard";

// import Candidate from "./pages/candidate/candidate/candidate";
// import AddCandidate from "./pages/candidate/addCandidate/addCandi";
// import ListCandidate from "./pages/candidate/listCandidate/listCandi";
// import DeleteCandidate from "./pages/candidate/deleteCandidate/deleteCandi";
// import EditCandidate from "./pages/candidate/updateCandidate/candiUpdate";
// import ViewCandidate from "./pages/candidate/viewCandidate/viewCandi";

// import Joblist from "./pages/jobs/job";
// import JobDelete from "./pages/jobs/deleteJob/deleteJob";
// import JobView from "./pages/jobs/viewJob/viewJob";
// import JobEdit from "./pages/jobs/updateJob/updateJob";
// import JobAdd from "./pages/jobs/addJob/addJob";

// import Reports from "./pages/report/report";
// import TimeToHireReport from "./pages/report/timeToHire/timeToHire";
// import OpenPosition from "./pages/report/openPosition/openPosition";
// import HireEfficency from "./pages/report/hiringEfficency/hiringEfficency";
// import ApplicantProgress from "./pages/report/applicantProgress/applicantProgress";

// import Profile from "./pages/profile/profile";

// const App = () => {
//   const token = !!localStorage.getItem("token");
//   const isAuthenticated = token && !isTokenExpired(token)

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route
//           element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
//         >
//           <Route path="/" element={<AdminDashboard />} />

//           {/* Candidate Management */}
//           <Route path="/candidate" element={<Candidate />} />
//           <Route path="/candidate/addCandidate" element={<AddCandidate />} />
//           <Route path="/candidate/searchCandidate/:id" element={<ListCandidate />} />
//           <Route path="/candidate/deleteCandidate" element={<DeleteCandidate />} />
//           <Route path="/candidate/editCandidate/:candidateID" element={<EditCandidate />} />
//           <Route path="/candidate/viewCandidate" element={<ViewCandidate />} />

//           {/* Job Management */}
//           <Route path="/job" element={<Joblist />} />
//           <Route path="/job/deleteJob/:jobId" element={<JobDelete />} />
//           <Route path="/job/viewJob/:id" element={<JobView />} />
//           <Route path="/job/editJob/:jobId" element={<JobEdit />} />
//           <Route path="/job/addJob" element={<JobAdd />} />

//           {/* Profile */}
//           <Route path="/profile" element={<Profile />} />

//           {/* Reports */}
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/reports/timeToHire" element={<TimeToHireReport />} />
//           <Route path="/reports/openPosition" element={<OpenPosition />} />
//           <Route path="/reports/hiringEfficiency" element={<HireEfficency />} />
//           <Route path="/reports/applicantProgress" element={<ApplicantProgress />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;



















// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProtectedRoute from "./utils/pritectedRoutes"; // Assuming you have a ProtectedRoute component

// // Pages
// import Login from "./pages/login/login";
// import Register from "./pages/register/register";
// import AdminDashboard from "./pages/dashboard/dashboard";

// // Candidate Management
// import Candidate from "./pages/candidate/candidate/candidate";
// import AddCandidate from "./pages/candidate/addCandidate/addCandi";
// import ListCandidate from "./pages/candidate/listCandidate/listCandi";
// import DeleteCandidate from "./pages/candidate/deleteCandidate/deleteCandi";
// import EditCandidate from "./pages/candidate/updateCandidate/candiUpdate";
// import ViewCandidate from "./pages/candidate/viewCandidate/viewCandi";

// // Job Management
// import Joblist from "./pages/jobs/job";
// import JobDelete from "./pages/jobs/deleteJob/deleteJob";
// import JobView from "./pages/jobs/viewJob/viewJob";
// import JobEdit from "./pages/jobs/updateJob/updateJob";
// import JobAdd from "./pages/jobs/addJob/addJob";

// // Reports
// import Reports from "./pages/report/report";
// import TimeToHireReport from "./pages/report/timeToHire/timeToHire";
// import OpenPosition from "./pages/report/openPosition/openPosition";
// import HireEfficiency from "./pages/report/hiringEfficency/hiringEfficency";
// import ApplicantProgress from "./pages/report/applicantProgress/applicantProgress";

// // Profile
// import Profile from "./pages/profile/profile";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/" element={<AdminDashboard />} />
//           <Route path="/profile" element={<Profile />} />

//           {/* Candidate Management */}
//           <Route path="/candidate" element={<Candidate />} />
//           <Route path="/candidate/addCandidate" element={<AddCandidate />} />
//           <Route path="/candidate/searchCandidate/:id" element={<ListCandidate />} />
//           <Route path="/candidate/deleteCandidate" element={<DeleteCandidate />} />
//           <Route path="/candidate/editCandidate/:candidateID" element={<EditCandidate />} />
//           <Route path="/candidate/viewCandidate" element={<ViewCandidate />} />

//           {/* Job Management */}
//           <Route path="/job" element={<Joblist />} />
//           <Route path="/job/deleteJob/:jobId" element={<JobDelete />} />
//           <Route path="/job/viewJob/:id" element={<JobView />} />
//           <Route path="/job/editJob/:jobId" element={<JobEdit />} />
//           <Route path="/job/addJob" element={<JobAdd />} />

//           {/* Reports */}
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/reports/timeToHire" element={<TimeToHireReport />} />
//           <Route path="/reports/openPosition" element={<OpenPosition />} />
//           <Route path="/reports/hiringEfficiency" element={<HireEfficiency />} />
//           <Route path="/reports/applicantProgress" element={<ApplicantProgress />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
