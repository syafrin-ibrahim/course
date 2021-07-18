import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Header,Gap } from '../../components'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
const QRpayment = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="QR Payment" onBack={()=>navigation.goBack()}/>
          
                <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Confirmation')}> 
                <Icon name="photo" size={36}/>
                </TouchableOpacity>
                </View>

            
        </View>
    )
}

export default QRpayment

const styles = StyleSheet.create({
    page :{
        flex : 1,
        backgroundColor : "#E5E5E5",
       
    },
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        paddingHorizontal : 40,
        marginVertical : 161,
        marginHorizontal : 20,
        backgroundColor : "#C4C4C4"
        
    }
})
