import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ImgConfirm, ImgTransfer } from '../../assets'
import { Button, Gap, Header, TextInput } from '../../components'
const Transfer = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Transfer" onBack={()=>navigation.goBack()} />
            <View style={styles.body}>
                <View style={styles.imagewrapper}>
                   <ImgTransfer/>
                </View>
                <Gap height={32}/>
                <View style={styles.container}>
                <TextInput placeholder="Nominal Transfer"/>
                <Gap height={21}/>
                <Text style={styles.bold}>Receiver :</Text>
                <Gap height={21}/>
                <Text style={styles.text}>Dendi Aditya</Text>
                <Gap height={21}/>
                <Button title="TRANSFER" onPress={()=>navigation.replace('TransferSuccess')}/>
                </View>

            </View>
        </View>
    )
}

export default Transfer

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
    bold : {
        fontSize : 16,
        fontFamily : "Poppins-Medium",
        fontWeight : "bold",
        textAlign : "center"
    },
    text : {
        fontSize : 16,
        fontStyle : 'normal',
        textAlign : "center"
    } 


})
