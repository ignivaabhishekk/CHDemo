import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import LinkedInModal from 'react-native-linkedin'
// https://www.linkedin.com/developer/apps link to create linkedin developer account
class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <View style={{backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center'}}>
            <LinkedInModal
              clientID="[ Your client id from https://www.linkedin.com/developer/apps ]"
              clientSecret="[ Your client secret from https://www.linkedin.com/developer/apps ]"
              redirectUri="[ Your redirect uri set into https://www.linkedin.com/developer/apps ]"
              onSuccess={token => console.log(token)}
            />
          </View>          
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Details')}} style={{backgroundColor:'lightgreen',padding:10}}><Text>Press Me</Text></TouchableOpacity>
        </View>
      );
    }
  }

export default HomeScreen;