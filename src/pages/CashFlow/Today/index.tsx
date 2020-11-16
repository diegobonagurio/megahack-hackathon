import React from 'react';

import { 
Container,
Wrapper,
OpeningBalance,
ValueOpening,
CashInput,
ValueInput,
CashOutput,
ValueOutput,
CashOperating,
ValueOperating,
Total, 
ValueTotal,
Line,
ImageDiv,
ReportText
} from './styles';

import dayChart from '../../../assets/Day_chart.png';

const Today: React.FC = () => {
  return(
    <Container>

      <Wrapper>
        <OpeningBalance>Saldo Inicial</OpeningBalance>
        <ValueOpening>R$ 2.950,00</ValueOpening>
      </Wrapper>
      <Line />
     
      <Wrapper>
        <CashInput>Entradas de Caixa</CashInput>
        <ValueInput>R$ 4.050,00</ValueInput>
      </Wrapper>

      <Wrapper>
        <CashOutput>Saídas de Caixa</CashOutput>
        <ValueOutput>R$ 4.300,00</ValueOutput>
      </Wrapper>

      <Wrapper>
        <CashOperating>Saldo Operacional</CashOperating>
        <ValueOperating>R$ -250,00</ValueOperating>
      </Wrapper>
      
      <Line />

      <Wrapper>
        <Total>Saldo Final de Caixa</Total>
        <ValueTotal>R$ 2.700,00</ValueTotal>
      </Wrapper>

      <ReportText>Comparativo do dia</ReportText>

      <ImageDiv source={dayChart} />


    </Container>
  );
}

export default Today;