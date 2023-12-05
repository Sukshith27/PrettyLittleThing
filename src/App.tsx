// // src/App.tsx
// import React from 'react';
// import {Provider} from 'react-redux';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import ProductListScreen from './screens/ProductListScreen';
// import store from './redux/store';

// const Stack = createStackNavigator();

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="ProductList">
//           <Stack.Screen
//             name="ProductList"
//             component={ProductListScreen}
//             options={{headerShown: false}}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
