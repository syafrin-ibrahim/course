import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ImgConfirm } from '../../assets'
import { Button, Gap, Header } from '../../components'
const Confirmation = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Payment Confirmation" onBack={()=>navigation.goBack()} />
            <View style={styles.body}>
                <ImgConfirm />
                <Gap height={11} />
                <Text style={styles.price}>RP. 60.000</Text>
                <View style={styles.line}/>
                <Gap height={30}/>
                <View style={styles.container}>
                    <Text style={{ fontSize: 18, color: "white"}}>Payment To : </Text>
                    <Gap height={11}/>
                    <Text style={{ fontSize: 24, color: "white"}}>BasicsSchool</Text>
                    <Gap height={2}/>
                    <Text style={{ fontSize: 16, color: "white"}}>Jl. CiparayNo 20B, Kota Bandung</Text>
                </View>
                <Gap height={32}/>
                <View style={styles.btncontainer}>
                <Button title="SUBMIT" onPress={()=>navigation.replace('SuccessPayment')}/>
                </View>

            </View>
        </View>
    )
}

export default Confirmation

const styles = StyleSheet.create({
    page : {
        flex : 1,
     
       
    },
    body : {
        marginTop : 60,
        alignItems : "center",
        justifyContent : "center",
        marginHorizontal : 40,
       
    },
    price : {
        fontSize : 24,
        color : "#333333",
        fontFamily : "Poppins"
    },
    line : {
        borderWidth : 0.5,
        width : "80%",
        marginHorizontal : 20,
        borderBottomColor : "black",

    },
    container : {
        backgroundColor : "#4982C1",
        borderRadius : 8,
        paddingHorizontal : 21,
        paddingVertical : 19,
        alignItems : 'center',
        justifyContent : "center",
    },
    btncontainer : {
        width : "100%",
        paddingHorizontal : 18 
    }
})
