// import React, { useEffect, useState } from "react";
// import ReportTable from "../../../components/reportTable/reportTable";
// import { Bar } from "react-chartjs-2";
// import NavBar from "../../../components/navbar/navbar";


// const ApplicantProgress = () => {
//     const [reportData, setReportData] = useState([]);
//     const [selectedJob, setSelectedJob] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchReportData = async () => {
//             try {
//                 const [reportRes, jobsRes] = await Promise.all([
//                     fetch('http://localhost:7000/reports/applicant-progress'),
//                     fetch('http://localhost:7000/jobs')
//                 ]);

//                 if (!reportRes.ok || !jobsRes.ok) {
//                     throw new Error('Failed to fetch data');
//                 }

//                 const reportData = await reportRes.json();
//                 const jobsData = await jobsRes.json();

//                 const enrichedReport = reportData.report.map(jobReport => {
//                     const jobDetails = jobsData.find(job => job._id === jobReport.total[0]?.appliedFor) || {};
//                     return {
//                         ...jobReport,
//                         jobTitle: jobDetails.title || 'Unknown Job',
//                     };
//                 });

//                 setReportData(enrichedReport);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error.message);
//                 setLoading(false);
//             }
//         };

//         fetchReportData();
//     }, []);


//     if (loading) return <p>Loading report data...</p>
//     if (error) return <p>Error: {error}</p>

//     const handleJobClick = (jobId) => {
//         setSelectedJob(jobId);
//     };

//     const chartsData = reportData.map((job) => {
//         const appliedCount = job.total.filter(item => item.status === "Applied").length;
//         const interviewedCount = job.total.filter(item => item.status === "Interviewed").length;
//         const hiredCount = job.total.filter(item => item.status === "Hired").length;

//         return {
//             jobId: job.total[0]?.appliedFor || "Unknown Job",
//             jobTitle: job.jobTitle || "Unknown Job",
//             chartData: {
//                 labels: ['Applied', 'Interviewed', 'Hired'],
//                 datasets: [
//                     {
//                         label: `Status for Job: ${job.jobTitle}`,
//                         data: [appliedCount, interviewedCount, hiredCount],
//                         backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
//                     },
//                 ],
//             },
//         };
//     });



//     const columns = [
//         { header: 'Candidate Name', accessor: 'name' },
//         { header: 'Candidate ID', accessor: 'id' },
//         { header: 'Status', accessor: 'status' },
//     ];

//     const tableData = selectedJob
//         ? reportData
//             .find(job => job.total[0]?.appliedFor === selectedJob)
//             ?.total.map(item => ({
//                 name: item.name || "N/A",
//                 id: item._id,
//                 status: item.status
//             })) || []
//         : [];

//     const option = {
//         responsive: true,
//         scales: {
//             y: {
//                 beginAtZero: true
//             },
//         },
//     };

//     return (
//         <>
//             <NavBar/>
//             <div>
//                 <h2>Applicant Progress Report</h2>

//                 {chartsData.map((job) => (
//                     <div key={job.jobId} style={{ marginBottom: '2rem' }}>
//                         <h3>Job: {job.jobTitle}</h3>
//                         <div style={{ maxWidth: '800px', margin: '0 auto' }}>
//                             <Bar
//                                 data={job.chartData}
//                                 options={option}
//                                 onClick={() => handleJobClick(job.jobId)}
//                             />
//                         </div>
//                         <button onClick={() => handleJobClick(job.jobId)}>View Candidates</button>
//                     </div>
//                 ))}


//                 {selectedJob && (
//                     <div>
//                         <h3>Candidates for Job ID: {selectedJob}</h3>
//                         <ReportTable columns={columns} data={tableData} />
//                     </div>
//                 )}
//             </div>
//         </>
//     );


// }


// export default ApplicantProgress;





import React, { useEffect, useState } from "react";
import ReportTable from "../../../components/reportTable/reportTable";
import { Bar } from "react-chartjs-2";
import NavBar from "../../../components/navbar/navbar";
import './applicantProgress.css';

const ApplicantProgress = () => {
    const [reportData, setReportData] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReportData = async () => {
            try {
                const [reportRes, jobsRes] = await Promise.all([
                    fetch('http://localhost:7000/reports/applicant-progress'),
                    fetch('http://localhost:7000/jobs')
                ]);

                if (!reportRes.ok || !jobsRes.ok) {
                    throw new Error('Failed to fetch data');
                }

                const reportData = await reportRes.json();
                const jobsData = await jobsRes.json();

                const enrichedReport = reportData.report.map(jobReport => {
                    const jobDetails = jobsData.find(job => job._id === jobReport.total[0]?.appliedFor) || {};
                    return {
                        ...jobReport,
                        jobTitle: jobDetails.title || 'Unknown Job',
                    };
                });

                setReportData(enrichedReport);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchReportData();
    }, []);


    if (loading) return <p>Loading report data...</p>
    if (error) return <p>Error: {error}</p>

    const handleJobClick = (jobId) => {
        setSelectedJob(jobId);
    };

    const chartsData = reportData.map((job) => {
        const appliedCount = job.total.filter(item => item.status === "Applied").length;
        const interviewedCount = job.total.filter(item => item.status === "Interviewed").length;
        const hiredCount = job.total.filter(item => item.status === "Hired").length;

        return {
            jobId: job.total[0]?.appliedFor || "Unknown Job",
            jobTitle: job.jobTitle || "Unknown Job",
            chartData: {
                labels: ['Applied', 'Interviewed', 'Hired'],
                datasets: [
                    {
                        label: `Status for Job: ${job.jobTitle}`,
                        data: [appliedCount, interviewedCount, hiredCount],
                        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
                    },
                ],
            },
        };
    });


    const columns = [
        { header: 'Candidate Name', accessor: 'name' },
        { header: 'Candidate ID', accessor: 'id' },
        { header: 'Status', accessor: 'status' },
    ];

    const tableData = selectedJob
        ? reportData
            .find(job => job.total[0]?.appliedFor === selectedJob)
            ?.total.map(item => ({
                name: item.name || "N/A",
                id: item._id,
                status: item.status
            })) || []
        : [];

    const option = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            },
        },
    };

    return (
        <>
            <NavBar />
            <div className="graph-container">
                {chartsData
                    .filter((job) => job.chartData.datasets[0].data.some((count) => count > 0)) 
                    .map((job) => (
                        <div className="graph-card" key={job.jobId}>
                            <h3>Job: {job.jobTitle}</h3>
                            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                                <Bar data={job.chartData} options={option} />
                            </div>
                            {job.chartData.datasets[0].data.some((count) => count > 0) && (
                                <button
                                    className="view-candidates-button"
                                    onClick={() => handleJobClick(job.jobId)}
                                >
                                    View Candidates
                                </button>
                            )}
                        </div>
                    ))}
            </div>

            {/* Render table only when candidates exist */}
            {selectedJob && tableData.length > 0 && (
                <div>
                    <h3>Candidates for Job ID: {selectedJob}</h3>
                    <ReportTable columns={columns} data={tableData} />
                </div>
            )}

        </>
    );
}

export default ApplicantProgress;
