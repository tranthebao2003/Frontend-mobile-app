import { LOGIN, LOGOUT, LOGIN_ERROR} from "../types/TypesLogin"

const initialState = {
    authToken: null,
    message: ''
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, authToken: payload };
    case LOGOUT:
      return { ...state, authToken: payload };
    case LOGIN_ERROR:
      return { ...state, message: payload};
    default:
      return state;
  }
};