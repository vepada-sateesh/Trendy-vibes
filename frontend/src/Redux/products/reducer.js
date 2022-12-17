import {
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
} from "./actionTypes";

const initialState = {
  FaceProduct: { loading: false, error: false },
  Product: { loading: false, error: false },
  data: [],
};

export default function productsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        FaceProduct: { loading: true, error: false },
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        FaceProduct: { loading: false, error: false },
        data: payload.products,
      };

    case GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        FaceProduct: { loading: false, error: true },
      };

    default:
      return state;
  }
}
