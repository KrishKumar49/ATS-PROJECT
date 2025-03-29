import React, { useState } from "react";
import NavBar from "../../../components/navbar/navbar";
import './addJob.css'
import { useNavigate } from "react-router-dom";


const AddJob = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        jobTitle: '',
        description: '',
        requirements: [],
        postedAt: new Date().toISOString().split('T')[0],
        status: 'Draft',
        openPosition: 1
    });

    const [requirementsInput, setRequirementsInput] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ 
            ...formData, 
            [name]: name === 'openPosition' ? parseInt(value) : value 
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.requirements.length === 0) {
            alert('Please add at least one requirement.');
            return;
        }
        const jobData = {
            title: formData.jobTitle,
            description: formData.description,
            requirements: formData.requirements,
            postedAt: formData.postedAt,
            status: formData.status,
            openPosition: formData.openPosition
        };
        console.log("Payload being sent:", jobData);
        fetch("http://localhost:7000/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Admin-Email": "admin@example.com",
            },
            body: JSON.stringify(jobData),
        })
        .then((response) => {
            if (response.ok) {
                alert("Job added successfully!");
                navigate('/job');
            } else {
                alert("Failed to add job.");
            }
        })
        .catch((error) => console.error("Error submitting job:", error));
    };
    

    const handleRequirementsChange = (e) => {
        setRequirementsInput(e.target.value);
    };

    const addRequirement = () => {
        if (requirementsInput.trim() !== '') {
            setFormData({
                ...formData,
                requirements: [...formData.requirements, requirementsInput],
            });
            setRequirementsInput('');
        }
    };

    const removeRequirement = (indexToRemove) => {
        setFormData({
            ...formData,
            requirements: formData.requirements.filter((_, index) => index !== indexToRemove),
        });
    };

    return (
        <>
        <NavBar/>
        <div className="bg-container-add-job">
        <div className="add-job-container">
            <h2>ADD NEW JOB</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    JOB TITLE:
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                </label>
                <label>
                    DESCRIPTION:
                    <input type="text" name="description" value={formData.description} onChange={handleChange} required />
                </label>
                <label>
                    REQUIREMENTS:
                    <input
                        type="text"
                        value={requirementsInput}
                        onChange={handleRequirementsChange}
                        placeholder="Enter a requirement"
                    />
                    <button type="button" onClick={addRequirement}>Add</button>
                </label>
                <ul>
                    {formData.requirements.map((req, index) => (
                        <li key={index}>
                            {req}
                            <button type="button" onClick={() => removeRequirement(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <label>
                    POSTED AT:
                    <input type="date" name="postedAt" value={formData.postedAt} onChange={handleChange} />
                </label>
                <label>
                    STATUS:
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="Draft">Draft</option>
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                    </select>
                </label>
                <label>
                    OPEN POSITIONS:
                    <input
                        type="number"
                        name="openPosition"
                        value={formData.openPosition}
                        onChange={handleChange}
                        min="0"
                    />
                </label>
                <button type="submit" className="btn-submit">Submit</button>
            </form>
        </div>
        </div>
        </>
    );
};

export default AddJob;















//-----------------------------------------------original-------------------------------------------







// import React, { useState } from "react";
// import NavBar from "../../../components/navbar/navbar";
// import './addJob.css';
// import { useNavigate } from "react-router-dom";

// const AddJob = () => {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         jobTitle: '',
//         description: '',
//         requirements: [],
//         postedAt: new Date().toISOString().split('T')[0],
//         status: 'Draft',
//         openPosition: 1,
//     });

//     const [requirementsInput, setRequirementsInput] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: name === 'openPosition' ? parseInt(value, 10) : value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (formData.requirements.length === 0) {
//             alert('Please add at least one requirement.');
//             return;
//         }

//         const adminEmail = localStorage.getItem('email');
//         if (!adminEmail) {
//             alert("Admin email not found. Please log in again.");
//             navigate('/login');
//             return;
//         }

//         const jobData = {
//             title: formData.jobTitle,
//             description: formData.description,
//             requirements: formData.requirements,
//             postedAt: formData.postedAt,
//             status: formData.status,
//             openPosition: formData.openPosition,
//         };

//         console.log("Payload being sent:", jobData);

//         fetch("http://localhost:7000/jobs", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Admin-Email": adminEmail,
//             },
//             body: JSON.stringify(jobData),
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     alert("Job added successfully!");
//                     navigate('/job');
//                 } else {
//                     response.json().then((data) => {
//                         console.error("Server response error:", data);
//                         alert(data.message || "Failed to add job.");
//                     });
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error submitting job:", error);
//                 alert("An unexpected error occurred. Please try again later.");
//             });
//     };

//     const handleRequirementsChange = (e) => {
//         setRequirementsInput(e.target.value);
//     };

//     const addRequirement = () => {
//         const trimmedInput = requirementsInput.trim();
//         if (trimmedInput === '') {
//             alert('Requirement cannot be empty.');
//             return;
//         }
//         if (formData.requirements.includes(trimmedInput)) {
//             alert('This requirement already exists.');
//             return;
//         }
//         setFormData({
//             ...formData,
//             requirements: [...formData.requirements, trimmedInput],
//         });
//         setRequirementsInput('');
//     };

//     const removeRequirement = (indexToRemove) => {
//         setFormData({
//             ...formData,
//             requirements: formData.requirements.filter((_, index) => index !== indexToRemove),
//         });
//     };

//     return (
//         <>
//             <NavBar />
//             <div className="bg-container-add-job">
//                 <div className="add-job-container">
//                     <h2>ADD NEW JOB</h2>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="jobTitle">
//                             JOB TITLE:
//                             <input
//                                 id="jobTitle"
//                                 type="text"
//                                 name="jobTitle"
//                                 value={formData.jobTitle}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <label htmlFor="description">
//                             DESCRIPTION:
//                             <input
//                                 id="description"
//                                 type="text"
//                                 name="description"
//                                 value={formData.description}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <label htmlFor="requirements">
//                             REQUIREMENTS:
//                             <input
//                                 id="requirements"
//                                 type="text"
//                                 value={requirementsInput}
//                                 onChange={handleRequirementsChange}
//                                 placeholder="Enter a requirement"
//                             />
//                             <button type="button" onClick={addRequirement}>
//                                 Add
//                             </button>
//                         </label>
//                         <ul>
//                             {formData.requirements.map((req, index) => (
//                                 <li key={index}>
//                                     {req}
//                                     <button type="button" onClick={() => removeRequirement(index)}>
//                                         Remove
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                         <label htmlFor="postedAt">
//                             POSTED AT:
//                             <input
//                                 id="postedAt"
//                                 type="date"
//                                 name="postedAt"
//                                 value={formData.postedAt}
//                                 onChange={handleChange}
//                             />
//                         </label>
//                         <label htmlFor="status">
//                             STATUS:
//                             <select
//                                 id="status"
//                                 name="status"
//                                 value={formData.status}
//                                 onChange={handleChange}
//                             >
//                                 <option value="Draft">Draft</option>
//                                 <option value="Open">Open</option>
//                                 <option value="Closed">Closed</option>
//                             </select>
//                         </label>
//                         <label htmlFor="openPosition">
//                             OPEN POSITIONS:
//                             <input
//                                 id="openPosition"
//                                 type="number"
//                                 name="openPosition"
//                                 value={formData.openPosition}
//                                 onChange={handleChange}
//                                 min="0"
//                             />
//                         </label>
//                         <button type="submit" className="btn-submit">
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AddJob;












//==------------------------------original=-------------------------------------------------------------------







// import React, { useState } from "react";
// import NavBar from "../../../components/navbar/navbar";
// import './addJob.css'
// import { useNavigate } from "react-router-dom";


// const AddJob = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         jobTitle: '',
//         description: '',
//         requirements: [],
//         postedAt: new Date().toISOString().split('T')[0],
//         status: 'Draft',
//         openPosition: 1
//     });

//     const [requirementsInput, setRequirementsInput] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ 
//             ...formData, 
//             [name]: name === 'openPosition' ? parseInt(value) : value 
//         });
//     };
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Form Data Before Submission:", candidateData); // Log candidate data
    
//         try {
//             const token = localStorage.getItem('adminToken');
//             if (!token) {
//                 return alert('Please log in first.');
//             }
    
//             const response = await axios.post(
//                 'http://localhost:7000/candidates/add',
//                 candidateData,
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     }
//                 }
//             );
//             console.log('Response:', response.data); // Log the response
//             // Handle success
//         } catch (error) {
//             console.error('Error uploading candidate:', error.response?.data?.message || error.message);
//             alert('Error uploading candidate'); // Show more specific error message
//         }
//     };
    
    

//     const handleRequirementsChange = (e) => {
//         setRequirementsInput(e.target.value);
//     };

//     const addRequirement = () => {
//         if (requirementsInput.trim() !== '') {
//             setFormData({
//                 ...formData,
//                 requirements: [...formData.requirements, requirementsInput],
//             });
//             setRequirementsInput('');
//         }
//     };

//     const removeRequirement = (indexToRemove) => {
//         setFormData({
//             ...formData,
//             requirements: formData.requirements.filter((_, index) => index !== indexToRemove),
//         });
//     };

//     return (
//         <>
//         <NavBar/>
//         <div className="bg-container-add-job">
//         <div className="add-job-container">
//             <h2>ADD NEW JOB</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     JOB TITLE:
//                     <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     DESCRIPTION:
//                     <input type="text" name="description" value={formData.description} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     REQUIREMENTS:
//                     <input
//                         type="text"
//                         value={requirementsInput}
//                         onChange={handleRequirementsChange}
//                         placeholder="Enter a requirement"
//                     />
//                     <button type="button" onClick={addRequirement}>Add</button>
//                 </label>
//                 <ul>
//                     {formData.requirements.map((req, index) => (
//                         <li key={index}>
//                             {req}
//                             <button type="button" onClick={() => removeRequirement(index)}>Remove</button>
//                         </li>
//                     ))}
//                 </ul>
//                 <label>
//                     POSTED AT:
//                     <input type="date" name="postedAt" value={formData.postedAt} onChange={handleChange} />
//                 </label>
//                 <label>
//                     STATUS:
//                     <select name="status" value={formData.status} onChange={handleChange}>
//                         <option value="Draft">Draft</option>
//                         <option value="Open">Open</option>
//                         <option value="Closed">Closed</option>
//                     </select>
//                 </label>
//                 <label>
//                     OPEN POSITIONS:
//                     <input
//                         type="number"
//                         name="openPosition"
//                         value={formData.openPosition}
//                         onChange={handleChange}
//                         min="0"
//                     />
//                 </label>
//                 <button type="submit" className="btn-submit">Submit</button>
//             </form>
//         </div>
//         </div>
//         </>
//     );
// };

// export default AddJob;






















