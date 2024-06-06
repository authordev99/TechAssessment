/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navbar from './src/pages/answers/Navbar.tsx';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}
export default App;
