import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { 
Container,
Description,
Category,
DueData,
Value,
Wrapper,
Line
} from './styles';

interface CardProps {
  description: string;
  category: string;
  duedata: Date;
  value: string;
  type: string;
}

const Card: React.FC<CardProps> = ({description, type, category, duedata, value, ...rest}) => {
  const currentDate = '15/11/2020';
  return(
    <Container>
      <Wrapper>
        <Description>{description}</Description>
        <Category>{category}</Category>
      </Wrapper>
      
      <Wrapper>
        <DueData style={duedata < currentDate ? {color: '#FF6d70'} : {color: '#45d883'}}>{type}: {duedata}</DueData> 
        <Value>R$ {value}</Value>
        <Icon name="edit" size={20} color="#316094" />
      </Wrapper>
      <Line />
    </Container>
  );
}

export default Card;