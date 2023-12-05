// ProductListScreen.test.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListScreen from '../screens/ProductListScreen';

const Stack = createNativeStackNavigator();

describe('ProductListScreen', () => {
  it('renders correctly and can navigate to Cart screen', () => {
    const navigateMock = jest.fn();

    const component = (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="Cart" component={() => null} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    // Mocking useNavigation
    jest.mock('@react-navigation/native', () => ({
      ...jest.requireActual('@react-navigation/native'),
      useNavigation: () => ({
        navigate: navigateMock,
      }),
    }));

    const {getByText} = render(component);

    // Check if header text is present
    expect(getByText('PRETTY LITTLE THINGS')).toBeTruthy();

    // Simulate pressing 'Go to Cart' button
    fireEvent.press(getByText('Go to Cart'));

    // Check if navigation function was called with 'Cart'
    expect(navigateMock).toHaveBeenCalledWith('Cart');
  });
});
