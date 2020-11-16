import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../components/Header';

import {View} from './styles';

import Today from '../pages/CashFlow/Today';
import Month from '../pages/CashFlow/Month';
import Year from '../pages/CashFlow/Year';
import InputNew from '../components/InputNew';

const Tab = createMaterialTopTabNavigator();

export default function CashFlow() {
  return (
    <>
      <Header title="Fluxo de Caixa" />
      <View>
        <InputNew name="filter" icon="calendar" placeholder="Busque um relatório por data" />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Hoje" component={Today} />
        <Tab.Screen name="Mês" component={Month} />
        <Tab.Screen name="Ano" component={Year} />
      </Tab.Navigator>
    </>
  );
}
