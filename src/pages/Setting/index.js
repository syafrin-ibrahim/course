import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { Gap, ItemView } from '../../components'
import { AuthContext } from '../../config/context'
const Setting = ()=>{
    const { signOut } = React.useContext(AuthContext)
    return (
        <View style={styles.page}>
             <View style={styles.body}>
                
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
                  <Gap height={20}/>
                  <ItemView />
                  <Gap height={20}/>
                  <ItemView />
                  <Gap height={20}/>
                  <ItemView />
                  
            </View>
        </View>
    )
}

export default Setting

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
})