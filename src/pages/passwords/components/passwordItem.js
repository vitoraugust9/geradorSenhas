import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export function PasswordItem({ data, removePassword }){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {isPasswordVisible ? data : '*'.repeat(data.length)}
            </Text>
            <View style={styles.iconContainer}>
                <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#FFF" onPress={togglePasswordVisibility} />
                <Icon name="trash" size={20} color="#FFF" onPress={removePassword} style={styles.trashIcon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#0e0e0e",
        padding:14,
        width:'100%',
        marginBottom:14,
        borderRadius: 8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
      color:'#FFF'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    trashIcon: {
        marginLeft: 10,
    }
})