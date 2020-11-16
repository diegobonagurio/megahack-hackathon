import React from 'react';
import {useNavigation} from '@react-navigation/native';

import { Container, ImageDiv, ImageLinker, ButtonContainer, ViewCont } from './styles';

import main from '../../assets/main.png';
import linkerContabil from '../../assets/linker_contabil.png';

const Main: React.FC = () => {
  const { navigate } = useNavigation();

  return(
    <Container>
      
      <ImageDiv source={main} />
      
      <ViewCont>
        <ButtonContainer onPress={() => navigate('Home')}>
          <ImageLinker source={linkerContabil} />
        </ButtonContainer>
      </ViewCont>
      
      


    </Container>
  );
}

export default Main;