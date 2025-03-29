// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import './register.css';

// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [cPass, setCPass] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [isLoading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const [isShowPassword, setIsShowPassword] = useState(false);
//     const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

//     const toggleShowPassword = () => setIsShowPassword(!isShowPassword);
//     const toggleShowConfirmPassword = () => setIsShowConfirmPassword(!isShowConfirmPassword);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccess('');
//         setLoading(true);

//         if (!name || !email || !pass || !cPass) {
//             setError('Please fill all fields.');
//             setLoading(false);
//             return;
//         }
//         if (pass !== cPass) {
//             setError("Passwords do not match.");
//             setLoading(false);
//             return;
//         }
//         console.log({ name, email, pass });

//         try {
//             const response = await fetch('http://localhost:7000/admin/admin-register', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name, email, pass, cPass })
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setSuccess(data.message);

//                 setTimeout(() => {
//                     navigate('/login');
//                 }, 2000);

//             } else {
//                 setError(data.message || "Registration failed. Please try again.");
//             }
//         } catch (error) {
//             setError("Something went wrong. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="home-container">
//             <div className="content-wrapper">
//                 <div className="background-image"></div>
//                 <div className="register-form-wrapper">
//                     <div className="register-form">
//                         <form onSubmit={handleSubmit}>
//                             <h4 className="register-title">Sign up</h4>
                            
//                             {/* Error Message */}
//                             {error && <div className="error-message">{error}</div>}
//                             {success && <div className="success-message">{success}</div>}

//                             <div className="password-input-container">
//                                 <input
//                                     type="text"
//                                     placeholder="Name"
//                                     className="password-input"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                 />
//                             </div>
//                             <div className="password-input-container">
//                                 <input
//                                     type="text"
//                                     placeholder="Email"
//                                     className="password-input"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                             </div>
//                             <div className="password-input-container">
//                                 <input
//                                     type={isShowPassword ? 'text' : 'password'}
//                                     placeholder="Password"
//                                     className="password-input"
//                                     value={pass}
//                                     onChange={(e) => setPass(e.target.value)}
//                                 />
//                                 <span className="eye-icon" onClick={toggleShowPassword}>
//                                     {isShowPassword ? (
//                                         <i className="fa-solid fa-eye"></i>
//                                     ) : (
//                                         <i className="fa-solid fa-eye-slash"></i>
//                                     )}
//                                 </span>
//                             </div>
//                             <div className="password-input-container">
//                                 <input
//                                     type={isShowConfirmPassword ? 'text' : 'password'}
//                                     placeholder="Confirm Password"
//                                     className="password-input"
//                                     value={cPass}
//                                     onChange={(e) => setCPass(e.target.value)}
//                                 />
//                                 <span className="eye-icon" onClick={toggleShowConfirmPassword}>
//                                     {isShowConfirmPassword ? (
//                                         <i className="fa-solid fa-eye"></i>
//                                     ) : (
//                                         <i className="fa-solid fa-eye-slash"></i>
//                                     )}
//                                 </span>
//                             </div>
//                             <button type="submit" className="btn-primary" disabled={isLoading}>
//                                 {isLoading ? "Registering..." : "Register"}
//                             </button>
//                             <p className="login-link-text">
//                                 Already have an Account?{' '}
//                                 <Link to="/login">Login</Link>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;

































import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setCPass] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    const toggleShowPassword = () => setIsShowPassword(!isShowPassword);
    const toggleShowConfirmPassword = () => setIsShowConfirmPassword(!isShowConfirmPassword);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        if (!name || !email || !pass || !cPass) {
            setError('Please fill all fields.');
            setLoading(false);
            return;
        }
        if (pass !== cPass) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }
        console.log({ name, email, pass });

        try {
            const response = await fetch('http://localhost:7000/admin/admin-register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, pass, cPass })
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(data.message);

                setTimeout(() => {
                    navigate('/login');
                }, 2000);

            } else {
                setError(data.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
<div className="home-container">
    <div className="content-wrapper">
        <div className="background-image"></div>
        <div className="register-form-wrapper">
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                    <h4 className="register-title">Sign up</h4>
                    
                    
                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">{success}</div>}

                    <div className="password-input-container">
                        <input
                            type="text"
                            placeholder="Name"
                            className="password-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="password-input-container">
                        <input
                            type="text"
                            placeholder="Email"
                            className="password-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password-input-container">
                        <input
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="password-input"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <span className="eye-icon" onClick={toggleShowPassword}>
                            {isShowPassword ? (
                                <i className="fa-solid fa-eye"></i>
                            ) : (
                                <i className="fa-solid fa-eye-slash"></i>
                            )}
                        </span>
                    </div>
                    <div className="password-input-container">
                        <input
                            type={isShowConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            className="password-input"
                            value={cPass}
                            onChange={(e) => setCPass(e.target.value)}
                        />
                        <span className="eye-icon" onClick={toggleShowConfirmPassword}>
                            {isShowConfirmPassword ? (
                                <i className="fa-solid fa-eye"></i>
                            ) : (
                                <i className="fa-solid fa-eye-slash"></i>
                            )}
                        </span>
                    </div>
                    <button type="submit" className="btn-primary" disabled={isLoading}>
                        {isLoading ? "Registering..." : "Register"}
                    </button>
                    <p className="login-link-text">
                        Already have an Account?{' '}
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</div>

    );
};

export default Register;
