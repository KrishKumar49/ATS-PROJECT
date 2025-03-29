// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Dashboard.css';
// import candidate from '../candidate/candidate/candidate';

// const AdminDashboard = () => {
//     const [stats, setStats] = useState({
//         totalCandidates: 0,
//         totalJobs: 0,
//         inProgress: 0,
//         hired: 0
//     });

//     const [recentActivities, setRecentActivities] = useState([]);

//     useEffect(() => {
//         const fetchCandidates = async () => {
//             try {
//                 const response = await fetch('http://localhost:7000/candidates/allCandidates');
//                 if (!response.ok) throw new Error('Failed to fetch candidates');
//                 const data = await response.json();
//                 const candidates = data.candidates;
//                 const totalCandidates = candidates.length;
//                 const hired = candidates.filter(c => c.status === 'Hired').length;
//                 const inProgress = candidates.filter(c => c.status === 'Applied' || c.status === 'Interviewed').length;

//                 setStats(prevStats => ({
//                     ...prevStats,
//                     totalCandidates,
//                     hired,
//                     inProgress
//                 }));

//                 const activities = candidates.slice(0, 5).map(c => `${c.name} applied for job ${c.appliedFor}`);
//                 setRecentActivities(activities);
//             }
//             catch(error) {
//                 console.log('Error fetching candidates: ', error);
//             }
//         };

//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch('http://localhost:7000/jobs/all-jobs');
//                 if (!response.ok) throw new Error("Failed th fetch job");
//                 const data = await response.json();
//                 const totalJobs = data.jobs.length;

//                 setStats(prevStats => ({
//                     ...prevStats,
//                     totalJobs
//                 }));
//             }
//             catch (error) {
//                 console.log('Error fetching job: ', error);
//             }
//         };

//         fetchCandidates();
//         fetchJobs();
//     }, []);

//     return (
//         <div className="dashboard">
//             <header>
//                 <h1>Admin Dashboard</h1>
//                 <button className='logout-button'>Logout</button>
//             </header>
//             <div className="dashboard-container">
//                 <nav className="sidebar">
//                     <ul>
//                         <li>
//                             <Link
//                                 to='/candidate'
//                                 style={{
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     alignItems: 'center',
//                                     textDecoration: 'none',
//                                     color: 'black',
//                                 }} 
//                             >
//                                 <i className="fa-solid fa-people-group"></i>
//                                 <span>Candidates</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 to="/job"
//                                 style={{
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     alignItems: 'center',
//                                     textDecoration: 'none',
//                                     color: 'black',
//                                 }}
//                             >
//                                 <i className="fa-solid fa-briefcase"></i>
//                                 <span>Jobs</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 to="/reports"
//                                 style={{
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     alignItems: 'center',
//                                     textDecoration: 'none',
//                                     color: 'black',
//                                 }}
//                             >
//                                 <i className="fa-solid fa-chart-simple"></i>
//                                 <span>Reports</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 to="/profile"
//                                 style={{
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     alignItems: 'center',
//                                     textDecoration: 'none',
//                                     color: 'black',
//                                 }}
//                             >
//                                 <i className="fa-solid fa-user" style={{ fontSize: '24px' }}></i>
//                                 <span>Profile</span>
//                             </Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <main className="main-content">
//                     <div className="stats">
//                         <div className="stat-card">Total Candidates: {stats.totalCandidates}</div>
//                         <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//                         <div className="stat-card">Applications in Progress: {stats.inProgress}</div>
//                         <div className="stat-card">Hired Candidates: {stats.hired}</div>
//                     </div>
//                     <section className="recent-activities">
//                         <h2>Recent Activities</h2>
//                         <ul>
//                             {recentActivities.length > 0
//                                 ? recentActivities.map((activity, index) => (
//                                       <li key={index}>{activity}</li>
//                                   ))
//                                 : 'No recent activities'}
//                         </ul>
//                     </section>
//                     <section className="quick-links">
//                         <h2>Quick Links</h2>
//                         <Link to="/candidate/addCandidate" className="quick-link">
//                             Add new Candidate
//                         </Link>
//                         <Link to="/job/addJob" className="quick-link">
//                             Post New Job
//                         </Link>
//                     </section>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;







// second banaye isme activities sahi se aarahe he --------------------------------------------------



// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Dashboard.css';

// const AdminDashboard = () => {
//     const [stats, setStats] = useState({
//         totalCandidates: 0,
//         totalJobs: 0,
//         inProgress: 0,
//         hired: 0,
//     });

//     const [recentActivities, setRecentActivities] = useState([]);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         console.log("Clearing all local storage...");
//         localStorage.clear();
//         navigate('/login');
//     }

//     useEffect(() => {
//         const fetchCandidates = async () => {
//             try {
//                 const response = await fetch('http://localhost:7000/candidates/allCandidates');
//                 if (!response.ok) throw new Error('Failed to fetch candidates');
//                 const data = await response.json();
//                 const candidates = data.candidates;
//                 const totalCandidates = candidates.length;
//                 const hired = candidates.filter((c) => c.status === 'Hired').length;
//                 const inProgress = candidates.filter((c) => c.status === 'Applied' || c.status === 'Interviewed').length;

//                 setStats((prevStats) => ({
//                     ...prevStats,
//                     totalCandidates,
//                     hired,
//                     inProgress,
//                 }));

//                 const jobResponse = await fetch('http://localhost:7000/jobs/all-jobs');
//                 if (!jobResponse.ok) throw new Error('Failed to fetch jobs');
//                 const jobData = await jobResponse.json();
//                 const jobMap = jobData.jobs.reduce((acc, job) => {
//                     acc[job._id] = job.title;
//                     return acc;
//                 }, {});

//                 const recentCandidateActivities = candidates
//                     .slice(-5)
//                     .reverse()
//                     .map((c) => ({
//                         type: 'candidate',
//                         message: `${c.name} applied for job ${jobMap[c.appliedFor] || 'Unknown'}`,
//                     }));

//                 setRecentActivities((prevActivities) => [...prevActivities, ...recentCandidateActivities]);
//             } catch (error) {
//                 console.log('Error fetching candidates:', error);
//             }
//         };

