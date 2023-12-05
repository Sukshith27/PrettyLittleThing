// src/screens/CartScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const CartScreen: React.FC = () => {
  // Assuming your cart state is stored in the Redux store under the 'cart' key
  const cartItems = useSelector((state: typeof RootState) => state.products);
  //   const products = useSelector((state: typeof RootState) => state.products);
  console.log('cartItems---', cartItems);

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Cart</Text>
      {/* {cartItems.length > 0 ? ( */}
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      {/* ) : (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      )} */}
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
    marginBottom: 20,
  },
  cartItem: {
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: 'grey',
  },
  itemQuantity: {
    fontSize: 14,
    color: 'blue',
  },
  emptyCartText: {
    fontSize: 16,
    color: 'black',
  },
});

export default CartScreen;
