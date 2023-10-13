import { ModalPassword } from './src/components/modal';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"



export default function App(){
  const [size, setSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  
  function generatePassword (){
    let password = "";

    for (let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password);
    setModalVisible(true)
  }

  return(
    <View style={styles.container}>
      <Image
      source={require("./src/assets/logo.png")}
      style={styles.logo} />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider 
        style={{ height:50 }}
        minimumValue={6}
        maximumTrackImage={25}
        maximumTrackTintColor='#ff0000'
        minimumTrackImage='#000'
        thumbTintColor='#392de9'
        value={size}
        onValueChange={ (value) => setSize (value.toFixed(0))}
        />
      </View>


      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>
          Gerar Senha
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade'>
        <ModalPassword />
      </Modal>


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
  },button:{
    backgroundColor:'#392de9',
    width:'80%',
    height:50,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    color:'#FFF',
    fontSize:20
  },
  title:{
    fontSize:30,
    fontWeight:'bold'
  }
})