//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch('http://localhost:7000/jobs/all-jobs');
//                 if (!response.ok) throw new Error('Failed to fetch jobs');
//                 const data = await response.json();
//                 const totalJobs = data.jobs.length;

//                 setStats((prevStats) => ({
//                     ...prevStats,
//                     totalJobs,
//                 }));

//                 const recentJobActivities = data.jobs
//                     .slice(-5)
//                     .reverse()
//                     .map((job) => ({
//                         type: 'job',
//                         message: `New job posted: ${job.title}`,
//                     }));

//                 setRecentActivities((prevActivities) => [...prevActivities, ...recentJobActivities]);
//             } catch (error) {
//                 console.log('Error fetching jobs:', error);
//             }
//         };

//         fetchCandidates();
//         fetchJobs();
//     }, []);

//     return (
//         <div className="dashboard">
//             <header>
//                 <h1>Admin Dashboard</h1>
//                 <button className="logout-button" onClick={handleLogout}>Logout</button>
//             </header>
//             <div className="dashboard-container">
//                 <nav className="sidebar">
//                     <ul>
//                         <li>
//                             <Link to="/candidate" className="nav-link">
//                                 <i className="fa-solid fa-people-group"></i>
//                                 <span>Candidates</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/job" className="nav-link">
//                                 <i className="fa-solid fa-briefcase"></i>
//                                 <span>Jobs</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/reports" className="nav-link">
//                                 <i className="fa-solid fa-chart-simple"></i>
//                                 <span>Reports</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/profile" className="nav-link">
//                                 <i className="fa-solid fa-user"></i>
//                                 <span>Profile</span>
//                             </Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <main className="main-content">
//                     <div className="stats">
//                         <div className="stat-card">Total Candidates: {stats.totalCandidates}</div>
//                         <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//                         <div className="stat-card">Applications in Progress: {stats.inProgress}</div>
//                         <div className="stat-card">Hired Candidates: {stats.hired}</div>
//                     </div>
//                     <section className="recent-activities">
//                         <h2>Recent Activities</h2>
//                         <ul>
//                             {recentActivities.length > 0
//                                 ? recentActivities.map((activity, index) => (
//                                       <li key={index}>{activity.message}</li>
//                                   ))
//                                 : 'No recent activities'}
//                         </ul>
//                     </section>
//                     <section className="quick-links">
//                         <h2>Quick Links</h2>
//                         <Link to="/candidate/addCandidate" className="quick-link">
//                             Add new Candidate
//                         </Link>
//                         <Link to="/job/addJob" className="quick-link">
//                             Post New Job
//                         </Link>
//                     </section>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;








// first try to token ---------------------------------------------------------------------------------------





// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Dashboard.css';

// const AdminDashboard = () => {
//     const [stats, setStats] = useState({
//         totalCandidates: 0,
//         totalJobs: 0,
//         inProgress: 0,
//         hired: 0,
//     });

//     const [recentActivities, setRecentActivities] = useState([]);
//     const navigate = useNavigate();
//     const admin = localStorage.getItem("email");

//     const handleLogout = () => {
//         console.log("Clearing all local storage...");
//         localStorage.clear();
//         navigate('/login');
//     }

//     useEffect(() => {
//         if (!admin) {
//             navigate('/register');
//             return;
//         }
//     }, [admin, navigate]);

//     useEffect(() => {
//         if (!admin) {
//             console.log("Admin not found. Redirecting...");
//             navigate('/register');
//         }
//     }, [admin, navigate]);

//     useEffect(() => {
//         const fetchCandidates = async () => {
//             try {
//                 const response = await fetch('http://localhost:7000/candidates/allCandidates', {
//                     method: 'GET',
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                 });
//                 if (!response.ok) throw new Error('Failed to fetch candidates');
//                 const data = await response.json();

//                 const totalCandidates = data.totalCandidates;
//                 const candidates = data.candidates;
//                 const hired = candidates.filter((c) => c.status === 'Hired').length;
//                 const inProgress = candidates.filter((c) => c.status === 'Applied' || c.status === 'Interviewed').length;

//                 setStats((prevStats) => ({
//                     ...prevStats,
//                     totalCandidates,
//                     hired,
//                     inProgress,
//                 }));
//             } catch (error) {
//                 console.log('Error fetching candidates:', error);
//             }
//         };

//         if (admin) fetchCandidates();
//     }, [admin]);



//     return (
//         <div className="dashboard">
//             <header>
//                 <h1>Admin Dashboard</h1>
//                 <button className="logout-button" onClick={handleLogout}>Logout</button>
//             </header>
//             <div className="dashboard-container">
//                 <nav className="sidebar">
//                     <ul>
//                         <li>
//                             <Link to="/candidate" className="nav-link">
//                                 <i className="fa-solid fa-people-group"></i>
//                                 <span>Candidates</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/job" className="nav-link">
//                                 <i className="fa-solid fa-briefcase"></i>
//                                 <span>Jobs</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/reports" className="nav-link">
//                                 <i className="fa-solid fa-chart-simple"></i>
//                                 <span>Reports</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/profile" className="nav-link">
//                                 <i className="fa-solid fa-user"></i>
//                                 <span>Profile</span>
//                             </Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <main className="main-content">
//                     <div className="stats">
//                         <div className="stat-card">Total Candidates: {stats.totalCandidates}</div>
//                         <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//                         <div className="stat-card">Applications in Progress: {stats.inProgress}</div>
//                         <div className="stat-card">Hired Candidates: {stats.hired}</div>
//                     </div>
//                     <section className="recent-activities">
//                         <h2>Recent Activities</h2>
//                         <ul>
//                             {recentActivities.length > 0
//                                 ? recentActivities.map((activity, index) => (
//                                       <li key={index}>{activity.message}</li>
//                                   ))
//                                 : 'No recent activities'}
//                         </ul>
//                     </section>
//                     <section className="quick-links">
//                         <h2>Quick Links</h2>
//                         <Link to="/candidate/addCandidate" className="quick-link">
//                             Add new Candidate
//                         </Link>
//                         <Link to="/job/addJob" className="quick-link">
//                             Post New Job
//                         </Link>
//                     </section>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;























// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalCandidates: 0,
//     totalJobs: 0,
//     inProgress: 0,
//     hired: 0,
//   });

//   const [recentActivities, setRecentActivities] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Clearing all local storage...");
//     localStorage.clear();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:7000/candidates/allCandidates"
//         );
//         if (!response.ok) throw new Error("Failed to fetch candidates");
//         const data = await response.json();
//         const candidates = data.candidates || [];
//         const totalCandidates = data.totalCandidates;

//         const hired = candidates.filter((c) => c.status === "Hired").length;
//         const inProgress = candidates.filter(
//           (c) => c.status === "Applied" || c.status === "Interviewed"
//         ).length;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalCandidates,
//           hired,
//           inProgress,
//         }));

//         const jobResponse = await fetch("http://localhost:7000/jobs/all-jobs");
//         if (!jobResponse.ok) throw new Error("Failed to fetch jobs");
//         const jobData = await jobResponse.json();
//         const jobMap = jobData.jobs.reduce((acc, job) => {
//           acc[job._id] = job.title;
//           return acc;
//         }, {});

//         const recentCandidateActivities = candidates
//           .slice(-5)
//           .reverse()
//           .map((c) => ({
//             type: "candidate",
//             message: `${c.name} applied for job ${
//               jobMap[c.appliedFor] || "Unknown"
//             }`,
//           }));

//         setRecentActivities((prevActivities) => [
//           ...prevActivities,
//           ...recentCandidateActivities,
//         ]);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };

//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("http://localhost:7000/jobs/all-jobs");
//         if (!response.ok) throw new Error("Failed to fetch jobs");
//         const data = await response.json();
//         const totalJobs = data.jobs?.length || 0;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalJobs,
//         }));

//         const recentJobActivities = data.jobs
//           .slice(-5)
//           .reverse()
//           .map((job) => ({
//             type: "job",
//             message: `New job posted: ${job.title}`,
//           }));

//         setRecentActivities((prevActivities) => [
//           ...prevActivities,
//           ...recentJobActivities,
//         ]);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };

//     fetchCandidates();
//     fetchJobs();
//   }, []);

//   return (
//     <div className="dashboard">
//       <header>
//         <h1>Admin Dashboard</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>
//       <div className="dashboard-container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/candidate" className="nav-link">
//                 <i className="fa-solid fa-people-group"></i>
//                 <span>Candidates</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/job" className="nav-link">
//                 <i className="fa-solid fa-briefcase"></i>
//                 <span>Jobs</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="nav-link">
//                 <i className="fa-solid fa-chart-simple"></i>
//                 <span>Reports</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/profile" className="nav-link">
//                 <i className="fa-solid fa-user"></i>
//                 <span>Profile</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <main className="main-content">
//           <div className="stats">
//             <div className="stat-card">
//               Total Candidates: {stats.totalCandidates}
//             </div>
//             <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//             <div className="stat-card">
//               Applications in Progress: {stats.inProgress}
//             </div>
//             <div className="stat-card">Hired Candidates: {stats.hired}</div>
//           </div>
//           <section className="recent-activities">
//             <h2>Recent Activities</h2>
//             <ul>
//               {recentActivities.length > 0 ? (
//                 recentActivities.map((activity, index) => (
//                   <li key={index}>{activity.message}</li>
//                 ))
//               ) : (
//                 <li>No recent activities</li>
//               )}
//             </ul>
//           </section>
//           <section className="quick-links">
//             <h2>Quick Links</h2>
//             <Link to="/candidate/addCandidate" className="quick-link">
//               Add new Candidate
//             </Link>
//             <Link to="/job/addJob" className="quick-link">
//               Post New Job
//             </Link>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;













// repetation ko remove kiya ------------------------------------------------------------------------









// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalCandidates: 0,
//     totalJobs: 0,
//     inProgress: 0,
//     hired: 0,
//   });

//   const [recentActivities, setRecentActivities] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Clearing all local storage...");
//     localStorage.clear();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:7000/candidates/allCandidates"
//         );
//         if (!response.ok) throw new Error("Failed to fetch candidates");
//         const data = await response.json();
//         const candidates = data.candidates || [];
//         const totalCandidates = data.totalCandidates;

//         const hired = candidates.filter((c) => c.status === "Hired").length;
//         const inProgress = candidates.filter(
//           (c) => c.status === "Applied" || c.status === "Interviewed"
//         ).length;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalCandidates,
//           hired,
//           inProgress,
//         }));

//         const jobResponse = await fetch("http://localhost:7000/jobs/all-jobs");
//         if (!jobResponse.ok) throw new Error("Failed to fetch jobs");
//         const jobData = await jobResponse.json();
//         const jobMap = jobData.jobs.reduce((acc, job) => {
//           acc[job._id] = job.title;
//           return acc;
//         }, {});

//         // Reset recent activities before setting the new data
//         const recentCandidateActivities = candidates
//           .slice(-5)
//           .reverse()
//           .map((c) => ({
//             type: "candidate",
//             message: `${c.name} applied for job ${
//               jobMap[c.appliedFor] || "Unknown"
//             }`,
//           }));

//         setRecentActivities(recentCandidateActivities);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };

//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("http://localhost:7000/jobs/all-jobs");
//         if (!response.ok) throw new Error("Failed to fetch jobs");
//         const data = await response.json();
//         const totalJobs = data.jobs?.length || 0;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalJobs,
//         }));

//         // Reset recent activities before setting the new data
//         const recentJobActivities = data.jobs
//           .slice(-5)
//           .reverse()
//           .map((job) => ({
//             type: "job",
//             message: `New job posted: ${job.title}`,
//           }));

//         setRecentActivities((prevActivities) => [
//           ...recentJobActivities,
//         ]);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };

//     fetchCandidates();
//     fetchJobs();
//   }, []);

