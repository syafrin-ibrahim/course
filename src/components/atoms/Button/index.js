import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({title, color='#4982C1', textColor='#FFFFFF', onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <View style={styles.container(color)}>
            <Text style={styles.text(textColor)}>{title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container : (color)=>({
        borderRadius : 8,
        borderWidth : 1,
        borderColor : "#4982C1",
        backgroundColor : color,
        paddingVertical : 13,
        paddingHorizontal : 10        
    }),

    text : (textColor)=>({
        fontSize : 16,
        fontFamily : "Poppins",
        textAlign : "center",
        color : textColor
    })
})
