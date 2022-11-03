import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux"
import userReducer from "./userReducer"
import cartReducer from "./cartReducer"

const persistedReducer = persistReducer({
    key:"cart",
    storage
},cartReducer)

export default combineReducers({
    cart: persistedReducer,
    user: userReducer
})


