import axios from "axios";
import {
  PAGE_DATA_FAILURE,
  PAGE_DATA_REQUEST,
  PAGE_DATA_SUCCESS,
  UPDATE_NUMBER_OF_DETAILS,
  UPDATE_PAGE,
} from "../constants/pageConstants";

export const updatePage = () => (dispatch) => {
  dispatch({
    type: UPDATE_PAGE,
  });
};
export const updateNumberOfDetails = () => (dispatch) => {
  dispatch({
    type: UPDATE_NUMBER_OF_DETAILS,
  });
};

export const fetchData = (numberOfDetails) => async (dispatch) => {
  try {
    dispatch({ type: PAGE_DATA_REQUEST });
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${numberOfDetails}&_limit=10`
    );
    console.log(data.length);
    dispatch({ type: PAGE_DATA_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PAGE_DATA_FAILURE,
      payload: error.response,
    });
  }
};
