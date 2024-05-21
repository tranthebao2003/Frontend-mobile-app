import {
  INFO_USER_REQUEST,
  INFO_USER_SUCCESS,
  INFO_USER_FAILURE,
} from "../types/TypesInfoUser";

const initialState = {
  loading: false,
  user: {},
  error: "",

  // MSSV : "N21DCAT005111a",
  // first_name : "Nguyễn Trần Hùng",
  // last_name : "Biện",
  // phone : "0384616327",
  // address: "Bình ĐỊnh",
  // class_id: "N20DCAT1",
  // mail : "bluephoenix7193@gmail.com",
  // gender_id : "1",
  // birth_date : "1990-01-01"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INFO_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INFO_USER_SUCCESS:
      return {
        loading: false,
        user: payload,
        error: "",
      };
    case INFO_USER_FAILURE:
      return {
        loading: false,
        user: {},
        error: payload,
      };
  }
  return state;
};
