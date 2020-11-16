import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
Container,
TextReport,
Balance,
TextDesc,
Line,
} from './styles';

import {data} from '../../service/apiFake';

import InputNew from '../../components/InputNew';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Receipts: React.FC = () => {
  const { navigate } = useNavigation();

  return(
    <Container>
      <TextReport>Total de Contas a Receber</TextReport>
      <Balance>R$ 8.240,00</Balance>

      <InputNew name="filter" icon="calendar" placeholder="Faça uma busca" />  
    
      <TextDesc>A Receber</TextDesc>
      <Line />

      {data
      .filter(data => data.status === 'A receber')
      .map(each => {
        return(
          <Card 
          key={each.id}
          type={each.type} 
          description={each.description} 
          category={each.category}
          duedata={each.duedata} 
          value={each.value} 
        />
        )
      })}      
      
      <Button onPress={() => navigate('AddValue')}>Adicionar conta</Button>

    </Container>
  );
}

export default Receipts;