import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Details')}} style={{backgroundColor:'lightgreen',padding:10}}><Text>Press Me</Text></TouchableOpacity>
        </View>
      );
    }
  }

export default HomeScreen;