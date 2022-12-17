import axios from "axios";
import {
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
} from "./actionTypes";

export const getAllProducts = (query) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
    let q = "";
    for (let key in query) {
      q += `${key}=${query[key]}&`;
    }

    // const res = await axios.get(
    //   "https://trendy-vibes-backend-production.up.railway.app/product"
    // );
    const res = await axios.get("https://shopaholic.onrender.com/product");
    // const res = await axios.get(`https://shopaholic.onrender.com/product?${q}`);

    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAILURE,
    });
  }
};
