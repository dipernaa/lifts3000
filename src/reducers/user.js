import { GET_USER } from '../constants/actionTypes';

export const initialState = {
  isLoading: false,
  userData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER.request:
      return {
        ...state,
        isLoading: true
      };

    case GET_USER.failure:
      return {
        ...state,
        isLoading: false
      };

    case GET_USER.success:
      return {
        ...state,
        userData: action.data,
        isLoading: false
      };

    default:
      return state;
  }
};
