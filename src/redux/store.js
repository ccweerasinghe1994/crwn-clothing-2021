import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { fetchCollectionStart } from "./shop/shop.saga";
const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleWare.run(fetchCollectionStart);
export const persistor = persistStore(store);
