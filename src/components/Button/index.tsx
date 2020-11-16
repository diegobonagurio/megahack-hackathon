import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children?: string;
  name?: string;
  fontSize?: number;
  color?: string;
  onPress?: (pointerInside: boolean) => void | undefined;
}

const Button: React.FC<ButtonProps> = ({
  children,
  fontSize,
  color,
  name,
  onPress,
  ...rest
}) => {
  return (
    <Container onPress={onPress} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}

export default Button;