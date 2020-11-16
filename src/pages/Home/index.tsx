import React from 'react';
import {useNavigation} from '@react-navigation/native';

import { 
Container,
ButtonCard,
ButtonText,
FunctionText,
ButtonCardTabs,
Icon,
ImageDiv
} from './styles';

import Header from '../../components/Header';

import Education from '../../assets/Education.png';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <Header title="Linker Contábil" />
      <Container>
        <ButtonCard onPress={() => navigate('CashFlow')}>
          <Icon name="help-circle" size={24} color="#FFF" />
          <ButtonText>Ver <FunctionText>Fluxo de Caixa</FunctionText></ButtonText>
        </ButtonCard>

        <ButtonCardTabs onPress={() => navigate('Tabs')}>
          <Icon name="help-circle" size={24} color="#FFF" />
          <ButtonText>Ver <FunctionText>Contas a Pagar e Receber</FunctionText></ButtonText>
        </ButtonCardTabs>

        <ImageDiv source={Education} />

      </Container>
    </>
  )
}

export default Home;