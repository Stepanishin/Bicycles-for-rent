import { combineReducers, createStore    } from "redux";
import { changePageReducer } from "./changePageReducer"
import { nextReducer } from "./nextReducer"


const rootReducer = combineReducers({
    changePageReducer,
    nextReducer
})


export const store = createStore(rootReducer)