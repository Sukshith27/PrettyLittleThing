// src/components/ProductList.tsx
import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import ProductItem from './ProductItem';
import {RootState} from '../redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, fetchProducts} from '../redux/actions/productActions';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: typeof RootState) => state.products);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch(addToCart({id: productId, quantity}));
  };

  const renderItem = ({item}: {item: any}) => (
    <ProductItem
      product={item}
      onQuantityChange={quantity => console.log('=====', item.id, quantity)}
      // onQuantityChange={quantity => console.log(item.id, quantity), handleQuantityChange(item.id, quantity)}
    />
  );

  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
  },
  flatListContentContainer: {
    // paddingBottom: 100,
  },
});

export default ProductList;
