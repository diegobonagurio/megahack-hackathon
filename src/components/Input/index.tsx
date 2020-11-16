import React from 'react';
import { TextInputProps, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, TextInput, Title, ViewColor, Line } from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  widthProp?: number;
  icon?: boolean;
  email?: boolean;
  password?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  widthProp,
  icon,
  email,
  password,
  ...rest
}) => (
  <Container>
    <Title>{label}</Title>
    <ViewColor>

      <TextInput
        /* style={{ width: widthProp !== undefined ? widthProp : 370 }} */
        placeholderTextColor="#b7b7b7"
        keyboardAppearance="dark"
        {...rest}
      />
      <Line />
    </ViewColor>
    
    
  </Container>
);

export default Input;