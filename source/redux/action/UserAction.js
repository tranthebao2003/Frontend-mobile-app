import axios from "axios"
import { LOGIN, CHANGENAME, LOGOUT, GET_USER_SAMPLE} from "../types/TypesUser"

export const loginAction = () => {
    return{
        type: LOGIN,
        payload: true
    }
}

export const logoutAction = () => {
    return{
        type: LOGOUT,
        payload: false
    }
}

export const changeNameAction = (userName) => {
    return{
        type: CHANGENAME,
        payload: userName
    }
}


export const getUserBooks = () => {
    return async (dispatch) => {
        try{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/albums')

            // đây là hàm bất đồng bộ vì ko biết khi nào sever trả về data
            // nên ta sẽ dùng hàm này, khi trả về data thì
            // sẽ gọi dispatch để return về type và payload chứa data
            dispatch({
                type: GET_USER_SAMPLE,
                payload: data
            })
        }
        catch(error){
            console.log(error)
        }
    }
}