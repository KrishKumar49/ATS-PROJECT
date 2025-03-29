// import {jwt_decode } from 'jwt-decode'

// export const isTokenExpired = (token) => {
//     try {
//         const decode = jwt_decode(token);
//         const currentTime = Date.now() / 100;
//         return decode.exp < currentTime;
//     }
//     catch (error) {
//         return true;
//     }
// }















//---------------------------------------------------didi-----------------------------------------

// import jwt from 'jsonwebtoken';

// export const isTokenExpired = (token) =>{
//     const token = localStorage.getItem('your-token');
//     const decoded = jwt.decode(token);
//     console.log(decoded);
    
//     // token = localStorage.getItem('your-token');
//     const secretKey = 'your-secret-key';
    
//     try {
//         const verified = jwt.verify(token, secretKey);
//         console.log(verified); // This contains the decoded payload
//     } catch (err) {
//         console.error('Invalid token:', err.message);
//     }
// }

//-------------------------------------------------------------didi--------------------------------------------------------------

