import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProductList from '../components/ProductList';

const ProductListScreen: React.FC = () => {
  const navigation = useNavigation();
  console.log('navigation----', navigation.navigate);

  const goToCartScreen = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PRETTY LITTLE THINGS</Text>
      </View>
      <ProductList />
      <TouchableOpacity style={styles.addToCartButton} onPress={goToCartScreen}>
        <Text style={styles.addToCartButtonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 12,
  },
  header: {
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  addToCartButton: {
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'blue',
    padding: 15,
  },
  addToCartButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

export default ProductListScreen;
