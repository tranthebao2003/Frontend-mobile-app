import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from "../types/TypesLogin"

const initialState = {
    loading: false,
    token: null,
    role: null,
    error: null
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
        token: payload.token,
        role: payload.role,
      };

    case LOGIN_FAILURE:
      return { ...state, loading: false, error: payload };

    case LOGOUT:
      return { ...state, token: null, role: null };
      
    default:
      return state;
  }
};