import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CartScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Cart</Text>
      {/* Add your cart items and total here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CartScreen;
