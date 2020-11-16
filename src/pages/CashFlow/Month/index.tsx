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
ReportText, 
ImageDiv
} from './styles';

import monthChart from '../../../assets/Month_chart.png';

const Month: React.FC = () => {
  return(
    <Container>

      <Wrapper>
        <OpeningBalance>Saldo Inicial</OpeningBalance>
        <ValueOpening>R$ 94.200,00</ValueOpening>
      </Wrapper>
      <Line />
     
      <Wrapper>
        <CashInput>Entradas de Caixa</CashInput>
        <ValueInput>R$ 44.250,00</ValueInput>
      </Wrapper>

      <Wrapper>
        <CashOutput>Saídas de Caixa</CashOutput>
        <ValueOutput>R$ 39.750,00</ValueOutput>
      </Wrapper>

      <Wrapper>
        <CashOperating>Saldo Operacional</CashOperating>
        <ValueOperating>R$ 4.500,00</ValueOperating>
      </Wrapper>
      
      <Line />

      <Wrapper>
        <Total>Saldo Final de Caixa</Total>
        <ValueTotal>R$ 98.700,00</ValueTotal>
      </Wrapper>

      <ReportText>Comparativo do mês</ReportText>

      <ImageDiv source={monthChart} />

    </Container>
  );
}

export default Month;