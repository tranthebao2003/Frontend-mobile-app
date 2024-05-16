import { SHOW_KEYBOARD, HIDE_KEYBOARD } from "../types/TypesShowKeyboard"


export const showKeyBoardAction = () => {
    return{
        type: SHOW_KEYBOARD,
        payload: true
    }
}

export const hideKeyBoardAction = () => {
    return{
        type: HIDE_KEYBOARD,
        payload: false
    }
}