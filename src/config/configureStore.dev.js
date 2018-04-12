import { compose, applyMiddleware, createStore } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage, Platform } from "react-native";
import devToolsEnhancer from "remote-redux-devtools";
import thunk from "redux-thunk";
import reducer from "../reducers";

/* *
 * @function: Configuring and creating redux store 
 * */
export default function configureStore() {

    /* *
     * @function: Creating redux store
     * */
    console.log("window",window);
    const store = createStore(
        reducer(),
        compose(
            autoRehydrate(),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : 
   (o)=>o),
        applyMiddleware(thunk)
    );

    /* *
     * @function: Persisting store for save all store's data except blacklisted reducers in device's memory
     * */
    persistStore(
        store,
        { blacklist: ["app", "nav", "toast"], storage: AsyncStorage },
        () => {
            let storeData = store.getState();
        }
    );

    /* *
     * @return: returning store when it's successfully created 
     * */
    return store;
}