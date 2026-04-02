import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import AboutScreen from '../screens/AboutScreen'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProductStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen 
        name="DetailScreen" 
        component={DetailScreen} 
        options={{ headerShown: true, title: 'Chi tiết sản phẩm' }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#6200EE' }}>
        <Tab.Screen 
          name="Shop" 
          component={ProductStack} 
          options={{ tabBarLabel: 'Cửa hàng' }}
        />
        <Tab.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ tabBarLabel: 'Giới thiệu' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}