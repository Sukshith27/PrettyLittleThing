import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    img: string;
    colour: string;
  };
  onQuantityChange: (productId: number, quantity: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(product.id, newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(product.id, newQuantity);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: product.img}} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text>Colour: {product.colour}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={handleDecrease}
          style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>Qty: {quantity}</Text>
        <TouchableOpacity
          onPress={handleIncrease}
          style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'grey',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  quantityButton: {
    padding: 5,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
  },
});

export default ProductItem;
