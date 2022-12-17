import * as types from "./actionType";
import axios from "axios"

const getProductsRequest = () =>{
    return{
        type: types.GET_PRODUCTS_REQUEST
    }
}


const getProducts = (params ={}) => (dispatch) => {
    dispatch(getProductsRequest());

    return axios.get("https://fakestoreapi.com/products", 
    {params: {
        category:params.category,
        type: params.type,
        _page: params.page,
        _limit: params.limit,
        _sort: params.sort,
        _order: params.order
      }})
    .then(r=> {
         console.log(" ProductReducer/action.js: api response => ", r)
        dispatch({
            type:types.GET_PRODUCTS_SUCCESS,
            payload:r
        })
    })
    .catch(e=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE})
    })
}

export {getProducts}