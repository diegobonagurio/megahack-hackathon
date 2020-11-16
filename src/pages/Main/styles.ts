import styled from 'styled-components/native';
import {Image} from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #FFF;
  height: 100%;
`;

export const ImageDiv = styled(Image)`
  align-self: center;
  top: 100px;
  transform: scale(1.22);
`;

export const ImageLinker = styled(Image)`
  
`;

export const ButtonContainer = styled(RectButton)`

`;

export const ViewCont = styled.View`
  position: absolute;
  left: 180px;
  top: 82%;
  transform: scale(0.95);
`;