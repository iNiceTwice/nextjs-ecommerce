import { createStore, compose, applyMiddleware } from "redux"
import { persistStore } from "redux-persist"
import reducer from "./reducers"
import thunk from "redux-thunk"


export const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        typeof window === "object" &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ?  //esta logica evita que tire error la app aunque el navegador no tenga la extension
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

export const persistor = persistStore(store)

// compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) sirve para conectar redux dev tools pero tira error si no el navegador no tiene la extension 