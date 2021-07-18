import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'

const TextInput = ({placeholder, ...otherProps}) => {
    return (
        <View>
            
            <TextInputRN style={styles.input} placeholder={placeholder} {...otherProps} />
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    input : {
        fontSize : 14,
        color : "#ACACAC",
        borderWidth : 1,
        borderColor : "#C3C3C3",
        borderRadius : 8,
        padding : 10
    }
})
