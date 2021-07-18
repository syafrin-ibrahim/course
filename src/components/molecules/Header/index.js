import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {IcBack}  from '../../../assets'
const Header = ({title, onBack}) => {
    return (
        <View style={styles.container}>
            {
                onBack && (

                    <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
                    <View style={styles.back}>
                        <IcBack />
                    </View>
        
                    </TouchableOpacity>
                )
            }
           
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        paddingTop : 18,
        paddingBottom : 17, 
        paddingRight: 142,
        backgroundColor : "#005690",
        alignItems : "center"

    },
    back : {
       
        padding : 12,
        marginBottom : 4
        
    },
    title : {
        fontSize : 18,
        fontFamily : "Poppins-Medium",
        color : "#FFFFFF"
    }
})
