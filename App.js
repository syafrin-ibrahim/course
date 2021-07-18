import React,  { PureComponent } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import MyTabs from './src/pages/maintab'
import { AuthContext } from './src/config/context'
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import SignIn from './src/pages'
import { CheckNumber, Confirmation, PaymentSuccess, QRpayment, SignIn, SignUp, SplachScreen, SuccessTopUp, TopUp, Transfer, TransferSuccess} from './src/pages'
import { ActivityIndicator } from 'react-native'




const Stack = createStackNavigator()



const App = () => {
  const [loading, setLoading] = React.useState(true)
  const [token, setToken] = React.useState(null)

  const initialState = {
    isLoading: true,
    email: null,
    isSignOut: false,
    userToken: null
  }
  const authReducer = (prevState, action)=> {
        switch(action.type){
          case 'RETRIEVE' : 
          return{
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
          case 'SIGN_IN' : 
          return{
            ...prevState,
            isSignOut: false,
            userToken: action.token,
            isLoading: false
          };
          case 'SIGN_OUT' : 
          return{
            ...prevState,
            isSignOut: true,
            userToken: null,
            isLoading: false
          };
          case 'SIGN_UP' : 
          return{
            ...prevState,
            isSignOut: false,
            userToken: action.token,
            isLoading: false
          };
    }
}
 
//https://emoneydti.basicteknologi.co.id/index.php/api/users/registrasi

 const [state, dispatch] = React.useReducer(authReducer, initialState)

  const authContext = React.useMemo(
    ()=>({
      signIn : async (userName, password)=>{
        let userToken = '123'
      
        // if(userName == 'user' && password == '123'){
          try {
            await AsyncStorage.setItem('token', userToken)
          } catch (e) {
            // saving error
          }
        // }

        console.log('tokennya =', userToken)
        dispatch({ type: 'SIGN_IN', token: userToken})
      },
      signOut : async (data)=>{
        try {
          await AsyncStorage.removeItem('token')
        } catch (e) {
          // saving error
        }
        dispatch({ type: 'SIGN_OUT'})
        console.log('token', state.userToken)
      },
      signUp : async (data)=>{
        dispatch({ type: 'SIGN_UP', token: '123'})
      },
    }),[]
  );

  React.useEffect(()=>{
    // const bootstrap = async ()=>{
    //   let userToken;

      // try{

      // }catch(){

      // }
     setTimeout(async ()=>{

       let userToken
      
      try {
      userToken =   await AsyncStorage.getItem('token')
      } catch (e) {
        // saving error
      }
        dispatch({ type: 'RETRIEVE', token: userToken})
        console.log('state', state.isLoading)
      },1000)
   
  },[])

  if(state.isLoading){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="small"/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName={SignIn}>
  
        {
        state.userToken == null  ? (
          <>
           <Stack.Screen
          name="SplashScreen"
          component={SplachScreen}
          options={{headerShown: false}} />
          <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}/>
          <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}} />
        </>
        
        ):(
          <>
          <Stack.Screen name="Home" component={MyTabs} options={{title: "Home", headerShown : false}} />
          <Stack.Screen
          name="TopUp"
          component={TopUp}
          options={{headerShown: false}}/>
        
        <Stack.Screen
          name="CheckNumber"
          component={CheckNumber}
          options={{headerShown: false}} />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{headerShown: false}} />
        <Stack.Screen
          name="TransferSuccess"
          component={TransferSuccess}
          options={{headerShown: false}} />
         <Stack.Screen
          name="QRpayment"
          component={QRpayment}
          options={{headerShown: false}} />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{headerShown: false}}/>
        <Stack.Screen
          name="SuccessPayment"
          component={PaymentSuccess}
          options={{headerShown: false}} />
        <Stack.Screen
          name="SuccessTopUp"
          component={SuccessTopUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{headerShown: false}}
        />
         </>
        )
      }

        

      
        {/* <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        /> */}
       
        
    </Stack.Navigator>
    </NavigationContainer>

    </AuthContext.Provider>
  )
}


class Camera extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          // onGoogleVisionBarcodesDetected={({ barcodes }) => {
          //   console.log(barcodes);
          // }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});


export default App;
