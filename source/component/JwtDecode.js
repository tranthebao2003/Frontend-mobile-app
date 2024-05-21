// import jwt from 'jsonwebtoken'
// import * as jose from 'jose'
import {jwtDecode} from "jwt-decode";



const HandelJwtDecode = (token) => {
    try {
        // Remove 'JWT ' prefix from the token string if it exists
        
            let tokenFormat = token.slice(4);
            console.log(tokenFormat, 'màn jwtdecode')
            const decoded = jwtDecode(tokenFormat);
            // console.log('decode: ', decoded);

            // const decodedHeader = jwtDecode(token);
            // console.log(decodedHeader);
        
  
        // Verify and decode the token using the secret key
       
        return {
            success: true,
            data: decoded
        };
    } catch (err) {
        // Handle errors: invalid token, token expired, etc.
        return {
            success: false,
            message: err
        };
    }
  }


// const HandelJwtDecode = (token) => {
//     try {
//         // Remove 'JWT ' prefix from the token string if it exists
        
//             let tokenFormat = token.slice(4);
//             const protectedHeader = jose.decodeJwt(tokenFormat)
//             console.log(protectedHeader)
       
//         return {
//             success: true,
//             data: protectedHeader
//         };
//     } catch (err) {
//         // Handle errors: invalid token, token expired, etc.
//         return {
//             success: false,
//             message: err
//         };
//     }
//   }
  
  
   
  export default HandelJwtDecode 
