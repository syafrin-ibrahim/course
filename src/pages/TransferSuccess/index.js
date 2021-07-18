import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ImgConfirm, ImgTransfer } from '../../assets'
import { Button, Gap, Header, TextInput } from '../../components'
const TransferSuccess = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={styles.body}>
                <View style={styles.imagewrapper}>
                   <ImgTransfer/>
                </View>
                <Gap height={43}/>
                <View style={styles.container}>
                <Text style={styles.transfer}>Transfer Success</Text>
                <Gap height={23}/>
                <Text style={styles.transfer}>Rp. 100,000</Text>
                <Gap height={21}/>
                <View style={styles.textbox}>
                    <Text style={styles.info}>20 Agustus 2020</Text>
                    <Gap height={17}/>
                    <Text style={styles.info}>Receiver : Dendi Aditya</Text>
                    <Gap height={12}/>
                    <Text style={styles.info}>082240206xxx</Text>
                </View>
                <Gap height={21}/>
                <Button title="FINISH" onPress={()=>navigation.reset({ index : 0, routes : [{name : 'Home'}]})}/>
                </View>

            </View>
        </View>
    )
}

export default TransferSuccess

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
    },
    transfer :   {
        fontSize : 24,
        fontFamily : "Poppins-Medium",
        fontWeight : "400",
        textAlign : "center"
    },
    textbox: {
        backgroundColor : "#4982C1",
        borderWidth : 1,
        borderRadius : 8,
        paddingVertical : 14,
        alignItems : "center"

    },
    info : {
        fontSize : 18,
        fontWeight : "400",
        color : "#FFFFFF"
    }





})
