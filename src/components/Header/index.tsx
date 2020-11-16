import React from 'react';

import { Container, Text } from './styles';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import back from '../../assets/arrow-left.png';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../constraints';

interface PageHeaderProps {
  title?: string;
}

const Header: React.FC<PageHeaderProps> = ({ title }) => {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <BorderlessButton onPress={handleGoBack} style={{marginLeft: 20, position: "relative"}}>
        <Image source={back} />
       </BorderlessButton>

      <Text>{title}</Text>
    </Container>
  );
};

export default Header;