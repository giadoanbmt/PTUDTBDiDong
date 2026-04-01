// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import 'react-native-gesture-handler'; // Lưu ý: LUÔN LUÔN giữ dòng này ở vị trí số 1
import React from 'react';

// Nhập bộ điều hướng bạn vừa tạo
import AppNavigator from './src/navigations/AppNavigator';

export default function App() {
  // Trả về bộ điều hướng chính của ứng dụng
  return <AppNavigator />;
}