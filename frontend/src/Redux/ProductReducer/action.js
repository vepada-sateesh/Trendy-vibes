import * as types from "./actionType";
import axios from "axios";

const getProductsRequest = () => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  };
};

const getProducts =
  (params = {}) =>
  async (dispatch) => {
    dispatch(getProductsRequest());

    try {
      const r = await axios.get(
        "https://trendy-vibes-backend-production.up.railway.app/men/casual",
        {
          params: {
            category: params.category,
            // type: params.type,
            _page: params.page,
            limit: params.limit,
            sort: params.sort,
            discount: params.discount,
            minimum: params.min,
            maximum: params.max,
            brand: params.brand,
            search: params.search,
          },
        }
      );
      console.log(" ProductReducer/action.js: api response => ", r);
      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: r.data,
      });
    } catch (e) {
      console.log("error ", e);
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: e.message });
    }
  };

const setSingleProductDetails = (params) => (dispatch) => {
  dispatch({
    type: types.SET_SINGLE_PRODUCT_DETAILS,
    payload: params,
  });
};

export { getProducts, setSingleProductDetails };
