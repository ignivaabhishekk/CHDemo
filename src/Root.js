import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Platform    
} from 'react-native'
import { StackNavigator, addNavigationHelpers,NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'
import routes from "../src/config/routes";

const stackNavigatorConfiguration = {
    headerMode: "float",
    mode:"modal",
    navigationOptions: {
      gesturesEnabled: false,
    },
  };

const AppNavigator = StackNavigator(routes, stackNavigatorConfiguration);

class Root extends Component{

  /* *
   * Default constructor
   * */
  constructor(props){
    super(props);
  }


  render(){
    const { dispatch, nav } = this.props;
    return (
        <View style={styles.container}>        
            <AppNavigator
            navigation={addNavigationHelpers({ dispatch, state: nav })}
        />       
        </View>
      )
      
  }
}

const mapStateToProps = state => ({
    nav: state.nav
  })
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
});
export { AppNavigator }
export default connect(
    mapStateToProps
  )(Root)
// export default Root
