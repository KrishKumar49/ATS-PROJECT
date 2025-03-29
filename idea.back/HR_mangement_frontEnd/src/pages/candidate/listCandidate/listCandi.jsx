import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './listCandi.css';
import NavBar from "../../../components/navbar/navbar";

const CandidateList = () => {
    const navigate = useNavigate();
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch('http://localhost:7000/candidates/allCandidates');
                if (!response.ok) throw new Error("Failed to fetch candidates");

                const data = await response.json();
                if (Array.isArray(data)) {
                    setCandidates(data);
                } else {
                    setError("Unexpected data format from server");
                }
            } catch (error) {
                console.error('Error Fetching Candidates:', error);
                setError("Failed to fetch candidates. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCandidates();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:7000/candidates/${id}`, { method: 'DELETE' });
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

    if (loading) return <p>Loading Candidate Details...<i className="fa-solid fa-spinner fa-spin"></i></p>;

    return (
        <>
        this not done
            {/* <NavBar />
            <div className="candidate-list-container">
                <h2>Candidate List</h2>
                {candidates.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidates.map((candidate) => (
                                <tr key={candidate._id}>
                                    <td>{candidate.name}</td>
                                    <td>{candidate.email}</td>
                                    <td>{candidate.status}</td>
                                    <td>
                                        <Link to={`/candidates/${candidate._id}`} className="btn-view">View</Link>
                                        <Link to={`/edit-candidates/${candidate._id}`} className="btn-edit">Edit</Link>
                                        <button onClick={() => handleDelete(candidate._id)} className="btn-delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No candidates found.</p>
                )}
                <Link to='/candidate/addCandidate' className="btn-add">Add New Candidate</Link>
            </div> */}
        </>
    );
};

export default CandidateList;