//   return (
//     <div className="dashboard">
//       <header>
//         <h1>Admin Dashboard</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>
//       <div className="dashboard-container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/candidate" className="nav-link">
//                 <i className="fa-solid fa-people-group"></i>
//                 <span>Candidates</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/job" className="nav-link">
//                 <i className="fa-solid fa-briefcase"></i>
//                 <span>Jobs</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="nav-link">
//                 <i className="fa-solid fa-chart-simple"></i>
//                 <span>Reports</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/profile" className="nav-link">
//                 <i className="fa-solid fa-user"></i>
//                 <span>Profile</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <main className="main-content">
//           <div className="stats">
//             <div className="stat-card">
//               Total Candidates: {stats.totalCandidates}
//             </div>
//             <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//             <div className="stat-card">
//               Applications in Progress: {stats.inProgress}
//             </div>
//             <div className="stat-card">Hired Candidates: {stats.hired}</div>
//           </div>
//           <section className="recent-activities">
//             <h2>Recent Activities</h2>
//             <ul>
//               {recentActivities.length > 0 ? (
//                 recentActivities.map((activity, index) => (
//                   <li key={index}>{activity.message}</li>
//                 ))
//               ) : (
//                 <li>No recent activities</li>
//               )}
//             </ul>
//           </section>
//           <section className="quick-links">
//             <h2>Quick Links</h2>
//             <Link to="/candidate/addCandidate" className="quick-link">
//               Add new Candidate
//             </Link>
//             <Link to="/job/addJob" className="quick-link">
//               Post New Job
//             </Link>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
























// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalCandidates: 0,
//     totalJobs: 0,
//     inProgress: 0,
//     hired: 0,
//   });

//   const [recentActivities, setRecentActivities] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Clearing all local storage...");
//     localStorage.clear();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const [candidateResponse, jobResponse] = await Promise.all([
//           fetch("http://localhost:7000/candidates/allCandidates"),
//           fetch("http://localhost:7000/jobs/all-jobs"),
//         ]);

//         if (!candidateResponse.ok) throw new Error("Failed to fetch candidates");
//         if (!jobResponse.ok) throw new Error("Failed to fetch jobs");

//         const candidateData = await candidateResponse.json();
//         const jobData = await jobResponse.json();

//         // Update stats
//         const candidates = candidateData.candidates || [];
//         const totalCandidates = candidateData.totalCandidates;
//         const hired = candidates.filter((c) => c.status === "Hired").length;
//         const inProgress = candidates.filter(
//           (c) => c.status === "Applied" || c.status === "Interviewed"
//         ).length;

//         const totalJobs = jobData.jobs?.length || 0;

//         setStats({
//           totalCandidates,
//           totalJobs,
//           hired,
//           inProgress,
//         });

//         // Combine recent activities
//         const jobMap = jobData.jobs.reduce((acc, job) => {
//           acc[job._id] = job.title;
//           return acc;
//         }, {});

//         const recentCandidateActivities = candidates
//           .slice(-5)
//           .reverse()
//           .map((c) => ({
//             type: "candidate",
//             message: `${c.name} applied for job ${
//               jobMap[c.appliedFor] || "Unknown"
//             }`,
//           }));

//         const recentJobActivities = jobData.jobs
//           .slice(-5)
//           .reverse()
//           .map((job) => ({
//             type: "job",
//             message: `New job posted: ${job.title}`,
//           }));

//         setRecentActivities([
//           ...recentCandidateActivities,
//           ...recentJobActivities,
//         ]);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="dashboard">
//       <header>
//         <h1>Admin Dashboard</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>
//       <div className="dashboard-container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/candidate" className="nav-link">
//                 <i className="fa-solid fa-people-group"></i>
//                 <span>Candidates</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/job" className="nav-link">
//                 <i className="fa-solid fa-briefcase"></i>
//                 <span>Jobs</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="nav-link">
//                 <i className="fa-solid fa-chart-simple"></i>
//                 <span>Reports</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/profile" className="nav-link">
//                 <i className="fa-solid fa-user"></i>
//                 <span>Profile</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <main className="main-content">
//           <div className="stats">
//             <div className="stat-card">
//               Total Candidates: {stats.totalCandidates}
//             </div>
//             <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//             <div className="stat-card">
//               Applications in Progress: {stats.inProgress}
//             </div>
//             <div className="stat-card">Hired Candidates: {stats.hired}</div>
//           </div>
//           <section className="recent-activities">
//             <h2>Recent Activities</h2>
//             <ul>
//               {recentActivities.length > 0 ? (
//                 recentActivities.map((activity, index) => (
//                   <li key={index}>{activity.message}</li>
//                 ))
//               ) : (
//                 <li>No recent activities</li>
//               )}
//             </ul>
//           </section>
//           <section className="quick-links">
//             <h2>Quick Links</h2>
//             <Link to="/candidate/addCandidate" className="quick-link">
//               Add new Candidate
//             </Link>
//             <Link to="/job/addJob" className="quick-link">
//               Post New Job
//             </Link>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;















//------------------------------------------original-------------------------------------------------------------------







// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalCandidates: 0,
//     totalJobs: 0,
//     inProgress: 0,
//     hired: 0,
//   });

//   const [recentActivities, setRecentActivities] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Clearing all local storage...");
//     localStorage.clear();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const email = localStorage.getItem("email");
//         console.log(email);


//         const [candidateResponse, jobResponse] = await Promise.all([
//           fetch("http://localhost:7000/candidates/allCandidates", {
//             email
//           }),
//           fetch("http://localhost:7000/jobs/all-jobs"),
//         ]);

//         if (!candidateResponse.ok) throw new Error("Failed to fetch candidates");
//         if (!jobResponse.ok) throw new Error("Failed to fetch jobs");

//         const candidateData = await candidateResponse.json();
//         const jobData = await jobResponse.json();

//         // Update stats
//         const candidates = candidateData.candidates || [];
//         const totalCandidates = candidateData.totalCandidates;
//         const hired = candidates.filter((c) => c.status === "Hired").length;
//         const inProgress = candidates.filter(
//           (c) => c.status === "Applied" || c.status === "Interviewed"
//         ).length;

