import { createStore,combineReducers } from "redux"
import { wordReducer } from "./Reducer/wordReducer"
import { ColorReducer } from "./Reducer/ColorReducer"
import { ProductReducer } from "./Reducer/ProductReducer"

export const confingStore=()=>{
    const store =createStore(
        combineReducers({
            wordReducer,ColorReducer,ProductReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}