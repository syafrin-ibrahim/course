import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ImgConfirm, ImgTransfer } from '../../assets'
import { Button, Gap, Header, TextInput } from '../../components'
const CheckNumber = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Transfer" onBack={()=>navigation.goBack()}/>
            <View style={styles.body}>
                <View style={styles.imagewrapper}>
                   <ImgTransfer/>
                </View>
                <Gap height={32}/>
                <View style={styles.container}>
                <TextInput placeholder="Receiver Phone Number"/>
                <Gap height={23}/>
                <Button title="SUBMIT" onPress={()=>{navigation.navigate('Transfer')}}/>
                </View>

            </View>
        </View>
    )
}

export default CheckNumber

const styles = StyleSheet.create({
    page : {
        flex : 1,
        // backgroundColor : "yellow",
       
    },
    body : {
        marginTop : 21,
        alignItems : "center",
        justifyContent : "center",
        marginHorizontal : 40,

    },
  imagewrapper : {
    width : "100%",
    paddingTop : 30,
    paddingBottom : 20,
    // backgroundColor : "green",
    alignItems : "center",
    justifyContent : "center"
  },    
    container : {
        paddingHorizontal : 21,
        paddingVertical : 19,
        width : "100%",
        paddingHorizontal : 18 ,
       
    },
})
