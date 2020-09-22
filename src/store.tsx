import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import appReducer from "./reducers/app";
import thunkMiddleware from "redux-thunk";


let rootReducer = combineReducers({
    tablePage: appReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
