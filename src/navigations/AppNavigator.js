import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

// Import Screens với đường dẫn mới (dùng ../ để lùi ra ngoài 1 thư mục)
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

// Khởi tạo 2 loại Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigation cho luồng Sản phẩm
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

// Màn hình Setting tạm thời
function SettingsDummyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Màn hình Cài đặt</Text>
    </View>
  );
}

// Chức năng chính được xuất ra (Export)
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
          name="Settings" 
          component={SettingsDummyScreen} 
          options={{ tabBarLabel: 'Cài đặt' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}