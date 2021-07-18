import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Setting, Profile, Home } from '../pages';
import  Icon  from 'react-native-vector-icons/MaterialIcons'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel : "Home",
          tabBarColor : "#3399FF",
          tabBarIcon : ({ color })=>( <Icon name="home" color={color} size={26}/>)
      }}/>
      <Tab.Screen name="Settings" component={Setting} options={{
          tabBarLabel : "Transaction",
          tabBarColor : "#3399FF",
          tabBarIcon : ({ color })=>( <Icon name="swap-vert" color={color} size={26}/>)
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel : "profile",
          tabBarColor : "#3399FF",
          tabBarIcon : ({ color })=>( <Icon name="account-circle" color={color} size={26}/>)
      }}/>
    </Tab.Navigator>
  );
}

export default MyTabs

