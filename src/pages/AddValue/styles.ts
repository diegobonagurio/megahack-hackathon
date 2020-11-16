import styled from 'styled-components/native';
import { colors, fonts } from '../../constraints';

export const Container = styled.View`
  padding: 35px 25px; 
  background: #FFF;
`;

export const TextAddValue = styled.Text`
  color: ${colors.secondary};
  font-size: 15px;
  font-family: ${fonts.SegoeUI};
  margin-bottom: 20px;
`;

export const InputSelect = styled.View`

`;

export const Wrapper = styled.View`
  margin-bottom: 330px;
`;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  left: 10px;
`;

export const CheckBoxText = styled.Text`
  color: #b7b7b7;
  font-size: 15px;
  font-family: ${fonts.SegoeUI};
`;