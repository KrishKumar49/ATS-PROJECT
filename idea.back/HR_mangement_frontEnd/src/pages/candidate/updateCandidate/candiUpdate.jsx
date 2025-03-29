// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import NavBar from "../../../components/navbar/navbar";
// import './updateCandi.css'

// const EditCandidate = () => {
//     const navigate = useNavigate();
//     const { candidateID } = useParams();
//     const [candidate, setCandidate] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [jobs, setJobs] = useState([]); 
//     const [errors, setErrors] = useState({});

//     useEffect(() => {
//         fetch(`http://localhost:7000/candidates/find/${candidateID}`)
//             .then((response) => {
//                 if (!response.ok) throw new Error("Failed to fetch candidate details");
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Candidate Data:", data);
//                 setCandidate(data.candidate || {});
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching candidate:", error);
//                 setLoading(false);
//             });
//     }, [candidateID]);

//     useEffect(() => {
//         fetch("http://localhost:7000/jobs/all-jobs")
//             .then((response) => {
//                 if (!response.ok) throw new Error("Failed to fetch jobs");
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Jobs Data:", data);
//                 setJobs(data.jobs || []);
//             })
//             .catch((error) => console.error("Error fetching jobs:", error));
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setCandidate((prev) => ({ ...prev, [name]: value }));
//     };

//     const validateForm = () => {
//         const newErrors = {};

//         if (!candidate.status) newErrors.status = "Status is required.";
//         if (!candidate.AppliedAt) newErrors.AppliedAt = "Application date is required.";
//         if (!candidate.AppliedFor) newErrors.AppliedFor = "Job selection is required.";

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0; 
//     };

//     const handleSave = (e) => {
//         e.preventDefault();
//         if (!validateForm()) {
//             alert("Please fix the errors before saving.");
//             return;
//         }

//         fetch(`http://localhost:7000/candidates/update/${candidateID}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(candidate),
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     alert("Candidate updated successfully!");
//                     navigate("/candidate/viewCandidate");
//                 } else {
//                     alert("Error updating candidate.");
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error updating candidate:", error);
//                 alert("Failed to update candidate.");
//             });
//     };

//     const handleCancel = () => navigate("/candidate/viewCandidate");

//     if (loading) {
//         return <p>Loading Candidate Details...</p>;
//     }

//     return (
//         <>
//             <NavBar />
//             <div className="bg-container">
//             <div className="edit-candidate-container">
//                 <h2>EDIT CANDIDATE</h2>
//                 <form>
//                     <label>
//                         Status:
//                         <select
//                             name="status"
//                             value={candidate.status || ""}
//                             onChange={handleInputChange}
//                         >
//                             <option value="">Select Status</option>
//                             <option value="Applied">Applied</option>
//                             <option value="Interviewed">Interviewed</option>
//                             <option value="Hired">Hired</option>
//                         </select>
//                         {errors.status && <p className="error">{errors.status}</p>}
//                     </label>

//                     <label>
//                         Applied At:
//                         <input
//                             type="date"
//                             name="AppliedAt"
//                             value={candidate.AppliedAt || ""}
//                             onChange={handleInputChange}
//                         />
//                         {errors.AppliedAt && <p className="error">{errors.AppliedAt}</p>}
//                     </label>

//                     <label>
//                         Applied For:
//                         <select
//                             name="AppliedFor"
//                             value={candidate.AppliedFor || ""}
//                             onChange={handleInputChange}
//                         >
//                             <option value="">Select Job</option>
//                             {jobs.map((job) => (
//                                 <option key={job._id} value={job._id}>
//                                     {job.title}
//                                 </option>
//                             ))}
//                         </select>
//                         {errors.AppliedFor && <p className="error">{errors.AppliedFor}</p>}
//                     </label>

//                     {Object.keys(candidate)
//                         .filter((key) => !["status", "AppliedAt", "AppliedFor", "_id"].includes(key))
//                         .map((key) => (
//                             <label key={key}>
//                                 {key.charAt(0).toUpperCase() + key.slice(1)}:
//                                 <input
//                                     type="text"
//                                     name={key}
//                                     value={candidate[key] || ""}
//                                     onChange={handleInputChange}
//                                 />
//                             </label>
//                         ))}

