import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

const Square = ({ name, color,size, text, onPress }) => {
    return (
        <View>
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <View style={styles.square}>
            <Icon name={name} color={color} size={size} style={styles.icon}/>
            <Text style={styles.txticon}>{text}</Text>
            </View>
       </TouchableOpacity>

        </View>
    )
}

export default Square

const styles = StyleSheet.create({
    square : {
        paddingHorizontal : 23,
        paddingTop : 13,
        paddingBottom : 5,

    },
    icon : {
        padding : 17,
        backgroundColor : "white"
    },
    txticon : {
       fontSize : 14,
       fontFamily : "Poppins-Medium",
       
       textAlign : "center",
       color : "#FFFFFF"
    }
})
