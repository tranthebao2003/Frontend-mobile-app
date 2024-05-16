import { LOGIN, CHANGENAME, LOGOUT, GET_USER_SAMPLE } from "../types/TypesUser"


const initialState = {
    isSignedIn: false,
    userName: 'hahaha2',
    usersSample: []
}

export default (state = initialState, {type, payload}) => {
    switch(type){
        case LOGIN:
            return {...state, isSignedIn: payload}
        case LOGOUT:
            return {...state, isSignedIn: payload}
        case CHANGENAME:
            return {...state, userName: payload} 
        case GET_USER_SAMPLE:
            return {...state, usersSample: payload} 
    }
    return state
}