//         const totalJobs = jobData.jobs?.length || 0;

//         setStats({
//           totalCandidates,
//           totalJobs,
//           hired,
//           inProgress,
//         });

//         // Combine recent activities
//         const jobMap = jobData.jobs.reduce((acc, job) => {
//           acc[job._id] = job.title;
//           return acc;
//         }, {});

//         const recentCandidateActivities = candidates
//           .slice(-5)
//           .reverse()
//           .map((c) => ({
//             type: "candidate",
//             message: `${c.name} applied for job ${jobMap[c.appliedFor] || "Unknown"
//               }`,
//           }));

//         const recentJobActivities = jobData.jobs
//           .slice(-5)
//           .reverse()
//           .map((job) => ({
//             type: "job",
//             message: `New job posted: ${job.title}`,
//           }));

//         setRecentActivities([
//           ...recentCandidateActivities,
//           ...recentJobActivities,
//         ]);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="dashboard">
//       <header>
//         <h1>Admin Dashboard</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>
//       <div className="dashboard-container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/candidate" className="nav-link">
//                 <i className="fa-solid fa-people-group"></i>
//                 <span>Candidates</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/job" className="nav-link">
//                 <i className="fa-solid fa-briefcase"></i>
//                 <span>Jobs</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="nav-link">
//                 <i className="fa-solid fa-chart-simple"></i>
//                 <span>Reports</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/profile" className="nav-link">
//                 <i className="fa-solid fa-user"></i>
//                 <span>Profile</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <main className="main-content">
//           <div className="stats">
//             <div className="stat-card">
//               Total Candidates: {stats.totalCandidates}
//             </div>
//             <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//             <div className="stat-card">
//               Applications in Progress: {stats.inProgress}
//             </div>
//             <div className="stat-card">Hired Candidates: {stats.hired}</div>
//           </div>
//           <section className="recent-activities">
//             <h2>Recent Activities</h2>
//             <ul>
//               {recentActivities.length > 0 ? (
//                 recentActivities.map((activity, index) => (
//                   <li key={index}>{activity.message}</li>
//                 ))
//               ) : (
//                 <li>No recent activities</li>
//               )}
//             </ul>
//           </section>
//           <section className="quick-links">
//             <h2>Quick Links</h2>
//             <Link to="/candidate/addCandidate" className="quick-link">
//               Add new Candidate
//             </Link>
//             <Link to="/job/addJob" className="quick-link">
//               Post New Job
//             </Link>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




//---------------------------------------------------original------------------------------------------------------------------























// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalCandidates: 0,
//     totalJobs: 0,
//     inProgress: 0,
//     hired: 0,
//   });

//   const [recentActivities, setRecentActivities] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Clearing all local storage...");
//     localStorage.clear();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const email = localStorage.getItem("email");
//         console.log("Admin Email:", email);

//         const [candidateResponse, jobResponse] = await Promise.all([
//           fetch("http://localhost:7000/candidates/allCandidates", {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               email,
//             },
//           }),
//           fetch("http://localhost:7000/jobs/all-jobs", {
//             method: "GET",
//           }),
//         ]);

//         if (!candidateResponse.ok) throw new Error("Failed to fetch candidates");
//         if (!jobResponse.ok) throw new Error("Failed to fetch jobs");

//         const candidateData = await candidateResponse.json();
//         const jobData = await jobResponse.json();

//         const candidates = candidateData.candidates || [];
//         const totalCandidates = candidates.length;
//         const hired = candidates.filter((c) => c.status === "Hired").length;// change in this feth karo backend se
//         const inProgress = candidates.filter(
//           (c) => c.status === "Applied" || c.status === "Interviewed"
//         ).length;

//         const totalJobs = jobData.jobs?.length || 0;

//         setStats({
//           totalCandidates,
//           totalJobs,
//           hired,
//           inProgress,
//         });

//         const jobMap = jobData.jobs.reduce((acc, job) => {
//           acc[job._id] = job.title;
//           return acc;
//         }, {});

//         const recentCandidateActivities = candidates
//           .slice(-5)
//           .reverse()
//           .map((c) => ({
//             type: "candidate",
//             message: `${c.name} applied for job ${
//               jobMap[c.appliedFor] || "Unknown"
//             }`,
//           }));

//         const recentJobActivities = jobData.jobs
//           .slice(-5)
//           .reverse()
//           .map((job) => ({
//             type: "job",
//             message: `New job posted: ${job.title}`,
//           }));

//         setRecentActivities([
//           ...recentCandidateActivities,
//           ...recentJobActivities,
//         ]);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <div className="dashboard">
//       <header>
//         <h1>Admin Dashboard</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>
//       <div className="dashboard-container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/candidate" className="nav-link">
//                 <i className="fa-solid fa-people-group"></i>
//                 <span>Candidates</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/job" className="nav-link">
//                 <i className="fa-solid fa-briefcase"></i>
//                 <span>Jobs</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="nav-link">
//                 <i className="fa-solid fa-chart-simple"></i>
//                 <span>Reports</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/profile" className="nav-link">
//                 <i className="fa-solid fa-user"></i>
//                 <span>Profile</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <main className="main-content">
//           <div className="stats">
//             <div className="stat-card">
//               Total Candidates: {stats.totalCandidates}
//             </div>
//             <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//             <div className="stat-card">
//               Applications in Progress: {stats.inProgress}
//             </div>
//             <div className="stat-card">Hired Candidates: {stats.hired}</div>
//           </div>
//           <section className="recent-activities">
//             <h2>Recent Activities</h2>
//             <ul>
//               {recentActivities.length > 0 ? (
//                 recentActivities.map((activity, index) => (
//                   <li key={index}>{activity.message}</li>
//                 ))
//               ) : (
//                 <li>No recent activities</li>
//               )}
//             </ul>
//           </section>
//           <section className="quick-links">
//             <h2>Quick Links</h2>
//             <Link to="/candidate/addCandidate" className="quick-link">
//               Add new Candidate
//             </Link>
//             <Link to="/job/addJob" className="quick-link">
//               Post New Job
//             </Link>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;































// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalCandidates: 0,
//     totalJobs: 0,
//     inProgress: 0,
//     hired: 0,
//   });

//   const [recentActivities, setRecentActivities] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Clearing all local storage...");
//     localStorage.clear();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const email = localStorage.getItem("email");
//         console.log("Admin Email:", email);

//         // Fetch candidate data from the new endpoint
//         const candidateResponse = await fetch("http://localhost:7000/candidateForActivity/candidates", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "admin-email": email,
//           },
//         });

//         if (!candidateResponse.ok) {
//           console.error("Error fetching candidates:", candidateResponse.statusText);
//           throw new Error("Failed to fetch candidates from activities");
//         }

//         const candidateData = await candidateResponse.json();
//         console.log("Candidate Data:", candidateData);
//         const candidates = candidateData.candidates || [];

//         // Calculate stats
//         const totalCandidates = candidates.length;
//         const hired = candidates.filter((c) => c.status === "Hired").length;
//         const inProgress = candidates.filter(
//           (c) => c.status === "Applied" || c.status === "Interviewed"
//         ).length;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalCandidates,
//           hired,
//           inProgress,
//         }));

//         // Prepare recent activities
//         const recentActivities = candidates.slice(-5).reverse().map((c) => ({
//           type: "candidate",
//           message: `${c.name} has the status: ${c.status}`,
//         }));
//         console.log("Recent Activities:", recentActivities);
//         setRecentActivities(recentActivities);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       }
//     };

//     fetchDashboardData();
//   }, []);


//   return (
//     <div className="dashboard">
//       <header>
//         <h1>Admin Dashboard</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>
//       <div className="dashboard-container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/candidate" className="nav-link">
//                 <i className="fa-solid fa-people-group"></i>
//                 <span>Candidates</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/job" className="nav-link">
//                 <i className="fa-solid fa-briefcase"></i>
//                 <span>Jobs</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="nav-link">
//                 <i className="fa-solid fa-chart-simple"></i>
//                 <span>Reports</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/profile" className="nav-link">
//                 <i className="fa-solid fa-user"></i>
//                 <span>Profile</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <main className="main-content">
//           <div className="stats">
//             <div className="stat-card">
//               Total Candidates: {stats.totalCandidates}
//             </div>
//             <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//             <div className="stat-card">
//               Applications in Progress: {stats.inProgress}
//             </div>
//             <div className="stat-card">Hired Candidates: {stats.hired}</div>
//           </div>
//           <section className="recent-activities">
//             <h2>Recent Activities</h2>
//             <ul>
//               {recentActivities.length > 0 ? (
//                 recentActivities.map((activity, index) => (
//                   <li key={index}>{activity.message}</li>
//                 ))
//               ) : (
//                 <li>No recent activities</li>
//               )}
//             </ul>
//           </section>
//           <section className="quick-links">
//             <h2>Quick Links</h2>
//             <Link to="/candidate/addCandidate" className="quick-link">
//               Add new Candidate
//             </Link>
//             <Link to="/job/addJob" className="quick-link">
//               Post New Job
//             </Link>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

































// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalCandidates: 0,
//     totalJobs: 0,
//     inProgress: 0,
//     hired: 0,
//   });

//   const [recentActivities, setRecentActivities] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Clearing all local storage...");
//     localStorage.clear();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const adminEmail = localStorage.getItem("adminEmail");
//         if (!adminEmail) throw new Error("Admin email not found in local storage");

//         const response = await fetch("http://localhost:7000/candidates/getAdminCandidate", {
//           method: "GET",
//           headers: {
//             "adminemail": adminEmail,
//           },
//         });
//         if (!response.ok) throw new Error("Failed to fetch candidates");
//         const data = await response.json();
//         const candidates = data.candidates || [];
//         const totalCandidates = candidates.length;

//         const hired = candidates.filter((c) => c.status === "Hired").length;
//         const inProgress = candidates.filter(
//           (c) => c.status === "Applied" || c.status === "Interviewed"
//         ).length;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalCandidates,
//           hired,
//           inProgress,
//         }));

//         // Prepare recent activities (latest 5 candidates only)
//         const recentCandidateActivities = candidates
//           .slice(-5)
//           .reverse()
//           .map((c) => ({
//             type: "candidate",
//             message: `${c.name} applied for job ${c.appliedFor}`,
//           }));

//         setRecentActivities(recentCandidateActivities);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };


//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("http://localhost:7000/jobs/all-jobs");
//         if (!response.ok) throw new Error("Failed to fetch jobs");
//         const data = await response.json();
//         const totalJobs = data.jobs?.length || 0;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalJobs,
//         }));

//         // Prepare recent activities for jobs (latest 5 jobs)
//         const recentJobActivities = data.jobs
//           .slice(-5)
//           .reverse()
//           .map((job) => ({
//             type: "job",
//             message: `New job posted: ${job.title}`,
//           }));

//         setRecentActivities((prevActivities) => [
//           ...recentJobActivities,
//         ]);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };

//     fetchCandidates();
//     fetchJobs();
//   }, []);

//   return (
//     <div className="dashboard">
//       <header>
//         <h1>Admin Dashboard</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>
//       <div className="dashboard-container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/candidate" className="nav-link">
//                 <i className="fa-solid fa-people-group"></i>
//                 <span>Candidates</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/job" className="nav-link">
//                 <i className="fa-solid fa-briefcase"></i>
//                 <span>Jobs</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="nav-link">
//                 <i className="fa-solid fa-chart-simple"></i>
//                 <span>Reports</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/profile" className="nav-link">
//                 <i className="fa-solid fa-user"></i>
//                 <span>Profile</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <main className="main-content">
//           <div className="stats">
//             <div className="stat-card">
//               Total Candidates: {stats.totalCandidates}
//             </div>
//             <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//             <div className="stat-card">
//               Applications in Progress: {stats.inProgress}
//             </div>
//             <div className="stat-card">Hired Candidates: {stats.hired}</div>
//           </div>
//           <section className="recent-activities">
//             <h2>Recent Activities</h2>
//             <ul>
//               {recentActivities.length > 0 ? (
//                 recentActivities.map((activity, index) => (
//                   <li key={index}>{activity.message}</li>
//                 ))
//               ) : (
//                 <li>No recent activities</li>
//               )}
//             </ul>
//           </section>
//           <section className="quick-links">
//             <h2>Quick Links</h2>
//             <Link to="/candidate/addCandidate" className="quick-link">
//               Add new Candidate
//             </Link>
//             <Link to="/job/addJob" className="quick-link">
//               Post New Job
//             </Link>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;






































// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalCandidates: 0,
//     totalJobs: 0,
//     inProgress: 0,
//     hired: 0,
//   });

//   const [recentActivities, setRecentActivities] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Clearing all local storage...");
//     localStorage.clear();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const adminEmail = localStorage.getItem("adminEmail");
//         if (!adminEmail) throw new Error("Admin email not found in local storage");

//         const response = await fetch("http://localhost:7000/candidates/getAdminCandidate", {
//           method: "GET",
//           headers: {
//             "adminemail": adminEmail,
//           },
//         });
//         if (!response.ok) throw new Error("Failed to fetch candidates");
//         const data = await response.json();
//         const candidates = data.candidates || [];

//         // Log candidates to check their structure
//         console.log(candidates);

//         const totalCandidates = candidates.length;
//         const hired = candidates.filter((c) => c.status === "Hired").length;
//         const inProgress = candidates.filter(
//           (c) => c.status === "Applied" || c.status === "Interviewed"
//         ).length;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalCandidates,
//           hired,
//           inProgress,
//         }));

//         const jobResponse = await fetch("http://localhost:7000/jobs/all-jobs");
//         if (!jobResponse.ok) throw new Error("Failed to fetch jobs");
//         const jobData = await jobResponse.json();
//         const jobMap = jobData.jobs.reduce((acc, job) => {
//           acc[job._id.toString()] = job.title; // Ensure job ID is a string
//           return acc;
//         }, {});

//         // Log jobMap to ensure correct mapping
//         console.log(jobMap);

//         // Prepare recent candidate activities
//         const recentCandidateActivities = candidates
//           .slice(-5)
//           .reverse()
//           .map((c) => {
//             const jobId = c.appliedFor.toString(); // Convert candidate appliedFor to string
//             const jobTitle = jobMap[jobId];
//             return {
//               type: "candidate",
//               message: jobTitle
//                 ? `${c.name} applied for job ${jobTitle}`
//                 : `${c.name} applied for an unknown job`,
//             };
//           });

//         setRecentActivities(recentCandidateActivities);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };




//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("http://localhost:7000/jobs/all-jobs");
//         if (!response.ok) throw new Error("Failed to fetch jobs");
//         const data = await response.json();
//         const totalJobs = data.jobs?.length || 0;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalJobs,
//         }));

//         // Prepare recent job activities
//         const recentJobActivities = data.jobs
//           .slice(-5)
//           .reverse()
//           .map((job) => ({
//             type: "job",
//             message: `New job posted: ${job.title}`,
//           }));

//         // Combine candidate and job activities
//         setRecentActivities((prevActivities) => [
//           ...recentJobActivities,
//           ...prevActivities,
//         ]);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };

//     fetchCandidates();
//     fetchJobs();
//   }, []);

//   return (
//     <div className="dashboard">
//       <header>
//         <h1>Admin Dashboard</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>
//       <div className="dashboard-container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/candidate" className="nav-link">
//                 <i className="fa-solid fa-people-group"></i>
//                 <span>Candidates</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/job" className="nav-link">
//                 <i className="fa-solid fa-briefcase"></i>
//                 <span>Jobs</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="nav-link">
//                 <i className="fa-solid fa-chart-simple"></i>
//                 <span>Reports</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/profile" className="nav-link">
//                 <i className="fa-solid fa-user"></i>
//                 <span>Profile</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <main className="main-content">
//           <div className="stats">
//             <div className="stat-card">
//               Total Candidates: {stats.totalCandidates}
//             </div>
//             <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//             <div className="stat-card">
//               Applications in Progress: {stats.inProgress}
//             </div>
//             <div className="stat-card">Hired Candidates: {stats.hired}</div>
//           </div>
//           <section className="recent-activities">
//             <h2>Recent Activities</h2>
//             <ul>
//               {recentActivities.length > 0 ? (
//                 recentActivities.map((activity, index) => (
//                   <li key={index}>{activity.message}</li>
//                 ))
//               ) : (
//                 <li>No recent activities</li>
//               )}
//             </ul>
//           </section>
//           <section className="quick-links">
//             <h2>Quick Links</h2>
//             <Link to="/candidate/addCandidate" className="quick-link">
//               Add new Candidate
//             </Link>
//             <Link to="/job/addJob" className="quick-link">
//               Post New Job
//             </Link>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
















//---------------------------------------------------------didi------------------------------------------------------------














// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Dashboard.css";
// // import jwtDecode from "jwt-decode"


// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalCandidates: 0,
//     totalJobs: 0,
//     inProgress: 0,
//     hired: 0,
//   });

//   const [recentActivities, setRecentActivities] = useState([]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Clearing all local storage...");
//     localStorage.clear();
//     navigate("/login");
//   };

//   const checkTokenExpiration = () =>{
//     const token = localStorage.getItem("token");
//     // if(!token){
//     //   console.log("No token found");
//     //   return;
//     // }
//   }

//   try {
//     const decoded = jwtDecode(token); // Decode the token to get the expiration time
//     const currentTime = Date.now() / 1000; // Current time in seconds

//     if (decoded.exp && decoded.exp < currentTime) {
//       console.log("Token has expired. Logging out...");
//       handleLogout(); // Clear local storage and redirect to login
//     } else {
//       console.log("Token is still valid.");
//     }
//   } catch (error) {
//     console.error("Error decoding token:", error);
//     handleLogout(); // Logout on any decoding errors
//   }

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const adminEmail = localStorage.getItem("adminEmail");
//         if (!adminEmail) throw new Error("Admin email not found in local storage");

