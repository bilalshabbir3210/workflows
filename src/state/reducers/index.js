import { combineReducers } from "redux";
import amountReducer from './amountReducer';
import todoReducer from "./todoReducer";


const reducers = combineReducers({
    amount: amountReducer,
    todos : todoReducer,
})
export default reducers;