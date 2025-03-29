import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteJob = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     fetch(`http://localhost:7000/jobs/byId/${jobId}`)
    // .then((response) => {
    //     if (!response.ok) throw new Error("Failed to fetch job details");
    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    //     setJob(data);
    //     setLoading(false);
    // })
    // .catch((error) => {
    //     console.error("Error fetching job:", error);
    //     alert("Failed to fetch job details.");
    //     setLoading(false);
    // });

    // }, [jobId]);

    const handleDelete = () => {
        fetch(`http://localhost:7000/jobs/delete/${jobId}`, { method: "DELETE" })
            .then((response) => {
                if (response.ok) {
                    setShowModal(true); 
                }
            })
            .catch((error) => console.log("Error deleting job:", error));
    };

    const closeModal = () => {
        setShowModal(false);
        navigate("/job");
    };

    if (loading) {
        return (
            <p>
                Loading job details...{" "}
                <i className="fa-solid fa-spinner fa-spin"></i>
            </p>
        );
    }

    return (
        <div className="delete-job-container">
            <h2>Delete Job</h2>
            {job ? (
                <>
                    <p>
                        Are you sure you want to delete the job{" "}
                        <strong>{job.JobTitle}</strong>?
                    </p>
                    <button onClick={handleDelete} className="btn-delete-confirm">
                        Delete
                    </button>
                    <button onClick={() => navigate("/job")} className="btn-cancel">
                        Cancel
                    </button>

                    
                    {showModal && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <h3>Job Deleted</h3>
                                <p>The job <strong>{job.JobTitle}</strong> was deleted successfully.</p>
                                <button onClick={closeModal} className="btn-close">
                                    OK
                                </button>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <p>Job not found.</p>
            )}
        </div>
    );
};

export default DeleteJob;






