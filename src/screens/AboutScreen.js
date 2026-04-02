import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Về chúng tôi</Text>
      <Text style={styles.description}>
        Xin chào! Đây là ứng dụng của Nhóm 8.
        Chúng mình rất vui được mang đến cho bạn trải nghiệm tuyệt vời tại quán nước mini này!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#6200EE', 
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 24, 
  },
});