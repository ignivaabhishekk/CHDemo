import React from 'react';
import { Text, View, StyleSheet,Button,Image ,ImageBackground} from 'react-native';
import Swiper from 'react-native-deck-swiper';

let obj1={
    left: {
        element: <Text>NOPE</Text> ,/* Optional */
        title: 'NOPE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              marginTop: 30,
              marginLeft: -30
            }
          }
        },
      right: {
        element: <Text>LIKE</Text> ,/* Optional */
        title: 'LIKE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 30,
              marginLeft: 30
            }
    }
  }
}
let obj2 = {
  position: 'absolute',
  backgroundColor: 'transparent',
  zIndex: 2,
  flex: 1,
  width: '100%',
  height: '100%'
}
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      {/* <ImageBackground source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={{width:450, height: 600}} > */}
        <Swiper
            cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
            renderCard={(card) => {             
                return (
                    <View style={styles.card}>
                      <Image style={{width: 66, height: 58}} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                        <Text style={styles.text}>{card}</Text>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'transparent'}
            stackSize= {2}
            showSecondCard={true}
            verticalSwipe ={false}
            onSwipedLeft ={()=>{}}
            onSwipedRight ={()=>{}}
            overlayLabels ={obj1}
            overlayLabelWrapperStyle={obj2}
            overlayLabelStyle={styles.overlayLabelStyle}
            >
           
        </Swiper> 
        <View style={{position:'absolute',bottom:10,left:10,right:10,flexDirection:'row'}}> 
            <Button
                    onPress={() => {console.log('oulala')}}
                    title="Press me">
                    You can press me
                </Button> 
                <Button
                    onPress={() => {console.log('oulala')}}
                    title="Press me">
                    You can press me
                </Button>      
          </View>
          {/* </ImageBackground> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#F5FCFF"
  // },
  overlayLabelStyle:{
    fontSize: 45,
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden'
  },
  card: {
    height:450,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});
export default DetailsScreen;