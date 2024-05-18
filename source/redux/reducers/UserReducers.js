import { LOGIN, LOGOUT} from "../types/TypesUser"

const initialState = {
    authToken: null,
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, authToken: payload };
    case LOGOUT:
      return { ...state, authToken: payload };
    default:
      return state;
  }
};