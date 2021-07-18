import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Gap, Button } from '../../components'
import { AuthContext } from '../../config/context'
const Profile = () => {
    const { signOut } = React.useContext(AuthContext)

    const handleSignOut = ()=>{
         const nav = useNavigation()
    
        //  nav.reset({index : 0,routes: [{name : 'SignIn'}] });
         signOut()
    }
    return (
        <View style={styles.page}>
            <View style={styles.header}>
                    <View style={styles.image}>
                        
                    </View>
                   <Text style={styles.title}>Roger Danuarta</Text>
                   
                   <Text style={styles.subtitle}>08213445222</Text>
            </View>
            <View style={styles.body}>
                <Gap height={26}/>
                <Button title="CHANGE PROFILE" />
                <Gap height={26}/>
                <Button title="CHANGE PASSWORD" />
                <Gap height={26}/>
                <Button title="LOGOUT" onPress={()=>signOut()}/>
                
                {/* <TouchableOpacity onPress={()=>signOut()}>
                <Text style={styles.txt_link}>log out</Text>
                </TouchableOpacity> */}
            </View>
    </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    page : {
        backgroundColor : "#F0F0F0",
        flex : 1
      },
      body : {
        flex : 1,
        paddingHorizontal : 20,
        backgroundColor : "#E5E5E5"
       
    },
    header : {
        paddingHorizontal : 20,
        paddingTop : 20,
        paddingBottom : 10,
        backgroundColor : "#005690",
        alignItems : "center",
        justifyContent : "center"
              
    },
    image : {
        width : 180,
        height : 180,
        paddingHorizontal : 12,
        backgroundColor : "white",
        borderColor : "white",
        borderWidth : 1,
        borderRadius : 180,  
    },
    subtitle : {
        fontSize : 18,
        fontFamily :  "Poppins",
        color : "#FFFFFF",
       
       
    },
    title : {
        fontSize : 22,
        color : "#FFFFFF",
        fontFamily :  "Poppins-Medium",
       
       
        
        // fontWeight : "Poppins-Medium"
    },
})