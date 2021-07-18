import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Header, TextInput,Gap } from '../../components'
import { ImgWallet} from './../../assets'

const TopUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Top Up" onBack={()=>navigation.goBack()}/>
            <View style={styles.imgholder}>
                    <ImgWallet />
            </View>
            <View style={styles.container}>
                    <TextInput placeholder="Nominal Top Up"/>
                    <Gap height={20}/>
                    <Button title="SUBMIT" onPress={()=>navigation.replace('SuccessTopUp')}/>
            </View>
            
        </View>
    )
}

export default TopUp

const styles = StyleSheet.create({
    page :{
        flex : 1,
        backgroundColor : "#E5E5E5",
       
    },
    imgholder : {
        paddingTop : 80,
        paddingBottom : 28,
     
        alignItems : "center"
                
    },
    container : {
        
        paddingHorizontal : 40,
        
    }
})
