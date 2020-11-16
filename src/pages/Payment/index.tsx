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

const Payment: React.FC = () => {
  const { navigate } = useNavigation();
  const [show, setShow] = useState<boolean>(true);

  return(
    <Container>
      <TextReport>Total de Contas a pagar</TextReport>
      <Balance>R$ 22.716,00</Balance>

      <InputNew name="filter" icon="calendar" placeholder="Faça uma busca" />  
    
      <TextDesc>Vencidas</TextDesc>
      <Line />

      {data
      .filter(data => data.status === 'Vencidas')
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

      <TextDesc>A vencer</TextDesc>
      <Line />

      {data
      .filter(data => data.status === 'A vencer')
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

export default Payment;