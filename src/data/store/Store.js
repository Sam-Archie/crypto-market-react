import { applyMiddleware, createStore, compose } from "redux"
import thunk from "redux-thunk"
import reducer from "../reducer/Reducer"
import initialState from "../initial-state/InitialState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
    );

export default store;
