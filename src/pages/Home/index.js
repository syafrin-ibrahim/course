import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { Gap, ItemView, Square } from '../../components'

const Home = ({navigation}) => {
    const [movies, setMovie] = useState()
    useEffect(()=>{
    //   getMovie().then((res)=>{
    //       console.log('respon',res)
    //         setMovie(res)
    //   }).catch((err)=>{
    //       console.log('error lagi', err)
    //   })
      
    },[])

    // useEffect(()=>{

    // },[movies])

    const getMovie = ()=>{
        axios.get('https://reqres.in/api/users?page=2').then((res)=>{
            console.log('data : ', res.data.data);
        })
        .catch((err)=>{
            console.log('error ', err)
        })
    }
    return (
        <View style={styles.page}>
            
           <View style={styles.header}>
                   <Text style={styles.subtitle}>Your Balance</Text>
                   <Text style={styles.title}>RP.350.000.000</Text>
               </View>
               <View style={styles.body}>
                 <View style={styles.topmenu}>
                    <Square name="add" color="black" size={46} text="Top Up" onPress={()=>navigation.navigate('TopUp')}/>
                    <Square name="qr-code" color="black" size={46} text="QR Pay" onPress={()=>navigation.navigate('QRpayment')}/>
                    <Square name="arrow-forward" color="black" size={46} text="Transfer" onPress={()=>navigation.navigate('CheckNumber')}/>
                  </View>
                  <Gap height={20}/> 
              <ItemView />
                  <Gap height={20}/>
                  <ItemView />
                  <Gap height={20}/>
                  <ItemView />
                  <Gap height={20}/>
                  <ItemView />
                  <Gap height={20}/>
                  <ItemView /> 
                  {/* <FlatList data={movies} renderItem={({item})=>{
                      return <Text>{item.email}</Text>
                  }} /> */}
                 <Text>test</Text>
               </View> 
            
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page : {
        backgroundColor : "#F0F0F0",
        flex : 1
    },
    header : {
        paddingHorizontal : 20,
        paddingTop : 66,
        paddingBottom : 7,
        backgroundColor : "white"
              
    },
    subtitle : {
        fontSize : 14,
        fontFamily :  "Poppins",
        color : "#484848",

    },
    title : {
        fontSize : 36,
        color : "#575757",
        fontFamily :  "Poppins-Medium",
        
        // fontWeight : "Poppins-Medium"
    },
    body : {
        flex : 1,
        marginTop : 20,
        paddingHorizontal : 20,
        backgroundColor : "#E5E5E5"
       
    },
    topmenu : {
        
        flexDirection : "row",
        justifyContent : "space-around",
        backgroundColor : "#4982C1",
        borderRadius : 8
        
        
        
    },
 
})
