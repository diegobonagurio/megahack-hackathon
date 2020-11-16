import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes';
import { colors } from './constraints';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
    <View  style={{ flex: 1, backgroundColor: '#f2f2f2'}}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
