import { SAVE_PAYMENT_METHOD } from '../constants/payConstants'

export const payReducer = (state = {}, action ) => {
    switch (action.type){
        case SAVE_PAYMENT_METHOD:
            return{
                ...state, 
                paymentMethod: action.payload,
            }

        default : 
        return state 


    }

} 