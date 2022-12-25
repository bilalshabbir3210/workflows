import { applyMiddleware, createStore } from "redux";
import logger from "./middlewares/logger";
import  reducers  from "./reducers";

export const store = createStore(reducers , applyMiddleware(logger("console")))