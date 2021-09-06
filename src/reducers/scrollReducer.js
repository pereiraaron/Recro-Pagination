import {
  PAGE_DATA_FAILURE,
  PAGE_DATA_REQUEST,
  PAGE_DATA_SUCCESS,
  UPDATE_NUMBER_OF_DETAILS,
  UPDATE_PAGE,
} from "../constants/pageConstants";

export const scrollReducer = (
  state = { pagedata: [], page: 1, numberOfDetails: 0, loading: true },
  action
) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return { ...state, page: state.page + 1 };
    case UPDATE_NUMBER_OF_DETAILS:
      return { ...state, numberOfDetails: state.numberOfDetails + 10 };
    case PAGE_DATA_REQUEST:
      return { ...state, loading: true };
    case PAGE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        pagedata: [...state.pagedata, ...action.payload],
      };
    case PAGE_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
