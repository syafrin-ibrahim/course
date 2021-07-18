import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ReactImage } from '../../assets'
import { Gap } from '../../components'

const SplachScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('SignIn')
        }, 2000)
    }, [])
    return (
        <View style={styles.page}>
           <View style={styles.body}>
                <ReactImage />
                <Gap height={52}/>
                <View style={styles.container}>
                    <Text style={styles.title}>EWallet Apps</Text>
                    <Text style={styles.subtitle}>Final Project</Text>
                    <Text style={styles.subtitle}>REACT NATIVE</Text>

                </View>
           </View>
        </View>
    )
}

export default SplachScreen

const styles = StyleSheet.create({
    page : {
        backgroundColor : "#005690",
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    body : {
        flex : 1,
        paddingHorizontal : 61,
        paddingTop : 85,
        alignItems : "center"
    },
    container : {
        alignItems : "center",
    
    },
    title : {
        fontSize : 36,
        fontFamily : "Poppins-Medium",
        color : "#FFFFFF",
        marginBottom : 43
    },
    subtitle : {
        fontSize : 28,
        fontFamily : "Poppins",
        color : "#FFFFFF"
    }
})
