import axios from "axios"
import { LOGIN, LOGOUT } from "../types/TypesUser"
// import AsyncStorage from "@react-native-async-storage/async-storage"

// export const LoginAction = async (username, password) => {
//     return async (dispatch) => {
//         let token = username+password
//         await AsyncStorage.setItem('token', token)
//         console.log('token stored')
//         dispatch({
//             type: LOGIN,
//             payload: token
//         })
//     }
// }

// hàm này là hàm không đồng bộ nó sẽ nhận dispatch như 1 tham số để nó sẽ chờ
// api trả về token sau đó dispatch này sẽ gửi object chứ type và token đó lên store
export const LoginAction = (userName, password) => {
   return (dispatch) => {
    axios.post('https://quanlyhoatdongsinhvienptit.onrender.com/api/v1/auth/login', {
        "username": userName,
        "password": password
    })
    .then(res => {
        const {token} = res.data
        dispatch(
            {
                type: LOGIN,
                payload: token
            }
        )
    })
    .catch(error => {
        dispatch(
            console.log(`Login error ${error}`)
        )
    })
   }
}

export const LogoutAction = () => {
    return{
        type: LOGOUT,
        payload: null
    }
}



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