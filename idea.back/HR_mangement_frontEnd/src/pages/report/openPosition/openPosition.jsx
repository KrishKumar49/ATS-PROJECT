// import React, { useState, useEffect } from "react";
// import { Doughnut } from 'react-chartjs-2';
// import 'chart.js/auto';
// import NavBar from "../../../components/navbar/navbar";
// import './openPosition.css'

// const OpenPositionReportPage = () => {
//     const [reportData, setReportData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(`http://localhost:7000/reports/open-positions`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch Open Position data');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Fetched data:", data);
//                 if (data.report && Array.isArray(data.report)) {
//                     setReportData(data.report);
//                 } else {
//                     throw new Error('Invalid data format');
//                 }
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p>Loading report data... <i className="fa-solid fa-spinner fa-spin"></i></p>;
//     if (error) return <p>Error: {error}</p>;
//     if (!reportData || reportData.length === 0) return <p>No data available for the Open Position Report.</p>;

//     const chartData = {
//         labels: reportData.map(item => item.jobTitle),
//         datasets: [
//             {
//                 label: 'Open Positions',
//                 data: reportData.map(item => item.openPositions),
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.6)',  // Red
//                     'rgba(54, 162, 235, 0.6)',  // Blue
//                     'rgba(255, 159, 64, 0.6)',  // Orange
//                     'rgba(75, 192, 192, 0.6)',  // Green
//                     'rgba(153, 102, 255, 0.6)', // Purple
//                     'rgba(255, 159, 64, 0.6)',  // Yellow
//                 ],
//             },
//         ],
//     };

//     const columns = [
//         { header: 'Job Title', accessor: 'jobTitle' },
//         { header: 'Days Open', accessor: 'daysOpen' },
//         { header: 'Open Positions', accessor: 'openPositions' },
//     ];

//     const renderReportTable = () => {
//         return (
//             <table className="report-table">
//                 <thead>
//                     <tr>
//                         {columns.map((column, index) => (
//                             <th key={index}>{column.header}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {reportData.map((item, index) => (
//                         <tr key={index}>
//                             <td>{item.jobTitle}</td>
//                             <td>{item.daysOpen.toFixed(2)}</td>
//                             <td>{item.openPositions}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         );
//     };

//     return (
//         <div>
//             <NavBar />
//             <h2>OPEN POSITION REPORT</h2>
            
//             <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//                 <Doughnut data={chartData} />
//             </div>
            
//             <div style={{ maxWidth: '1000px', margin: '20px auto' }}>
//                 {renderReportTable()}
//             </div>
//         </div>
//     );
// };

// export default OpenPositionReportPage;
















import React, { useState, useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import NavBar from "../../../components/navbar/navbar";
import './openPosition.css'

const OpenPositionReportPage = () => {
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:7000/reports/open-positions`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch Open Position data');
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched data:", data);
                if (data.report && Array.isArray(data.report)) {
                    setReportData(data.report);
                } else {
                    throw new Error('Invalid data format');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading report data... <i className="fa-solid fa-spinner fa-spin"></i></p>;
    if (error) return <p>Error: {error}</p>;
    if (!reportData || reportData.length === 0) return <p>No data available for the Open Position Report.</p>;

    const chartData = {
        labels: reportData.map(item => item.jobTitle),
        datasets: [
            {
                label: 'Open Positions',
                data: reportData.map(item => item.openPositions),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',  // Red
                    'rgba(54, 162, 235, 0.6)',  // Blue
                    'rgba(255, 159, 64, 0.6)',  // Orange
                    'rgba(75, 192, 192, 0.6)',  // Green
                    'rgba(153, 102, 255, 0.6)', // Purple
                    'rgba(255, 159, 64, 0.6)',  // Yellow
                ],
            },
        ],
    };

    const columns = [
        { header: 'Job Title', accessor: 'jobTitle' },
        { header: 'Days Open', accessor: 'daysOpen' },
        { header: 'Open Positions', accessor: 'openPositions' },
    ];

    const renderReportTable = () => {
        return (
            <table className="report-table">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.jobTitle}</td>
                            <td>{item.daysOpen.toFixed(2)}</td>
                            <td>{item.openPositions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div>
            <NavBar />
            <div className="open-position-container">
                <h2>OPEN POSITION REPORT</h2>
                
                <div className="chart-wrapper">
                    <Doughnut data={chartData} />
                </div>
                
                <div className="table-wrapper">
                    {renderReportTable()}
                </div>
    
                {!reportData.length && <p className="no-data">No data available for this report.</p>}
            </div>
        </div>
    );
    
};

export default OpenPositionReportPage;
