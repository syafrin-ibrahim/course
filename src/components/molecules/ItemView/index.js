import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
const ItemView = () => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
            <Icon name="swap-horiz" color="black" size={36} style={styles.icon}/>
            </View>
            <View style={styles.rate}>
                <Text>Rp. 80.000</Text>
                <Text>Transfer To 0812345556</Text>
            </View>
            <View style={styles.date}><Text>20/08/2021</Text></View>
        </View>
    )
}

export default ItemView

const styles = StyleSheet.create({
     container : {
         
         flexDirection : "row",
         justifyContent : "space-between",
         paddingHorizontal : 13,
         paddingVertical : 10,
         backgroundColor : "#FFFFFF",
         borderWidth : 1,
         borderColor : "black",
         borderRadius : 8,
     },
     icon : {
         padding : 2,
         
     },
     rate : {
         padding : 2,
       
         justifyContent : "center"
     },
     date : {
       
         padding : 4
     }
})
