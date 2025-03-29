// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './addCandi.css';
// import NavBar from "../../../components/navbar/navbar";

// const AddCandidate = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         status: 'Applied',
//         appliedAt: '',
//         appliedFor: '',
//         resume: ''
//     });

//     const [jobs, setJobs] = useState([]);
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch('http://localhost:7000/jobs');
//                 const data = await response.json();
//                 setJobs(data);
//             } catch (error) {
//                 console.error("Error fetching jobs:", error);
//             }
//         };
//         fetchJobs();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Form Data Before Submission:", formData);

//         try {
//             const response = await fetch('http://localhost:7000/candidates/add', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setMessage("Candidate added successfully!");
//                 console.log("Candidate added successfully:", data);
//                 alert('Candidate added successfully!');
//                 navigate('/candidate/viewCandidate'); // Redirect after successful submission
//             } else {
//                 setMessage("Error uploading candidate.");
//                 console.error("Error uploading candidate:", data);
//                 alert('Error uploading candidate.');
//             }
//         } catch (error) {
//             setMessage("Error uploading candidate.");
//             console.error("Error uploading candidate:", error);
//             alert('Error uploading candidate.');
//         }
//     };

//     return (
//         <>
//             <NavBar />
//             <div className="bg-container">
//                 <div className="add-candidate-container">
//                     <h2>ADD NEW CANDIDATE</h2>
//                     <form onSubmit={handleSubmit}>
//                         <label>
//                             Name:
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <label>
//                             Email:
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <label>
//                             Status:
//                             <select
//                                 name="status"
//                                 value={formData.status}
//                                 onChange={handleChange}
//                             >
//                                 <option value="Applied">Applied</option>
//                                 <option value="Interviewed">Interviewed</option>
//                                 <option value="Hired">Hired</option>
//                             </select>
//                         </label>
//                         <label>
//                             Applied At:
//                             <input
//                                 type="datetime-local"
//                                 name="appliedAt"
//                                 value={formData.appliedAt}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <label>
//                             Applied For:
//                             <select
//                                 name="appliedFor"
//                                 value={formData.appliedFor}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value={""}>Select Job</option>
//                                 {jobs.map((job) => (
//                                     <option key={job._id} value={job._id}>
//                                         {job.title}
//                                     </option>
//                                 ))}
//                             </select>
//                         </label>
//                         <label>
//                             Resume (URL):
//                             <input
//                                 type="text"
//                                 name="resume"
//                                 value={formData.resume}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <button type="submit" className="btn-submit">Add Candidate</button>
//                     </form>
//                     <p>{message}</p>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AddCandidate;







//----------------------------------------------------------original-------------------------------------------------------------------












// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './addCandi.css';
// import NavBar from "../../../components/navbar/navbar";

// const AddCandidate = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         status: 'Applied',
//         appliedAt: '',
//         appliedFor: '',
//         resume: ''
//     });

//     const [jobs, setJobs] = useState([]);
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch('http://localhost:7000/jobs');
//                 const data = await response.json();
//                 setJobs(data);
//             } catch (error) {
//                 console.error("Error fetching jobs:", error);
//             }
//         };
//         fetchJobs();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission behavior
//         try {
//             const adminEmail = localStorage.getItem("adminEmail"); // Retrieve adminEmail from localStorage
//             console.log(adminEmail);
//             if (!adminEmail) {
//                 setMessage("Admin email is not found in localStorage.");
//                 return;
//             }
//             console.log(formData.email);
//             const response = await fetch("http://localhost:7000/candidates/add", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "admin-email": adminEmail,
//                 },
//                 body: JSON.stringify({
//                     name: formData.name,
//                     email: formData.email,
//                     status: formData.status,
//                     appliedAt: formData.appliedAt || new Date().toISOString(),
//                     appliedFor: formData.appliedFor,
//                     resume: formData.resume,
//                 }),
//             });
            
//             if (!response.ok) {
//                 const errorData = await response.json();
//                 setMessage(`Error: ${errorData.error}`);
//                 return;
//             }
    
