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

import yearChart from '../../../assets/Year_chart.png';

const Year: React.FC = () => {
  return(
    <Container>

      <Wrapper>
        <OpeningBalance>Saldo Inicial</OpeningBalance>
        <ValueOpening>R$ 1.085.700,00</ValueOpening>
      </Wrapper>
      <Line />
     
      <Wrapper>
        <CashInput>Entradas de Caixa</CashInput>
        <ValueInput>R$ 758.000,00</ValueInput>
      </Wrapper>

      <Wrapper>
        <CashOutput>Saídas de Caixa</CashOutput>
        <ValueOutput>R$ 697.000,00</ValueOutput>
      </Wrapper>

      <Wrapper>
        <CashOperating>Saldo Operacional</CashOperating>
        <ValueOperating>R$ 61.000,00</ValueOperating>
      </Wrapper>
      
      <Line />

      <Wrapper>
        <Total>Saldo Final de Caixa</Total>
        <ValueTotal>R$ 1.146.700,00</ValueTotal>
      </Wrapper>

      <ReportText>Comparativo do mês</ReportText>

      <ImageDiv source={yearChart} />

    </Container>
  );
}

export default Year;