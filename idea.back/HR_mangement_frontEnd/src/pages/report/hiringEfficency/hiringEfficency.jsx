import React, { useState, useEffect } from "react";
import ReportTable from "../../../components/reportTable/reportTable";
import 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import NavBar from "../../../components/navbar/navbar";
import './hiringEfficency.css'

const HireEfficiency = () => {
    const [reportData, setReportData] = useState(null);
    const [jobTitles, setJobTitles] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReportData = async () => {
            try {
                const reportResponse = await fetch('http://localhost:7000/reports/hiring-efficiency');
                if (!reportResponse.ok) {
                    throw new Error('Failed to fetch hire efficiency data');
                }
                const reportData = await reportResponse.json();

                const jobsResponse = await fetch('http://localhost:7000/jobs');
                if (!jobsResponse.ok) {
                    throw new Error('Failed to fetch job titles');
                }
                const jobsData = await jobsResponse.json();

                const jobMap = {};
                jobsData.forEach(job => {
                    jobMap[job._id] = job.title;
                });

                setJobTitles(jobMap);
                setReportData(reportData.report); 
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchReportData();
    }, []);

    if (loading) return <p>Loading report data...<i className="fa-solid fa-spinner fa-spin"></i></p>;
    if (error) return <p>Error: {error}</p>;

    const chartData = {
        labels: reportData.map(item => jobTitles[item.totalApplications[0]?.appliedFor] || "Unknown Job"),
        datasets: [
            {
                label: 'Hire Efficiency (%)',
                data: reportData.map(item => parseFloat(item.efficency)),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const columns = [
        { header: 'Candidate Name', accessor: 'name' },
        { header: 'Email', accessor: 'email' },
        { header: 'Status', accessor: 'status' },
    ];

    return (
        <>
            <NavBar />
            <div>
                <h2>HIRE EFFICENCY REPORT</h2>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <Bar data={chartData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
                </div>

                {reportData.map((job, index) => (
                    <div key={index} style={{ marginTop: '2rem'}}>
                        <h3>Job: {jobTitles[job.totalApplications[0]?.appliedFor] || "Unknown Job"}</h3>
                        <p>Hire Efficiency: {job.efficency}</p>
                        <h4>Hired Candidates:</h4>
                        <ReportTable
                            columns={columns}
                            data={job.totalApplications
                                .filter(candidate => candidate.status === "Hired")
                                .map(candidate => ({
                                    name: candidate.name,
                                    email: candidate.email,
                                    status: candidate.status,
                                }))
                            }
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default HireEfficiency;
