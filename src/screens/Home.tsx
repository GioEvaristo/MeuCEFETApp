import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet, Pressable, Linking } from 'react-native';

export default function Home({ route, navigation }: any) {

  const nome = route?.params?.nome

  function irParaHorarios() {
    navigation.navigate('pag-horarios');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Seja muito bem-vindo(a) {nome} ao CEFET-MG!</Text>
      <Text style={styles.subtitulo}>Bem-vindo(a) ao aplicativo Meu CEFET-MG! Aqui começa uma nova fase da sua história.</Text>
      <Pressable
        onPress={irParaHorarios}
        style={{
          borderRadius: 10,
          padding: 4,
          marginBottom: 15,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: '#ff8c00'
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            textShadowColor: 'black',
          }}
        >Ver Horários</Text>
      </Pressable>
      <Text style={styles.texto}>
        É com imensa alegria e entusiasmo que recebemos você nesta nova jornada! A partir de agora, você faz parte de uma das instituições mais respeitadas do país em ensino, pesquisa e inovação tecnológica. Aqui no Centro Federal de Educação Tecnológica de Minas Gerais, você encontrará muito mais do que salas de aula e laboratórios — encontrará oportunidades, desafios, amizades, conhecimento e crescimento pessoal.
        Sabemos que iniciar um novo ciclo é sempre um misto de expectativas e descobertas, por isso criamos este aplicativo com o propósito de facilitar sua integração, apoiar seu cotidiano acadêmico e aproximá-lo ainda mais de tudo o que o CEFET tem a oferecer. Navegue por aqui para acompanhar seus horários, notas, comunicados, eventos, avisos importantes e muito mais. Nossa missão é tornar sua experiência conosco mais organizada, prática e completa.
      </Text>
      <Pressable
        onPress={() => Linking.openURL('https://www.varginha.cefetmg.br/')}
        style={{
          borderRadius: 10,
          padding: 4,
          marginBottom: 15,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: '#ff8c00'
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            textShadowColor: 'black',
          }}
        >Ir para o site</Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcf86',
    padding: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
    marginBottom: 15,
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 15,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
});
