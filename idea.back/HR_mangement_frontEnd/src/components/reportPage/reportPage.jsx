// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import ReportTable from "../reportTable/reportTable";  // Assuming you already have this component

// const ReportPage = ({ reportType, title, chartLabel }) => {
//     const [data, setData] = useState([]);  // Holds the report data
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch report data on component mount
//     useEffect(() => {
//         fetch(`http://localhost:7000/reports/time-to-hire`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch report data");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Fetched Data:", data);  // Log the data to ensure it's correct
//                 setData(data.report || []);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching report data:", error);
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, [reportType]);

//     // Loading state
//     if (loading) return <p>Loading... <i className="fa-solid fa-spinner fa-spin"></i></p>;

//     // Error state
//     if (error) return <p>Error: {error}</p>;

//     // Check if data exists
//     if (!data || data.length === 0) return <p>No data available for this report.</p>;

//     // Chart Data setup
//     const chartData = {
//         labels: data.map((item) => item.jobTitle),  // jobTitle for x-axis
//         datasets: [
//             {
//                 label: chartLabel,
//                 data: data.map((item) => item.averageTimeToHire),  // averageTimeToHire for y-axis
//                 backgroundColor: "rgba(75, 192, 192, 0.6)",
//                 borderColor: "rgba(75, 192, 192, 1)",
//                 borderWidth: 1,
//             },
//         ],
//     };

//     // Chart Options
//     const options = {
//         responsive: true,
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 ticks: {
//                     callback: function (value) {
//                         return value.toFixed(2);  // Round to 2 decimal places
//                     },
//                 },
//             },
//         },
//     };

//     return (
//         <div>
//             <h2>{title}</h2>
//             {/* Render the Bar chart */}
//             <Bar data={chartData} options={options} />

//             {/* Render the report table */}
//             <ReportTable columns={["Job Title", "Average Time to Hire (Days)"]} data={data} />
//         </div>
//     );
// };

// export default ReportPage;






// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import ReportTable from "../reportTable/reportTable";  // Assuming you already have this component

// const ReportPage = ({ reportType, title, chartLabel }) => {
//     const [data, setData] = useState([]);  // Holds the report data
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch report data on component mount
//     useEffect(() => {
//         fetch(`http://localhost:7000/reports/time-to-hire`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch report data");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Fetched Data:", data);  // Log the data to ensure it's correct
//                 setData(data.report || []);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching report data:", error);
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, [reportType]);

//     // Loading state
//     if (loading) return <p>Loading... <i className="fa-solid fa-spinner fa-spin"></i></p>;

//     // Error state
//     if (error) return <p>Error: {error}</p>;

//     // Check if data exists
//     if (!data || data.length === 0) return <p>No data available for this report.</p>;

//     // Chart Data setup
//     const chartData = {
//         labels: data.map((item) => item.jobTitle),  // jobTitle for x-axis
//         datasets: [
//             {
//                 label: chartLabel,
//                 data: data.map((item) => item.averageTimeToHire),  // averageTimeToHire for y-axis
//                 backgroundColor: "rgba(75, 192, 192, 0.6)",
//                 borderColor: "rgba(75, 192, 192, 1)",
//                 borderWidth: 1,
//             },
//         ],
//     };

//     // Chart Options
//     const options = {
//         responsive: true,
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 ticks: {
//                     callback: function (value) {
//                         return value.toFixed(2);  // Round to 2 decimal places
//                     },
//                 },
//             },
//         },
//     };

//     return (
//         <div>
//             <h2>{title}</h2>
//             {/* Render the Bar chart */}
//             <Bar data={chartData} options={options} />

//             {/* Render the report table */}
//             <ReportTable columns={["Job Title", "Average Time to Hire (Days)"]} data={data} />
//         </div>
//     );
// };

// export default ReportPage;

