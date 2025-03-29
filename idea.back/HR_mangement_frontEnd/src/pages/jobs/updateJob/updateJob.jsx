import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from "../../../components/navbar/navbar";
import './updateJob.css'

const EditJob = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Job ID from useParams:", jobId);
        if (jobId) {
            fetch(`http://localhost:7000/jobs/byId/${jobId}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Fetched job data:", data);
                    setJob(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching Job:', error);
                    setLoading(false);
                });
        } else {
            console.error("Job ID is missing");
        }
    }, [jobId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJob((prevJob) => ({
            ...prevJob,
            [name]: value,
        }));
    };

    const handleRequirementsChange = (e, index) => {
        const { value } = e.target;
        const newRequirements = [...job.requirements];
        newRequirements[index] = value;
        setJob((prevJob) => ({
            ...prevJob,
            requirements: newRequirements,
        }));
    };

    const addRequirement = () => {
        setJob((prevJob) => ({
            ...prevJob,
            requirements: [...prevJob.requirements, '']
        }));
    };

    const removeRequirement = (index) => {
        const newRequirements = job.requirements.filter((_, i) => i !== index);
        setJob((prevJob) => ({
            ...prevJob,
            requirements: newRequirements,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Submitting job:", job); 
        fetch(`http://localhost:7000/jobs/update/${jobId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(job),
        })
        .then(response => {
            if (response.ok) {
                navigate('/job');
            } else {
                response.json().then((data) => {
                    alert(data.message || 'Error updating job');
                });
            }
        })
        .catch(error => {
            console.error('Error updating job:', error);
            alert('Error updating job');
        });
    };

    if (loading) return <p>Loading job details...<i className="fa-solid fa-spinner fa-spin"></i></p>;

    return (
        <>
        <NavBar />
        <div className='bg-container-update'>
        <div className="edit-job-container">
            <h2>EDIT JOB DETAILS</h2>
            {job ? (
                <form onSubmit={handleSave}>
                    <label>
                        Job Title:
                        <input
                            type="text"
                            name="title"
                            value={job.title || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Status:
                        <select
                            name="status"
                            value={job.status}
                            onChange={handleInputChange}
                        >
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                            <option value="Draft">Draft</option>
                        </select>
                    </label>
                    <label>
                        Job Description:
                        <input
                            type="text"
                            name="description"
                            value={job.description || ""}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Requirements:
                        {job.requirements && job.requirements.length > 0 ? (
                            job.requirements.map((req, index) => (
                                <div key={index}>
                                    <input
                                        type="text"
                                        value={req}
                                        onChange={(e) => handleRequirementsChange(e, index)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeRequirement(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))
                        ) : (
                            <input
                                type="text"
                                name="requirements"
                                value=""
                                onChange={(e) => handleInputChange(e)}
                                placeholder="Enter requirements"
                            />
                        )}
                        <button type="button" onClick={addRequirement}>Add Requirement</button>
                    </label>
                    <label>
                        Posted At:
                        <input
                            type="date"
                            name="postedAt"
                            value={job.postedAt ? job.postedAt.substring(0, 10) : ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Open Position:
                        <input
                            type="number"
                            name="openPosition"
                            value={job.openPosition || 1}
                            onChange={(e) => setJob(precJob => ({
                                ...precJob,
                                openPosition: parseInt(e.target.value, 10) || 1
                            }))}
                            min={0}
                        />
                    </label>
                    <button type="submit" className="btn-save">Save</button>
                    <button type="button" onClick={() => navigate('/job')} className="btn-cancel">Cancel</button>
                </form>
            ) : (
                <p>Job not found</p>
            )}
        </div>
        </div>
    </>
    );
};

export default EditJob;
