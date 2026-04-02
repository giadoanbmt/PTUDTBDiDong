import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { PRODUCTS } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import AppHeader from '../components/AppHeader';

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <ProductCard 
      product={item} 
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