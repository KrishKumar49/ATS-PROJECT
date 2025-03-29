// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import NavBar from "../../../components/navbar/navbar";
// import './timeToHire.css'

// const ReportTable = ({ columns, data }) => {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     {columns.map((column, index) => (
//                         <th key={index}>{column}</th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((item, index) => (
//                     <tr key={index}>
//                         <td>{item.jobTitle || 'N/A'}</td>
//                         <td>{item.averageTimeToHire !== undefined ? item.averageTimeToHire : 'N/A'}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// const TimeToHireReport = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch("http://localhost:7000/reports/time-to-hire")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch Time to Hire report data");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Fetched Time to Hire Data:", data);
//                 setData(data.report || []);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching Time to Hire data:", error);
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p>Loading... <i className="fa-solid fa-spinner fa-spin"></i></p>;

//     if (error) return <p>Error: {error}</p>;

//     if (!data || data.length === 0) return <p>No data available for this report.</p>;

//     const chartData = {
//         labels: data.map((item) => item.jobTitle),
//         datasets: [
//             {
//                 label: "Average Time to Hire (Days)",
//                 data: data.map((item) => item.averageTimeToHire), 
//                 backgroundColor: "rgba(0, 123, 255, 0.6)",
//                 borderColor: "rgba(0, 123, 255, 1)",
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 ticks: {
//                     callback: function (value) {
//                         return value.toFixed(2);
//                     },
//                 },
//             },
//         },
//     };

//     return (
//         <div>
//             <NavBar />
//             <h2>TIME TO HIRE REPORT</h2>
//             <div className="chart-container">
//                 <Bar data={chartData} options={options} />
//             </div>

//             <ReportTable columns={["Job Title", "Average Time to Hire (Days)"]} data={data} />
//         </div>
//     );
// };

// export default TimeToHireReport;















import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import NavBar from "../../../components/navbar/navbar";
import './timeToHire.css'

const ReportTable = ({ columns, data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.jobTitle || 'N/A'}</td>
                        <td>{item.averageTimeToHire !== undefined ? item.averageTimeToHire : 'N/A'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const TimeToHireReport = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:7000/reports/time-to-hire")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch Time to Hire report data");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched Time to Hire Data:", data);
                setData(data.report || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching Time to Hire data:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading... <i className="fa-solid fa-spinner fa-spin"></i></p>;

    if (error) return <p>Error: {error}</p>;

    if (!data || data.length === 0) return <p>No data available for this report.</p>;

    const chartData = {
        labels: data.map((item) => item.jobTitle),
        datasets: [
            {
                label: "Average Time to Hire (Days)",
                data: data.map((item) => item.averageTimeToHire), 
                backgroundColor: "rgba(0, 123, 255, 0.6)",
                borderColor: "rgba(0, 123, 255, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value.toFixed(2);
                    },
                },
            },
        },
    };

    return (
        <div>
        <NavBar />
        <div className="time-to-hire-container">
            <h2>TIME TO HIRE REPORT</h2>

            <div className="chart-container">
                <Bar data={chartData} options={options} />
            </div>

            <div className="table-container">
                <ReportTable columns={["Job Title", "Average Time to Hire (Days)"]} data={data} />
            </div>

            {!data.length && <p className="no-data">No data available for this report.</p>}
        </div>
    </div>
    );
};

export default TimeToHireReport;
