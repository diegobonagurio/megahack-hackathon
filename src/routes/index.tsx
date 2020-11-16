import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../constraints'

import Home from '../pages/Home';
import Tabs from './tab';
import AddValue from '../pages/AddValue';
import CashFlow from './cashflow.tab';
import Main from '../pages/Main';

const Stack = createStackNavigator();

const ScreensRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: `${colors.white}` }
    }}
  >
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AddValue" component={AddValue} />    
    <Stack.Screen name="Tabs" component={Tabs} />    
    <Stack.Screen name="CashFlow" component={CashFlow} />
  </Stack.Navigator>
);

export default ScreensRoutes;