import styled from 'styled-components/native';
import { colors, fonts } from '../../constraints';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled(RectButton)`
  height: 45px;
  width: 100%;
  border-radius: 20px;
  background: ${colors.primary};
  justify-content: center;
  position: absolute;
  align-self: center;
  top: 90%;
`;

export const ButtonText = styled.Text`
  font-family: 'Segoe UI Bold';
  text-align: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 20px;
`;