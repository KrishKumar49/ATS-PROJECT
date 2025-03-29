// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoutes = () => {
//     const user = localStorage.getItem("token");
//     return user ? <Outlet/> : <Navigate to='/login'/>
// }

// export default ProtectedRoutes






// import React from "react";
// import { Navigate } from "react-router-dom"

// const ProtectedRoute = ({ isAuthenticated, children }) => {
//     return isAuthenticated ? children : <Navigate to="/login"/>;
// };

// export default ProtectedRoute;





//----------------------------------------------------------didi--------------------------------------------------


// import React from "react";
// import { isTokenExpired } from "./tokenValid";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ isAuthenticated }) => {
//     const token = localStorage.getItem("token");
//     const isValidToken = token && !isTokenExpired(token);

//     return isAuthenticated && isValidToken ? <Outlet /> : <Navigate to='/login' />
// };

// export default ProtectedRoute;



//--------------------------------------------------------didi---------------------------------------------------------------




// import jwtDecode from "jwt-decode";
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// // Utility function to check if the token is expired
// const isTokenExpired = (token) => {
//     try {
//         const { exp } = jwtDecode(token); // Decode token and get expiration time
//         return exp * 1000 < Date.now();  // Check if expiration time is in the past
//     } catch (error) {
//         return true;
//     }
// };

// const ProtectedRoute = () => {
//     const token = localStorage.getItem("token");
//     const isValidToken = token && !isTokenExpired(token);
//     const { exp } = jwtDecode(token);
//     console.log(exp);

//     return isValidToken ? <Outlet /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;


import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const adminEmail = localStorage.getItem("adminEmail");
//   const adminEmail = JSON.parse(localStorage.getItem("adminEmail"));
  const token = localStorage.getItem("token");
  const expiresIn = localStorage.getItem("expiresIn");

  console.log("Token", token);
  console.log("adminEmail", adminEmail);

  const isTokenExpired = () => {
    if (!expiresIn) {
      localStorage.clear();
      return true;
    }
    const expiryDate = new Date(expiresIn);
    if (expiryDate < new Date()) {
      localStorage.clear();
      return true;
    }
    return false;
  };

  if (!adminEmail || !token || isTokenExpired()) {
    console.log("false condition");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;