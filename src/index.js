import React, { Component } from "react";
import {
  View,
} from 'react-native';
import { Provider, } from 'react-redux'
import configureStore from "./config/configureStore";
import Root from './Root'

/* *
 * Configuring redux store 
 * */
const store = configureStore();

store.subscribe(()=>{ console.log("fffff",store.getState())})
/* *
 * Configuring socket client
 * @param redux store
 * */
//const socketClient = configureClient(store);


/*
 * Main component
 * */
class Main extends Component{
	
	/* *
	 * Default render function
	 * */
	render(){

		return(
		<View style={{flex:1}}>	
	      <Provider store={store}>
	        <Root/>
	      </Provider>	      
	    </View>
	    )
	}
}

export default Main