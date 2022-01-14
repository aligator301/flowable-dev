import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const middleware = [thunk, loggerMiddleware];

const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const StateStore = makeStore;
