import { combineReducers } from "redux"
import userReducer from "./userReducer"
import cartReducer from "./cartReducer"

export default combineReducers({
    cart: cartReducer,
    user: userReducer
})