//             const data = await response.json();
//             setMessage("Candidate added successfully!");
//             console.log("Candidate added:", data);
//             // Optionally, navigate or reset form
//             setFormData({
//                 name: "",
//                 email: "",
//                 status: "Applied",
//                 appliedAt: "",
//                 appliedFor: "",
//                 resume: "",
//             });
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             setMessage("An error occurred while adding the candidate.");
//         }
//     };
    
    

//     return (
//         <>
//             <NavBar />
//             <div className="bg-container">
//                 <div className="add-candidate-container">
//                     <h2>ADD NEW CANDIDATE</h2>
//                     <form onSubmit={handleSubmit}>
//                         <label>
//                             Name:
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <label>
//                             Email:
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <label>
//                             Status:
//                             <select
//                                 name="status"
//                                 value={formData.status}
//                                 onChange={handleChange}
//                             >
//                                 <option value="Applied">Applied</option>
//                                 <option value="Interviewed">Interviewed</option>
//                                 <option value="Hired">Hired</option>
//                             </select>
//                         </label>
//                         <label>
//                             Applied At:
//                             <input
//                                 type="datetime-local"
//                                 name="appliedAt"
//                                 value={formData.appliedAt}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <label>
//                             Applied For:
//                             <select
//                                 name="appliedFor"
//                                 value={formData.appliedFor}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value={""}>Select Job</option>
//                                 {jobs.map((job) => (
//                                     <option key={job._id} value={job._id}>
//                                         {job.title}
//                                     </option>
//                                 ))}
//                             </select>
//                         </label>
//                         <label>
//                             Resume (URL):
//                             <input
//                                 type="text"
//                                 name="resume"
//                                 value={formData.resume}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <button type="submit" className="btn-submit">Add Candidate</button>
//                     </form>
//                     <p>{message}</p>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AddCandidate;










































import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './addCandi.css';
import NavBar from "../../../components/navbar/navbar";

const AddCandidate = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        status: 'Applied',
        appliedAt: '',
        appliedFor: '',
        resume: ''
    });

    const [jobs, setJobs] = useState([]);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:7000/jobs');
                const data = await response.json();
                setJobs(data);
                console.log("Jobs fetched successfully:", data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setMessage("Failed to load job data.");
            }
        };
        fetchJobs();
    }, []);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(`Updated field '${name}': ${value}`);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data Before Submission:", formData);

        
        if (!formData.name || !formData.email || !formData.appliedFor || !formData.resume) {
            setMessage("All fields are required.");
            console.log("Validation Failed: Missing required fields.");
            return;
        }

        
        const adminEmail = localStorage.getItem("adminEmail");
        console.log("Admin Email Retrieved from LocalStorage:", adminEmail);

        if (!adminEmail) {
            setMessage("Admin email is missing. Please log in again.");
            console.error("Error: Admin email not found in localStorage.");
            return;
        }

        try {
            const response = await fetch('http://localhost:7000/candidates/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'AdminEmail': adminEmail, 
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Candidate added successfully!");
                console.log("Candidate added successfully:", data);
                alert('Candidate added successfully!');
                navigate('/candidate/viewCandidate'); 
            } else {
                setMessage(data.message || "Error uploading candidate.");
                console.error("Server Error:", data);
                alert(data.message || 'Error uploading candidate.');
            }
        } catch (error) {
            setMessage("Error uploading candidate.");
            console.error("Network Error:", error);
            alert('Error uploading candidate.');
        }
    };

    return (
        <>
            <NavBar />
            <div className="bg-container">
                <div className="add-candidate-container">
                    <h2>ADD NEW CANDIDATE</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Status:
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="Applied">Applied</option>
                                <option value="Interviewed">Interviewed</option>
                                <option value="Hired">Hired</option>
                            </select>
                        </label>
                        <label>
                            Applied At:
                            <input
                                type="datetime-local"
                                name="appliedAt"
                                value={formData.appliedAt}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Applied For:
                            <select
                                name="appliedFor"
                                value={formData.appliedFor}
                                onChange={handleChange}
                                required
                            >
                                <option value={""}>Select Job</option>
                                {jobs.map((job) => (
                                    <option key={job._id} value={job._id}>
                                        {job.title}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Resume (URL):
                            <input
                                type="text"
                                name="resume"
                                value={formData.resume}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button type="submit" className="btn-submit">Add Candidate</button>
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </>
    );
};

export default AddCandidate;
