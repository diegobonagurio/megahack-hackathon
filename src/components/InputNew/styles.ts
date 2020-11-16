import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { fonts } from '../../constraints';

export const Container = styled.View`
  width: 100%;
  height: 42px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #b7b7b7;
  margin: 10px 0;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: ${fonts.SegoeUI};
  font-size: 13px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 5px;
`;

export const Line = styled.View`
  height: 2px;
  background: #b7b7b7;
`;