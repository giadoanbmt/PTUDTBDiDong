import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import AppHeader from '../components/AppHeader';

export default function HomeScreen({ navigation }) {
  // Hàm render từng mục trong FlatList
  const renderItem = ({ item }) => (
    <ProductCard 
      product={item} 
      // Khi bấm Details, điều hướng sang màn hình DetailScreen và truyền theo dữ liệu item
      onDetailsPress={() => navigation.navigate('DetailScreen', { product: item })} 
    />
  );

  return (
    <View style={styles.container}>
      <AppHeader title="Sản phẩm nổi bật" />
      <FlatList
        data={PRODUCTS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    paddingBottom: 20,
  }
});