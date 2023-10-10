import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

export default function App(){
  return(
    <View style={styles.container}>
      <Image
      source={require("./src/assets/logo.png")}
      style={styles.logo} />

      <Text style={styles.title}>20 caracteres</Text>

      <View style={styles.area}>
        <Slider 
        style={{ height:50 }}
        minimumValue={6}
        maximumTrackImage={25}
        maximumTrackTintColor='#ff0000'
        minimumTrackImage='#000'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F3F3FF",
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    marginBottom:60
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width: "80%",
    backgroundColor: '#FFF',
    borderRadius:8,
    padding:8
  }
})