import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon, Line } from './styles';
import { colors } from '../../constraints';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const InputNew: React.FC<InputProps> = ({name, icon, ...rest}) => {
  return (
    <Container>
      <Icon name={icon} size={20} color={`${colors.primary}`} />

      <TextInput 
        keyboardAppearance="dark"
        placeholderTextColor="#b7b7b7" 
        {...rest} 
      />
    </Container>
  );
}

export default InputNew;