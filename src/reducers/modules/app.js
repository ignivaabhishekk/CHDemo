const LOADING_STOP = "LOADING_STOP";
const LOADING_START = "LOADING_START";
const SHOW_TOAST = "SHOW_TOAST";
const HIDE_STOP = "HIDE_STOP";
const SOCKET = "SOCKET";
const SERVER_TIME_RECIEVED = "SERVER_TIME_RECIEVED";


// Action Creators
export const loading_start = () => ({ type: LOADING_START });
export const loading_stop = () => ({ type: LOADING_STOP });
export const show_toast = text => ({ type: SHOW_TOAST, text });
export const hide_toast = () => ({ type: HIDE_STOP });


// Reducer's default state
const initialState = {
    isLoading: false,
    isToast: false,
    toastText: "",
    socket: {},
    createdAt: new Date(),
    serverTime : new Date(),
};

/**
* Reducer
* @param redux store state or default state for this reducer
* @param action with type and data(optional)
*/
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_START:
            return { ...state, isLoading: !true };

        case LOADING_STOP:
            return { ...state, isLoading: false };

        case SHOW_TOAST:
            return { ...state, isToast: true, toastText: action.text };

        case HIDE_STOP:
            return { ...state, isToast: false };        

        case HIDE_STOP:
            return { ...state, isToast: false };      

        case SERVER_TIME_RECIEVED:
            return { ...state, ...action.data };        

        case SOCKET:
            return { ...state, socket_authenticated: action.authenticated,socket_connected: action.connected,  };

        default:
            return state;
    }
}
