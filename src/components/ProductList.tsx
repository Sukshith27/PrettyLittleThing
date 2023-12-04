// src/components/ProductList.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ProductItem from './ProductItem';
import {RootState} from '../redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from '../redux/actions/productActions';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: typeof RootState) => state.products);
  console.log('products---++', products);
  console.log('products---', products.products);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //   const renderItem = ({item}: {item: any}) => (
  //     <ProductItem
  //       product={item}
  //       onPress={() => console.log('Product pressed:', item)}
  //     />
  //   );

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.productContainer}>
      <Image source={{uri: item.img}} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productImage: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'grey',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatListContentContainer: {
    paddingBottom: 30,
  },
});

export default ProductList;
