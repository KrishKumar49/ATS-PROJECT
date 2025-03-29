// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import "./profile.css";

// const Profile = () => {
//     const { id } = useParams();
//     const [profile, setProfile] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const response = await fetch(`http://localhost:7000/admin/getDetail/${email}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch profile data');
//                 }
//                 const data = await response.json();
//                 setProfile(data);
//             } catch (error) {
//                 console.error('Error fetching profile details:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
    
//         fetchProfile();
//     }, [id]);
    

//     if (loading) return <p>loading details...<i class="fa-solid fa-spinner fa-spin"></i></p>

//     return (
//         <>
//             <div className="profile-container">
//                 {profile ? (
//                     <>  
//                         <h2>PROFILE DETAIL</h2>
//                         <div className="profile-image">
//                             <img src={profile.imageUrl || 'data:image/png;base64,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'} alt={`${profile.name}'s profile`} />
//                         </div>
//                         <div className="profile-detail">
//                             <p><strong>Name:</strong> {profile.name}</p>
//                             <p><strong>Email:</strong> {profile.email}</p>
//                             <Link to='/login'>
//                                 <button type="button" className="btn-logout">
//                                     Logout
//                                 </button>
//                             </Link>
//                         </div>
//                     </>
//                 ) : (
//                     <p>Profile not Found</p>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Profile;









// import React, { useEffect, useState } from "react";

// const Profile = () => {
//     const [admin, setAdmin] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const email = localStorage.getItem("email");

//     useEffect(() => {
//         if (email) {
//             fetchAdminProfile();
//         } else {
//             setLoading(false);
//             setError("No email found in local storage.");
//         }
//     }, [email]);

//     const fetchAdminProfile = async () => {
//         try {
//             const response = await fetch(`http://localhost:7000/admin/getDetail/${email}`);
//             if (!response.ok) {
//                 throw new Error(`Failed to fetch admin profile: ${response.statusText}`);
//             }
//             const data = await response.json();
//             setAdmin(data);
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (loading) return <p>Loading...</p>;

//     if (error) return <p className="error">{error}</p>;

//     return (
//         <div className="admin-profile">
//             <h2>Admin Profile</h2>
//             <p>
//                 <strong>Name:</strong> {admin.name}
//             </p>
//             <p>
//                 <strong>Email:</strong> {admin.email}
//             </p>
//             <p>
//                 <strong>Account Created:</strong> {new Date(admin.createdAt).toLocaleString()}
//             </p>
//             <p>
//                 <strong>Last Updated:</strong> {new Date(admin.updatedAt).toLocaleString()}
//             </p>
//         </div>
//     );
// };

// export default Profile;
















// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//     const [admin, setAdmin] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [bgColor, setBgColor] = useState(""); // Background color for the profile icon
//     const navigate = useNavigate();

//     const email = localStorage.getItem("email");

//     useEffect(() => {
//         if (email) {
//             fetchAdminProfile();
//             generateRandomBgColor();
//         } else {
//             setLoading(false);
//             setError("No email found in local storage.");
//         }
//     }, [email]);

//     const fetchAdminProfile = async () => {
//         try {
//             const response = await fetch(`http://localhost:7000/admin/getDetail/${email}`);
//             if (!response.ok) {
//                 throw new Error(`Failed to fetch admin profile: ${response.statusText}`);
//             }
//             const data = await response.json();
//             setAdmin(data);
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const generateRandomBgColor = () => {
//         const colors = [
//             "#FF5733", "#33FF57", "#3357FF", "#FFC300", "#C70039", 
//             "#900C3F", "#581845", "#1F618D", "#28B463", "#8E44AD"
//         ];
//         const randomColor = colors[Math.floor(Math.random() * colors.length)];
//         setBgColor(randomColor);
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("email"); // Clear email from local storage
//         navigate("/login"); // Redirect to login page
//     };

//     if (loading) return <p>Loading...</p>;

//     if (error) return <p className="error">{error}</p>;

//     return (
//         <div className="admin-profile">
//             <h2>Admin Profile</h2>
//             <div className="profile-header" style={{ display: "flex", alignItems: "center" }}>
//                 {/* Profile Icon */}
//                 <div
//                     className="profile-icon"
//                     style={{
//                         backgroundColor: bgColor,
//                         color: "#fff",
//                         borderRadius: "50%",
//                         width: "50px",
//                         height: "50px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: "20px",
//                         fontWeight: "bold",
//                         marginRight: "15px",
//                     }}
//                 >
//                     {admin.name.charAt(0).toUpperCase()}
//                 </div>
//                 {/* Admin Info */}
//                 <div>
//                     <p><strong>Name:</strong> {admin.name}</p>
//                     <p><strong>Email:</strong> {admin.email}</p>
//                     <p>
//                         <strong>Account Created:</strong> {new Date(admin.createdAt).toLocaleString()}
//                     </p>
//                     <p>
//                         <strong>Last Updated:</strong> {new Date(admin.updatedAt).toLocaleString()}
//                     </p>
//                 </div>
//             </div>
//             {/* Logout Button */}
//             <button
//                 onClick={handleLogout}
//                 style={{
//                     marginTop: "20px",
//                     padding: "10px 20px",
//                     backgroundColor: "#FF5733",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                 }}
//             >
//                 Logout
//             </button>
//         </div>
//     );
// };

// export default Profile;



















import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css"; 

const Profile = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bgColor, setBgColor] = useState(""); 
    const navigate = useNavigate();

    const email = localStorage.getItem("adminEmail");

    useEffect(() => {
        if (email) {
            fetchAdminProfile();
            generateRandomBgColor();
        } else {
            setLoading(false);
            setError("No email found in local storage.");
        }
    }, [email]);

    const fetchAdminProfile = async () => {
        try {
            const response = await fetch(`http://localhost:7000/admin/getDetail/${email}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch admin profile: ${response.statusText}`);
            }
            const data = await response.json();
            setAdmin(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const generateRandomBgColor = () => {
        const colors = [
            "#FF5733", "#33FF57", "#3357FF", "#FFC300", "#C70039", 
            "#900C3F", "#581845", "#1F618D", "#28B463", "#8E44AD"
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
    };

    const handleLogout = () => {
        localStorage.removeItem("email"); 
        navigate("/login");
    };

    if (loading) return <p className="loading">Loading...</p>;

    if (error) return <p className="error">{error}</p>;

    return (
        <div className="profile-page">
            <h2 className="profile-title">Admin Profile</h2>
            <div className="profile-header">
                <div
                    className="profile-icon"
                    style={{ backgroundColor: bgColor }}
                >
                    {admin.name.charAt(0).toUpperCase()}
                </div>
                <div className="profile-details">
                    <p><strong>Name:</strong> {admin.name}</p>
                    <p><strong>Email:</strong> {admin.email}</p>
                    <p><strong>Account Created:</strong> {new Date(admin.createdAt).toLocaleString()}</p>
                    <p><strong>Last Updated:</strong> {new Date(admin.updatedAt).toLocaleString()}</p>
                </div>
            </div>
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Profile;
