// src/components/ProductList.tsx
import React from 'react';
import {FlatList, View} from 'react-native';
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

  const renderItem = ({item}: {item: any}) => (
    <ProductItem
      product={item}
      onPress={() => console.log('Product pressed:', item)}
    />
  );

  return (
    <View style={{backgroundColor: 'red'}}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ProductList;
