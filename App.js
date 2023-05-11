import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/Home';
import ProfileScreen from './Screens/Profile';
import SearchScreen from './Screens/Search';
import NotificationScreen from './Screens/Notification'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab=createMaterialBottomTabNavigator();

export default function App() {
  
  return (
   <NavigationContainer>
    <Tab.Navigator labeled={false}  barStyle={{backgroundColor:'orange'}} activeColor='white'>
      <Tab.Screen name='Home' component={HomeScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name='home' color={color} size={26}/>
          )
        }}
      />
      <Tab.Screen name='Search' component={SearchScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name='magnify' color={color} size={26}/>
          )
        }}
      />
      <Tab.Screen name='Notification' component={NotificationScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name='heart' color={color} size={26}/>
          )
        }}
      />
      <Tab.Screen name='Profile' component={ProfileScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name='account-circle' color={color} size={26}/>
          )
        }}
      />
    </Tab.Navigator>
   </NavigationContainer>
  );
}

