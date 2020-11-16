import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Payment from '../pages/Payment';
import Receipts from '../pages/Receipts';
import Header from '../components/Header';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <>
      <Header title="Contas a pagar e receber" />
      <Tab.Navigator>
        <Tab.Screen name="Contas a pagar" component={Payment} />
        <Tab.Screen name="Contas a receber" component={Receipts} />
      </Tab.Navigator>
    </>
  );
}