//         const response = await fetch("http://localhost:7000/candidates/getAdminCandidate", {
//           method: "GET",
//           headers: {
//             "adminemail": adminEmail,
//           },
//         });
//         if (!response.ok) throw new Error("Failed to fetch candidates");
//         const data = await response.json();
//         const candidates = data.candidates || [];
//         const totalCandidates = candidates.length;
//         const hired = candidates.filter((c) => c.status === "Hired").length;
//         const inProgress = candidates.filter(
//           (c) => c.status === "Applied" || c.status === "Interviewed"
//         ).length;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalCandidates,
//           hired,
//           inProgress,
//         }));

//         // Recent activities now only show candidate name and status
//         const recentCandidateActivities = candidates
//           .slice(-5)
//           .reverse()
//           .map((c) => ({
//             type: "candidate",
//             message: `${c.name} - Status: ${c.status}`,
//           }));

//         setRecentActivities(recentCandidateActivities);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };

//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("http://localhost:7000/jobs/all-jobs");
//         if (!response.ok) throw new Error("Failed to fetch jobs");
//         const data = await response.json();
//         const totalJobs = data.jobs?.length || 0;

//         setStats((prevStats) => ({
//           ...prevStats,
//           totalJobs,
//         }));
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };

//     fetchCandidates();
//     fetchJobs();
//   }, []);

//   return (
//     <div className="dashboard">
//       <header>
//         <h1>Admin Dashboard</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>
//       <div className="dashboard-container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/candidate" className="nav-link">
//                 <i className="fa-solid fa-people-group"></i>
//                 <span>Candidates</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/job" className="nav-link">
//                 <i className="fa-solid fa-briefcase"></i>
//                 <span>Jobs</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="nav-link">
//                 <i className="fa-solid fa-chart-simple"></i>
//                 <span>Reports</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/profile" className="nav-link">
//                 <i className="fa-solid fa-user"></i>
//                 <span>Profile</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <main className="main-content">
//           <div className="stats">
//             <div className="stat-card">
//               Total Candidates: {stats.totalCandidates}
//             </div>
//             <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
//             <div className="stat-card">
//               Applications in Progress: {stats.inProgress}
//             </div>
//             <div className="stat-card">Hired Candidates: {stats.hired}</div>
//           </div>
//           <section className="recent-activities">
//             <h2>Recent Activities</h2>
//             <ul>
//               {recentActivities.length > 0 ? (
//                 recentActivities.map((activity, index) => (
//                   <li key={index}>{activity.message}</li>
//                 ))
//               ) : (
//                 <li>No recent activities</li>
//               )}
//             </ul>
//           </section>
//           <section className="quick-links">
//             <h2>Quick Links</h2>
//             <Link to="/candidate/addCandidate" className="quick-link">
//               Add new Candidate
//             </Link>
//             <Link to="/job/addJob" className="quick-link">
//               Post New Job
//             </Link>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;













//----------------------------------------------------------didi-------------------------------------------------------------




import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalCandidates: 0,
    totalJobs: 0,
    inProgress: 0,
    hired: 0,
  });

  const [recentActivities, setRecentActivities] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Clearing all local storage...");
    localStorage.clear();
    navigate("/login");
  };
  const adminEmail = localStorage.getItem("adminEmail");
  useEffect(() => {
    if (!adminEmail){
      navigate("/login");
    return;}
    
    console.log(adminEmail);
    
    const fetchCandidates = async () => {
      try {
        if (!adminEmail) throw new Error("Admin email not found in local storage");

        const response = await fetch("http://localhost:7000/candidates/getAdminCandidate", {
          method: "GET",
          headers: {
            "adminemail": adminEmail,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch candidates");
        const data = await response.json();
        const candidates = data.candidates || [];
        const totalCandidates = candidates.length;
        const hired = candidates.filter((c) => c.status === "Hired").length;
        const inProgress = candidates.filter(
          (c) => c.status === "Applied" || c.status === "Interviewed"
        ).length;

        setStats((prevStats) => ({
          ...prevStats,
          totalCandidates,
          hired,
          inProgress,
        }));


        const recentCandidateActivities = candidates
          .slice(-5)
          .reverse()
          .map((c) => ({
            type: "candidate",
            message: `${c.name} - Status: ${c.status}`,
          }));

        setRecentActivities(recentCandidateActivities);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:7000/jobs/all-jobs");
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data = await response.json();
        const totalJobs = data.jobs?.length || 0;

        setStats((prevStats) => ({
          ...prevStats,
          totalJobs,
        }));
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchCandidates();
    fetchJobs();
  }, []);

  return (
    <div className="dashboard">
      <header>
        <h1>Admin Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div className="dashboard-container">
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="/candidate" className="nav-link">
                <i className="fa-solid fa-people-group"></i>
                <span>Candidates</span>
              </Link>
            </li>
            <li>
              <Link to="/job" className="nav-link">
                <i className="fa-solid fa-briefcase"></i>
                <span>Jobs</span>
              </Link>
            </li>
            <li>
              <Link to="/reports" className="nav-link">
                <i className="fa-solid fa-chart-simple"></i>
                <span>Reports</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link">
                <i className="fa-solid fa-user"></i>
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <div className="stats">
            <div className="stat-card">
              Total Candidates: {stats.totalCandidates}
            </div>
            <div className="stat-card">Total Jobs: {stats.totalJobs}</div>
            <div className="stat-card">
              Applications in Progress: {stats.inProgress}
            </div>
            <div className="stat-card">Hired Candidates: {stats.hired}</div>
          </div>
          <section className="recent-activities">
            <h2>Recent Activities</h2>
            <ul>
              {recentActivities.length > 0 ? (
                recentActivities.map((activity, index) => (
                  <li key={index}>{activity.message}</li>
                ))
              ) : (
                <li>No recent activities</li>
              )}
            </ul>
          </section>
          <section className="quick-links">
            <h2>Quick Links</h2>
            <Link to="/candidate/addCandidate" className="quick-link">
              Add new Candidate
            </Link>
            <Link to="/job/addJob" className="quick-link">
              Post New Job
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
