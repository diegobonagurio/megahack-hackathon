import styled from 'styled-components/native';
import { colors, fonts } from '../../constraints';

export const Container = styled.View`

`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-family: ${fonts.SegoeUI};
  font-size: 14px;
`;

export const Category = styled.Text`
  font-family: ${fonts.SegoeUI};
  font-size: 14px;
`;

export const DueData = styled.Text`
  font-size: 14px;
  font-family: ${fonts.SegoeUI};
  color: ${colors.green};
`;

export const Value = styled.Text`
  font-size: 14px;
  font-family: ${fonts.SegoeUIBold};
  left: 40px;
`;

export const Line = styled.View`
  height: 2px;
  background: #f2f2f2;
  margin: 0 -25px 20px;
`;

