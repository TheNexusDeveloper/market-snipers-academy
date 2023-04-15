import axios from 'axios'
import { 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL, 

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,

    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,

    ORDERITEM_LIST_REQUEST,
    ORDERITEM_LIST_SUCCESS,
    ORDERITEM_LIST_FAIL,

    ORDERITEM_PAY_REQUEST,
    ORDERITEM_PAY_SUCCESS,
    ORDERITEM_PAY_FAIL,
    
    
 } from '../constants/orderConstants' 

 import { CART_CLEAR_ITEMS } from '../constants/cartConstants'


 export const createOrder = (order) => async (dispatch, getState) => {
    try{
        dispatch({
            type:ORDER_CREATE_REQUEST
        }) 

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            `/api/orders/add/`,
            order,
            config
        )

            dispatch({
                type: ORDER_CREATE_SUCCESS,
                payload:data 
            })

            dispatch({
                type: CART_CLEAR_ITEMS,
                payload:data 
            }) 

            localStorage.removeItem('cartItems')


    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}


export const getOrderDetails = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type:ORDER_DETAILS_REQUEST
        }) 

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `/api/orders/${id}/`,
            config
        )

            dispatch({
                type: ORDER_DETAILS_SUCCESS,
                payload:data 
            })


    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}


export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
    try{
        dispatch({
            type:ORDER_PAY_REQUEST
        }) 

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `/api/orders/${id}/pay/`,
            paymentResult,
            config
        )

            dispatch({
                type: ORDER_PAY_SUCCESS,
                payload:data 
            })


    } catch (error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}


export const payOrderItem = (id, paymentResult) => async (dispatch, getState) => {
    try{
        dispatch({
            type:ORDERITEM_PAY_REQUEST
        }) 

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `/api/orders/orderitem/${id}/itempay/`,
            paymentResult,
            config
        )

            dispatch({
                type: ORDERITEM_PAY_SUCCESS,
                payload:data 
            })


    } catch (error) {
        dispatch({
            type: ORDERITEM_PAY_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}


export const listMyOrders = () => async (dispatch, getState) => {
    try{
        dispatch({
            type:ORDER_LIST_MY_REQUEST
        }) 

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `/api/orders/myorders/`,
            config
        )

            dispatch({
                type: ORDER_LIST_MY_SUCCESS,
                payload:data 
            })


    } catch (error) {
        dispatch({
            type: ORDER_LIST_MY_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })

    }
}

export const listMyOrderItems = () => async (dispatch, getState) => {
    try{
        dispatch({
            type: ORDERITEM_LIST_REQUEST
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/orders/orderitems/`,
            config
        )

        dispatch({
            type: ORDERITEM_LIST_SUCCESS,
            payload: data
        })

    } catch (error){
        dispatch({
            type: ORDERITEM_LIST_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}