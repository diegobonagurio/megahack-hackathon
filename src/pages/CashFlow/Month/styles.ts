import styled from 'styled-components/native';
import { colors, fonts } from '../../../constraints';
import { Image } from 'react-native';

export const Container = styled.View`
  height: 100%;
  background: #FFF;
  padding: 18px 25px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const OpeningBalance = styled.Text`
  font-family: ${fonts.SegoeUI};
  font-size: 14px;
`;

export const ValueOpening = styled.Text`
  font-family: ${fonts.SegoeUI};
  font-size: 14px;
`;

export const CashInput = styled.Text`
  font-family: ${fonts.SegoeUI};
  font-size: 14px;
`;

export const ValueInput = styled.Text`
font-family: ${fonts.SegoeUI};
  font-size: 14px;
`;

export const CashOutput = styled.Text`
  font-family: ${fonts.SegoeUI};
  font-size: 14px;
`;

export const ValueOutput = styled.Text`
  font-family: ${fonts.SegoeUI};
  font-size: 14px;
`;

export const CashOperating = styled.Text`
  font-family: ${fonts.SegoeUI};
  font-size: 14px;
`;

export const ValueOperating = styled.Text`
  font-family: ${fonts.SegoeUI};
  font-size: 14px;
`;

export const Total  = styled.Text`
  font-family: ${fonts.SegoeUIBold};
  font-size: 14px;
`;

export const ValueTotal = styled.Text`
  color: ${colors.green};
  font-family: ${fonts.SegoeUI};
  font-size: 16px;
`;

export const Line = styled.View`
  height: 2px;
  background: #f2f2f2;
  margin-bottom: 20px;
`;

export const ImageDiv = styled(Image)`
  align-self: center;
  margin-top: 30px;
`;

export const ReportText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.SegoeUIBold};
`;
