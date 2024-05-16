import { SHOW_KEYBOARD, HIDE_KEYBOARD } from "../types/TypesShowKeyboard"


const initialState = {
    showKeyBoard: false,
}

export default (state = initialState, {type, payload}) => {
    switch(type){
        case SHOW_KEYBOARD:
            return {...state, showKeyBoard: payload}
        case HIDE_KEYBOARD:
            return {...state, showKeyBoard: payload}
    }
    return state
}