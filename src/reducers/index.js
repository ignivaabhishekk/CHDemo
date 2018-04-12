import { combineReducers } from 'redux';
import nav from "./modules/nav";
import app from "./modules/app";
/**
* The combineReducers helper function turns an object 
* whose values are different reducing functions 
* into a single reducing function you can pass to createStore.
*/
export default function getRootReducer() {
    return combineReducers({
        nav,
        app,
    });
}