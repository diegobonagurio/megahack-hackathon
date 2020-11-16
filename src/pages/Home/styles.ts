import styled from 'styled-components/native';
import { colors, fonts } from '../../constraints';
import { RectButton } from 'react-native-gesture-handler';
import { Image } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  height: 100%;
  background: #FFF;
  padding: 20px 24px;
`;

export const ButtonCard = styled(RectButton)`
  background: ${colors.secondary};
  width: 100%;
  height: 102px;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ButtonCardTabs = styled(RectButton)`
  background: ${colors.primary};
  width: 100%;
  height: 102px;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.SegoeUI};
  font-size: 16px;
  color: #FFF;
`;

export const FunctionText = styled.Text`
  font-family: ${fonts.SegoeUIBold};
  font-size: 18px;
`;

export const Icon = styled(FeatherIcon)`
  align-self: flex-end;
  
`;

export const ImageDiv = styled(Image)`
  align-self: center;
`;