//                     <button onClick={handleSave} className="btn-save">
//                         Save
//                     </button>
//                     <button onClick={handleCancel} className="btn-cancel">
//                         Cancel
//                     </button>
//                 </form>
//             </div>
//             </div>
//         </>
//     );
// };

// export default EditCandidate;













import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../../components/navbar/navbar";
import "./updateCandi.css";

const EditCandidate = () => {
    const navigate = useNavigate();
    const { candidateID } = useParams();
    const [candidate, setCandidate] = useState({});
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetch(`http://localhost:7000/candidates/find/${candidateID}`)
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch candidate details");
                return response.json();
            })
            .then((data) => {
                console.log("Candidate Data:", data);
                setCandidate({
                    ...data.candidate,
                    appliedAt: data.candidate.appliedAt?.split("T")[0],
                });
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching candidate:", error);
                setLoading(false);
            });
    }, [candidateID]);

    useEffect(() => {
        fetch("http://localhost:7000/jobs/all-jobs")
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch jobs");
                return response.json();
            })
            .then((data) => {
                console.log("Jobs Data:", data);
                setJobs(data.jobs || []);
            })
            .catch((error) => console.error("Error fetching jobs:", error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCandidate((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!candidate.name) newErrors.name = "Name is required.";
        if (!candidate.email) newErrors.email = "Email is required.";
        if (!candidate.resume) newErrors.resume = "Resume URL is required.";
        if (!candidate.status) newErrors.status = "Status is required.";
        if (!candidate.appliedAt) newErrors.appliedAt = "Application date is required.";
        if (!candidate.appliedFor) newErrors.appliedFor = "Job selection is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            alert("Please fix the errors before saving.");
            return;
        }

        fetch(`http://localhost:7000/candidates/update/${candidateID}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(candidate),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Candidate updated successfully!");
                    navigate("/candidate/viewCandidate");
                } else {
                    alert("Error updating candidate.");
                }
            })
            .catch((error) => {
                console.error("Error updating candidate:", error);
                alert("Failed to update candidate.");
            });
    };

    const handleCancel = () => navigate("/candidate/viewCandidate");

    if (loading) {
        return <p>Loading Candidate Details...</p>;
    }

    return (
        <>
            <NavBar />
            <div className="bg-container">
                <div className="edit-candidate-container">
                    <h2>Edit Candidate</h2>
                    <form>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={candidate.name || ""}
                                onChange={handleInputChange}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </label>

                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={candidate.email || ""}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </label>

                        <label>
                            Resume URL:
                            <input
                                type="url"
                                name="resume"
                                value={candidate.resume || ""}
                                onChange={handleInputChange}
                            />
                            {errors.resume && <p className="error">{errors.resume}</p>}
                        </label>

                        <label>
                            Status:
                            <select
                                name="status"
                                value={candidate.status || ""}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Status</option>
                                <option value="Applied">Applied</option>
                                <option value="Interviewed">Interviewed</option>
                                <option value="Hired">Hired</option>
                            </select>
                            {errors.status && <p className="error">{errors.status}</p>}
                        </label>

                        <label>
                            Applied At:
                            <input
                                type="date"
                                name="appliedAt"
                                value={candidate.appliedAt || ""}
                                onChange={handleInputChange}
                            />
                            {errors.appliedAt && <p className="error">{errors.appliedAt}</p>}
                        </label>

                        <label>
                            Applied For:
                            <select
                                name="appliedFor"
                                value={candidate.appliedFor || ""}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Job</option>
                                {jobs.map((job) => (
                                    <option key={job._id} value={job._id}>
                                        {job.title}
                                    </option>
                                ))}
                            </select>
                            {errors.appliedFor && <p className="error">{errors.appliedFor}</p>}
                        </label>

                        <button onClick={handleSave} className="btn-save">
                            Save
                        </button>
                        <button onClick={handleCancel} className="btn-cancel">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditCandidate;
