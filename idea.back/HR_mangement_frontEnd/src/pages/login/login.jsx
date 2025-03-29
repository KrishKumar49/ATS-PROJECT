// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import './login.css';

// const Login = () => {
//     const navigate = useNavigate();
//     const [isShowPassword, setIsShowPassword] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const toggleShowPassword = () => setIsShowPassword(!isShowPassword);

//     const validateEmail = (email) => {
//         const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//         return emailRegex.test(email);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess("");

//         if (!email || !password) {
//             setError("Please fill in all the fields.");
//             return;
//         }

//         if (!validateEmail(email)) {
//             setError("Please enter a valid email address.");
//             return;
//         }
//         try {
//             const response = await fetch("http://localhost:7000/admin/admin-login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ email, pass: password })
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setSuccess(data.message || "Login successful!");
//                 console.log("Login successful:", data);

//                 //token 
//                 localStorage.setItem("token", data.token);
//                 navigate("/");

//             } else {
//                 setError(data.message || "Login failed. Please try again.");
//             }
//         } catch (err) {
//             setError("An error occurred. Please try again later.");
//             console.error(err);
//         }
//     };

//     return (
//         <div className="login-page">
//             <div className="login-container">
//                 <div className="image-section"></div>
//                 <div className="form-section">
//                     <div className="form-container">
//                         <h1 className="form-title">Welcome Back</h1>
//                         <p className="form-subtitle">Please sign in to your account</p>

//                         <form onSubmit={handleSubmit}>
//                             <div className="input-container">
//                                 <input
//                                     type="email"
//                                     placeholder="Email Address"
//                                     className="input-field"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="input-container">
//                                 <input
//                                     type={isShowPassword ? "text" : "password"}
//                                     placeholder="Password"
//                                     className="input-field"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                                 <span
//                                     className="toggle-password"
//                                     onClick={toggleShowPassword}
//                                 >
//                                     {isShowPassword ? (
//                                         <i className="fa-solid fa-eye"></i>
//                                     ) : (
//                                         <i className="fa-solid fa-eye-slash"></i>
//                                     )}
//                                 </span>
//                             </div>

//                             {error && <div className="error-message">{error}</div>}
//                             {success && <div className="success-message">{success}</div>}

//                             <button type="submit" className="primary-button">
//                                 Sign In
//                             </button>
//                         </form>

//                         <p className="form-footer">
//                             Don’t have an account?{" "}
//                             <Link to="/register" className="register-link">
//                                 Register
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;














import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const toggleShowPassword = () => setIsShowPassword(!isShowPassword);

    const validateEmail = (email) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!email || !password) {
            setError("Please fill in all the fields.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        try {
            const response = await fetch("http://localhost:7000/admin/admin-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, pass: password })
            });
            
            const data = await response.json();

            if (response.ok) {
                setSuccess(data.message || "Login successful!");
                console.log("Login successful:", data);

                //token 
                localStorage.setItem("adminEmail", data.email);
                localStorage.setItem("token", data.token);
                localStorage.setItem("expiresIn", data.expiresIn)
                navigate("/");

            } else {
                setError(data.message || "Login failed. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
            console.error(err);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="image-section"></div>
                <div className="form-section">
                    <div className="form-container">
                        <h1 className="form-title">Welcome Back</h1>
                        <p className="form-subtitle">Please sign in to your account</p>

                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="input-field"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-container">
                                <input
                                    type={isShowPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="input-field"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="toggle-password"
                                    onClick={toggleShowPassword}
                                >
                                    {isShowPassword ? (
                                        <i className="fa-solid fa-eye"></i>
                                    ) : (
                                        <i className="fa-solid fa-eye-slash"></i>
                                    )}
                                </span>
                            </div>

                            {error && <div className="error-message">{error}</div>}
                            {success && <div className="success-message">{success}</div>}

                            <button type="submit" className="primary-button">
                                Sign In
                            </button>
                        </form>

                        <p className="form-footer">
                            Don’t have an account?{" "}
                            <Link to="/register" className="register-link">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
