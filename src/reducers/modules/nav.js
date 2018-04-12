import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../../Root";
import { REHYDRATE } from "redux-persist/constants";
var _ = require('lodash');

const initialState = {
    index: 0,
    routes: [{ key: "Home", routeName: "Home" }]
}


//Actions 
const GOBACK = "GOBACK"; 
const GOTO = "GOTO"; 
const RESET_TO = "RESET_TO"; 

// Action Creators

export const go_back = () => ({ type: GOBACK }); 

export const reset_to = (data) => ({ type: RESET_TO, data }); 

export const go_to = (data) => ({ type: GOTO, data }); 


/**
* Reducer
* @param redux store state or default state for this reducer
* @param action with type and data(optional)
*/
export default function reducer(state = initialState, action) {
    let userType ='';  
    let firstState = {};
    // if(action.payload && action.payload.user && action.payload.user.loggedIn){
    //     // login then set state as 
    //     userType = action.payload.user.userType;
    //     firstState = Home;
       
    // }else{
    //     userType = action.userType;
    //     firstState = "SelectUserType"; 
    // } 
    firstState = "Home";
    switch (action.type) {

        case "LOGIN_SUCCESS":
            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: "Home" }),
                state
            );

        case "SELECT_USER_TYPE":
        
            if(action.data.isSwitch){
                let switchScreen = action.data.userType === "driver" ? "DriverDashboardPage" : "DashboardPage" ;
                return AppNavigator.router.getStateForAction(
                    NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: switchScreen })
                        ]
                    }),
                    state
                ); 
            }else{
                return AppNavigator.router.getStateForAction(
                    NavigationActions.navigate({
                        routeName: action.data.userType === "driver" ? "DriverDashboardPage" : "Tour"
                    }),
                    state
                );
            }

        case "SIGNUP_SUCCESS":
            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: userType === "driver" ? "OtpForm" : "OtpForm"
                }),
                state
            );

        case "HOME_PAGE":            
            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: action.data.data.userType === "driver" ? "DriverDashboardPage" : "DashboardPage"
                }),
                state
            );

        case "LOGOUT":
            return AppNavigator.router.getStateForAction(
                NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'SelectUserType'})
              ]
            }),
                state
            );
                
        case "SET_NEW_PASSWORD":
            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: userType === "driver" ? "NewPassword" : "NewPassword"
                }),
                state
            );  

        case "GOTO_LOGIN":
            return AppNavigator.router.getStateForAction(
                NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home'})
              ]
            }),
                state
            );

        case "CARD_PAGE":
            if(action.data && action.data.bookingDetail && action.data.bookingDetail.bookingId){
                return AppNavigator.router.getStateForAction(
                NavigationActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Home'})
                  ]
                }),
                    state
                );

            }else{
                
                return AppNavigator.router.getStateForAction(
                    NavigationActions.navigate({
                        routeName: 'Home'
                    }),
                    state
                ); 
            }
         case "FEEDBACK_PAGE":
                 return AppNavigator.router.getStateForAction(
                    NavigationActions.navigate({
                        routeName: 'Home'
                    }),
                    state
                ); 
        
        case "MY_BALANCE_DETAIL":
                if(state.routes[state.routes.length-1].routeName != 'DetailList'){
                     return AppNavigator.router.getStateForAction(
                        NavigationActions.navigate({
                            routeName: userType === "driver" ? "DetailList" : "DetailList"
                        }),
                        state
                    ); 
                }else{
                 return AppNavigator.router.getStateForAction(action, state); 
                }   
                                 

        case "REVIEW_PAGE":
                 return AppNavigator.router.getStateForAction(
                    NavigationActions.navigate({
                        routeName: userType === "driver" ? "Reviews" : "Reviews"
                    }),
                    state
                ); 

        case "THREAD_LIST":
            if(state.routes[state.routes.length-1].routeName != 'ThreadList'){
                return AppNavigator.router.getStateForAction(
                    NavigationActions.navigate({
                        routeName: userType === "driver" ? "ThreadList" : "ThreadList"
                    }),
                    state
                );
            }
            else{
             return AppNavigator.router.getStateForAction(action, state); 
            }   

         case "CHAT_PAGE":
            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: userType === "driver" ? "Chat" : "Chat"
                }),
                state
            ); 

        case "GOT_VEHICLES": 
            if(!action.afterLogin){

                return AppNavigator.router.getStateForAction(
                    NavigationActions.navigate({
                        routeName: 'MyVehicles'
                    }),
                    state
                ); 
            }else{
               return AppNavigator.router.getStateForAction(action, state); 
            }
        case "GOT_OPEN_BOOKINGS": 
            if(!action.afterLogin){

                return AppNavigator.router.getStateForAction(
                    NavigationActions.navigate({
                        routeName: 'ParkingRequest'
                    }),
                    state
                ); 
            }else{
               return AppNavigator.router.getStateForAction(action, state); 
            }  
               

      case "MY_VEHICLE": 
        if(!action.afterLogin){

            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'MyVehicles'
                }),
                state
            ); 
        }else{
           return AppNavigator.router.getStateForAction(action, state); 
        }
        

        case "GOT_CAL_DETAILS": 
        if(!action.afterLogin){

            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'CalendarWrapper'
                }),
                state
            ); 
        }else{
           return AppNavigator.router.getStateForAction(action, state); 
        }

        case "BOOKING_DATA": 
            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'BookingScrollableTabView'
                }),
                state
            ); 


        case "persist/REHYDRATE":
              return AppNavigator.router.getStateForAction(
                NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: firstState})
              ]
            }),
                state
            );
        
        case GOBACK:
              return AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );           

        case GOTO:
            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: action.data.route,
                    params: action.data.params || {},
                }),
                state
            );     

        case RESET_TO:
            let screens = [];
            _.forEach(action.data.screens, function(value) {
                screens.push(NavigationActions.navigate({ routeName: value }));
            });           
            return AppNavigator.router.getStateForAction(
                NavigationActions.reset({
                  index: action.data.index,
                  actions: screens,
                  params: action.data.params || {},
                }),
                state
            );
            
        default:
            return AppNavigator.router.getStateForAction(action, state);
    }
}