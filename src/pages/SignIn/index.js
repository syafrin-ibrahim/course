// import { parseSync } from '@babel/core'
import React, { useState } from 'react'
import {  StyleSheet, View, Text,  Image, TouchableOpacity,PermissionsAndroid } from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import { Button, Gap, TextInput } from '../../components'
import { AuthContext } from '../../config/context'
import Geolocation from 'react-native-geolocation-service';
// const AuthContext = React.createContext()
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  
   const { signIn } = React.useContext(AuthContext)
  // const { signOut } = React.useContext(AuthContext)
useEffect(()=>{
 //requestLocationPermission()
  if (requestLocationPermission) {
    Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
},[])
  const loginHandle = (email,pass)=>{
      signIn(email, pass)
  }

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Location Permission",
          message:
            "This App want access to your camera " +
            "so you can get your location.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        return true
      } else {
        console.log("Camera permission denied");
        return false
      }
    } catch (err) {
      console.warn(err);
      return false
    }
  };
  
  return (
   
    <View style={styles.page}>
        <View style={styles.header}>
              <View style={styles.photocontainer}>
                <Image source={{ uri : 'https://indoittraining.com/wp-content/uploads/sites/3/2020/11/reactjs.png'}} style={styles.image}/>
              </View>
              <Text style={styles.title}>E Wallet</Text>
        </View>
        <View style={styles.container}>
          <TextInput placeholder="Email" onChangeText={(e)=>setEmail(e)}/>
          <Gap height={31}/> 
          <TextInput placeholder="Password" onChangeText={(e)=>setPass(e)}/>
          <Gap height={31}/>       
        
          <Button title="LOGIN" color="#4982C1" onPress={()=>{loginHandle(email, pass)}}/>          
        
        <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}>
          <Text style={styles.txt_link} >Registrasi</Text>
          </TouchableOpacity>
        </View>
        
                   
    </View>

  )
}

export default SignIn

const styles = StyleSheet.create({
  page : {
      flex : 1,
  },
  header : {
    paddingHorizontal : 54,
    paddingTop : 70,
    paddingBottom: 22,
    alignItems : "center",
     backgroundColor : "white"

  },
  photocontainer : {
    width : 180,
    height : 180,
    padding : 12,
    borderRadius : 180,
    backgroundColor : "#3399FF",
    alignItems : 'center',
    justifyContent : 'center'

  },
  image : {
    height : 120,
    width : 120,
    padding : 5, 
    
    
  },
  title : {
    marginTop : 14,
    fontSize : 22,
    color : "#3399ff",
  }, 
  container : {
    paddingHorizontal : 24,
    paddingTop : 16,
    flex : 1,
     backgroundColor : "white",
    
  },
 
  txt_link : {
    textAlign: "center", padding : 20, fontSize: 20, color : "#3399ff"
  }

  
})

