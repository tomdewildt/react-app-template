import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const middleware = [ sagaMiddleware ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers( applyMiddleware( ...middleware ) ),
);
sagaMiddleware.run( sagas );

export default store;
