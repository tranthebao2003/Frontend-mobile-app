import axios from "axios"

// export const getUserBooks = (username, password) => {
//     return async (dispatch) => {
//         try{
//             const {data} = await axios.post(
//                 'https://quanlyhoatdongsinhvienptit.onrender.com/api/v1/auth/login',
//                 {
//                     username: username,
//                     password: password
//                 }
//             )

//             // đây là hàm bất đồng bộ vì ko biết khi nào sever trả về data
//             // nên ta sẽ dùng hàm này, khi trả về data thì
//             // sẽ gọi dispatch để return về type và payload chứa data
//             dispatch({
//                 type: GET_USER_SAMPLE,
//                 payload: data
//             })
//         }
//         catch(error){
//             console.log(error)
//         }
//     }
// }