import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/navbar/navbar";
import './viewCandi.css';

const CandidatesList = () => {
    const [candidates, setCandidates] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchCandidates = async (page = 1) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:7000/candidates/allCandidates?page=${page}&limit=5`);
            if (!response.ok) {
                throw new Error("Failed to fetch candidates");
            }
            const data = await response.json();
            setCandidates(data.candidates.reverse());
            setTotalPages(data.totalPages);
            setCurrentPage(data.currentPage);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchJobs = async () => {
        try {
            const response = await fetch("http://localhost:7000/jobs/all-jobs");
            if (!response.ok) {
                throw new Error("Failed to fetch jobs");
            }
            const data = await response.json();
            setJobs(data.jobs || []);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    useEffect(() => {
        fetchCandidates(currentPage);
        fetchJobs();
    }, [currentPage]);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:7000/candidates/delete/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setCandidates(candidates.filter(candidate => candidate._id !== id));
                alert('Candidate deleted successfully.');
            } else {
                alert('Error deleting candidate');
            }
        } catch (error) {
            console.error("Error deleting candidate:", error);
            alert('Error deleting candidate');
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const getJobDetails = (jobId) => {
        const job = jobs.find((job) => job._id === jobId);
        return job ? `${job.title} (${job._id})` : "N/A";
    };

    if (loading) return <p>Loading Candidate Details...<i className="fa-solid fa-spinner fa-spin"></i></p>;
    if (error) return <p>Error: {error}</p>;
    if (candidates.length === 0) return <p>No candidates available</p>;

    return (
        <>
            <NavBar />
            <div className="candidate-list-container">
                <h2>CANDIDATE LIST</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Applied For</th>
                            <th>Resume(URL)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((candidate) => (
                            <tr key={candidate._id}>
                                <td>{candidate.name}</td>
                                <td>{candidate.email}</td>
                                <td>{candidate.status}</td>
                                <td>{getJobDetails(candidate.appliedFor)}</td>
                                <td>{candidate.resume ? (
                                    <a
                                        href={candidate.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resume-link">
                                            View Resume
                                        </a>
                                ) : (
                                    "N/A"
                                )}</td>
                                <td>
                                    {/* <Link to={`/candidate/searchCandidate/${candidate._id}`} className="btn-view">View</Link> */}
                                    <Link to={`/candidate/editCandidate/${candidate._id}`} className="btn-edit">Edit</Link>
                                    <button onClick={() => handleDelete(candidate._id)} className="btn-delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination-controls">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
                <Link to='/candidate/addCandidate' className="btn-add">Add New Candidate</Link>
            </div>
        </>
    );
};

export default CandidatesList;
