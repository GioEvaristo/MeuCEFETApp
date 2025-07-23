import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Alert, Image, StyleSheet } from 'react-native';

export default function Login({ navigation }: any) {

  const [nome, setNome] = useState("");

  function irParaHome() {
    if (!nome.trim()) {
      Alert.alert('Nome obrigatório', 'Preencha seu nome.');
      return;
    }
    navigation.navigate('pag-home', { nome });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/logo_cefet.png')}/>
      <Text style={styles.titulo}>Meu CEFET-MG</Text>
      <View style={styles.caixa}>
        <View style={styles.view}>
          <Text style={styles.subtitulo}>Aluno(a): </Text>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        </View>
      </View>
      <Pressable onPress={irParaHome} style={styles.botao}>
        <Text style={styles.frase}>Entrar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcf86',
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#2980b9',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495e',
    textAlign: 'center',
    marginBottom: 20,
  },
  caixa: {
    backgroundColor: '#ffeead',
    borderWidth: 5,
    borderRadius: 30,
    marginBottom: 30,
    borderColor: "#ffcc5c",
  },
  aula: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 10,
    marginTop: 30,

  },
  input: {
    backgroundColor: 'white',
    borderWidth: 0.2,
    borderRadius: 10,
    height: 41,
    width: 220,
  },
  botao: {
    borderRadius: 10,
    padding: 4,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#ff8c00'
  },
  frase: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2980b9',
    textAlign: 'center',
  },
  img: {
    width: 200,
    height: 150,
    margin: 20,
  },
});