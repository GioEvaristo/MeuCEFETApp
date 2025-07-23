import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Alert, Image, StyleSheet } from 'react-native';

export default function Login({ navigation }: any) {

    const [nome, setNome] = useState("");

    function irParaHome() {
        navigation.navigate('pag-home', { nome });
    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 70, backgroundColor: '#96ceb4' }}>
            <Text style={{ fontSize: 50, fontWeight: 'bold', color: "green" }}>Meu CEFET-MG</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 10 }}>Insira seu nome para acessar o aplicativo</Text>
            <View style={{ backgroundColor: '#ffeead', borderWidth: 5, borderRadius: 30, marginBottom: 30, borderColor: "#ffcc5c" }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        margin: 10,
                        marginTop: 30
                    }}
                >

                    <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Nome: </Text>

                    <TextInput
                        style={{ backgroundColor: 'white', borderWidth: 0.2, borderRadius: 10, height: 41, width: 220 }}
                        value={nome}
                        onChangeText={setNome}
                    />

                </View>
            </View>
            <Pressable
                onPress={irParaHome}
                style={{
                    borderWidth: 5,
                    borderRadius: 20,
                    borderColor: '#cc5854',
                    padding: 7,
                    width: 100,
                    alignItems: 'center',
                    backgroundColor: '#ff6f69'
                }}
            >
                <Text style={{ fontSize: 23, color: 'white', fontWeight: 'bold' }}>Entrar</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcf86',
    padding: 15,
  },
  horarios: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  class: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  aula: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
  },
});