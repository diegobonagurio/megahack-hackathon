import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native'

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  CheckBox
} from 'react-native';

import { Picker } from '@react-native-community/picker';

import { 
Container, 
TextAddValue,
InputSelect,
Wrapper,
CheckBoxContainer,
CheckBoxText,
 } from './styles';


import Header from '../../components/Header';
import InputNew from '../../components/InputNew';
import Button from '../../components/Button';
import { colors } from '../../constraints';

const AddValue: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedValue, setSelectedValue] = useState("Selecione uma categoria");
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelectedPay, setSelectionPay] = useState(false);
  const [isSelectedRec, setSelectionRec] = useState(false);

  return (
    <>
      <Header title="Adicionar Conta" />
      <Container>
        <Wrapper>
          <TextAddValue>
          Adicionar Receitas e Despesas futuras te ajuda
           a monitorar a situação financeira da sua empresa
          </TextAddValue>

          <InputNew name="accounts" icon="dollar-sign" placeholder="Insira a descrição da conta" />
          <InputNew name="payment" icon="calendar" placeholder="Data do vencimento" />
          <InputSelect>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 350, color: "#b7b7b7" }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Selecione uma categoria" />
              <Picker.Item label="Receita" value="receita" />
              <Picker.Item label="Despesa" value="despesa" />
            </Picker>
          </InputSelect>

          <CheckBoxContainer>
            <CheckBox
              value={isSelectedPay}
              onValueChange={setSelectionPay}
            />

            <CheckBoxText>Adicionar a contas a receber</CheckBoxText>
          </CheckBoxContainer>

          <CheckBoxContainer>
            <CheckBox
              value={isSelectedRec}
              onValueChange={setSelectionRec}
            />

            <CheckBoxText>Adicionar a contas a pagar</CheckBoxText>
          </CheckBoxContainer>
          
        </Wrapper>
        
        <Button onPress={() => {setModalVisible(true)}}>Continuar</Button>
      </Container>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Sucesso!</Text>
              <Text style={styles.modalSubTitle}>A conta foi adicionada!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: `${colors.primary}` }}
                onPress={() => {
                  navigate('Tabs')
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>OK</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

export default AddValue;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#e02045",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    width: 150,
    elevation: 3
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    justifyContent: "flex-start",
    color: `${colors.primary}`,
  },
  modalSubTitle: {
    marginBottom: 15,
    textAlign: "center"
  }
});