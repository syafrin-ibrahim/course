import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'

const SignUp = ({navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Account Registration" onBack={()=>{navigation.goBack()}}/>
            <View style={styles.container}>
                <TextInput placeholder="Email"/>
                <Gap height={31}/>
                <TextInput placeholder="Password"/>
                <Gap height={31}/>
                <TextInput placeholder="Name"/>
                <Gap height={31}/>
                <TextInput placeholder="Phone Number"/>
                <Gap height={31}/>
                <Button title="SUBMIT" color="#4982C1" />
            </View>
            
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page : {
        flex : 1
    },
    container : {
        backgroundColor : "#E5E5E5",
        paddingHorizontal : 24,
        paddingTop : 151,
        flex : 1
    }
})
