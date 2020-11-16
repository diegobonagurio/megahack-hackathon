import styled from 'styled-components/native';
import { colors, fonts } from '../../constraints';

export const Container = styled.View`
  height: 100%;
  background: #FFF;
  padding: 22px 25px;
`;

export const TextReport = styled.Text`
  color: ${colors.secondary};
  font-family: ${fonts.SegoeUI};
  font-size: 16px;
  margin-bottom: 5px;
`;


export const Balance = styled.Text`
  color: ${colors.green};
  font-family: ${fonts.SegoeUI};
  font-size: 22px;
  margin: 6px 0;
`;

export const TextDesc = styled.Text`
  font-size: 14px;
  font-family: ${fonts.SegoeUIBold};
  margin: 12px 0 5px;
`;

export const Line = styled.View`
  height: 2px;
  background: #f2f2f2;
  margin: 0 -25px 20px;
`;


