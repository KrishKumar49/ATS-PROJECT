import { useEffect, useState } from "react";
import NavBar from "../../components/navbar/navbar";
import { Link, useNavigate } from "react-router-dom";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:7000/jobs/all-jobs`)
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch jobs");
                return response.json();
            })
            .then((data) => {
                setJobs(data.jobs || []); 
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleDelete = (jobId) => {
        fetch(`http://localhost:7000/jobs/delete/${jobId}`, { method: "DELETE" })
            .then((response) => {
                if (response.ok) {
                    setJobs(jobs.filter((job) => job._id !== jobId));
                    alert("Job deleted successfully");
                } else {
                    alert("Error deleting job");
                }
            })
            .catch((error) => {
                console.error("Error deleting job:", error);
                alert("An error occurred while deleting the job.");
            });
    };

    if (loading) return <p>Loading jobs...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <NavBar />
            <div className="job-list-container">
                <h2>JOB LIST</h2>
                <Link to="/job/addJob" className="btn-add">
                    ADD NEW JOB
                </Link>
                {jobs.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Description</th>
                                <th>Requirements</th>
                                <th>Posted</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job._id}>
                                    <td>{job.title}</td>
                                    <td>{job.description}</td>
                                    <td>
                                        <ul>
                                            {job.requirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>{new Date(job.postedAt).toLocaleDateString()}</td>
                                    <td>{job.status}</td>
                                    <td>
                                        <Link to={`/job/viewJob/${job._id}`} className="btn-view">
                                            VIEW
                                        </Link>
                                        <Link to={`/job/editJob/${job._id}`} className="btn-edit">
                                            EDIT
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(job._id)}
                                            className="btn-delete"
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No Jobs Found</p>
                )}
            </div>
        </>
    );
};

export default JobList;
