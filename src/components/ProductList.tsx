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

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderItem = ({item}: {item: any}) => (
    <ProductItem
      product={item}
      onPress={() => {
        console.log('Product pressed:', item);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        // contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  flatListContentContainer: {
    paddingBottom: 100,
  },
});

export default ProductList;
