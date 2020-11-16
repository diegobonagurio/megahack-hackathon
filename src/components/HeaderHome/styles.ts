import styled from 'styled-components/native';
import { colors } from '../../constraints';

export const Container = styled.View`
  background: ${colors.secondary};
  height: 121px;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  position: relative;
  color: #fff;
  margin: 0 auto;
  padding-right: 30px;
  font-size: 16px;
`;