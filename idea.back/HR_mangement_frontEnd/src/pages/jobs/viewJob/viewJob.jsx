// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import './viewJob.css'

// const ViewJob = () => {
//     const { id } = useParams();
//     const [job, setJob] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(`http://localhost:7000/jobs/byId/${id}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setJob(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, [id]);

//     if (loading) return <p>Loading Job Details...<i className="fa-solid fa-spinner fa-spin"></i></p>;
//     if (error) return <p>Error loading job details: {error.message}</p>;

//     return (
//         <>
//             <div className="job-detail-container">
//                 <h2>JOB DETAIL</h2>
//                 <div className="job-info">
//                     <p className="jobTitle">JOB TITLE: <strong>{job.title}</strong></p>
//                     <p className="jobDescription">DESCRIPTION: <strong>{job.description}</strong></p> {/* Fixed typo */}
//                     <p className="jobRequirements">REQUIREMENTS: <strong>{job.requirements}</strong></p> {/* Make sure this matches your backend */}
//                     <p className="jobPostedAt">POSTED AT: <strong>{job.postedAt}</strong></p>
//                     <p className="jobStatus">STATUS: <strong>{job.status}</strong></p>
//                 </div>
//                 <div className="action-btn">
//                     <Link to={`/job/editJob/${id}`} className="edit-btn">Edit</Link>
//                     <Link to="/job" className="btn-back">Back to the Job List</Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ViewJob;



















import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './viewJob.css'

const ViewJob = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:7000/jobs/byId/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setJob(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    const addNewJob = (newJob) => {
        setJob((prevJobs) => [newJob, ...prevJobs]);
    }

    if (loading) return <p>Loading Job Details...<i className="fa-solid fa-spinner fa-spin"></i></p>;
    if (error) return <p>Error loading job details: {error.message}</p>;

    return (
        <>
            <div className="job-detail-container">
                <h2>JOB DETAIL</h2>
                <div className="job-info">
                    <p className="jobTitle">JOB TITLE: <strong>{job.title}</strong></p>
                    <p className="jobDescription">DESCRIPTION: <strong>{job.description}</strong></p>
                    <p className="jobRequirements">REQUIREMENTS: <strong>{job.requirements}</strong></p> 
                    <p className="jobPostedAt">POSTED AT: <strong>{job.postedAt}</strong></p>
                    <p className="jobStatus">STATUS: <strong>{job.status}</strong></p>
                </div>
                <div className="action-btn">
                    <Link to={`/job/editJob/${id}`} className="edit-btn">Edit</Link>
                    <Link to="/job" className="btn-back">Back to the Job List</Link>
                </div>
            </div>
        </>
    );
};

export default ViewJob;

