import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Título de boas-vindas */}
      <Text style={styles.welcomeText}>🎓 Seja muito bem-vindo(a) ao CEFET-MG! 🎓</Text>

      {/* Introdução */}
      <Text style={styles.introText}>
        É com imensa alegria e entusiasmo que recebemos você nesta nova jornada! A partir de agora, você faz parte de uma das instituições mais respeitadas do país em ensino, pesquisa e inovação tecnológica. Aqui no Centro Federal de Educação Tecnológica de Minas Gerais, você encontrará muito mais do que salas de aula e laboratórios — encontrará oportunidades, desafios, amizades, conhecimento e crescimento pessoal.
        Sabemos que iniciar um novo ciclo é sempre um misto de expectativas e descobertas, por isso criamos este aplicativo com o propósito de facilitar sua integração, apoiar seu cotidiano acadêmico e aproximá-lo ainda mais de tudo o que o CEFET tem a oferecer. Navegue por aqui para acompanhar seus horários, notas, comunicados, eventos, avisos importantes e muito mais. Nossa missão é tornar sua experiência conosco mais organizada, prática e completa.
      </Text>

      {/* Reflexão sobre a jornada */}
      <Text style={styles.journeyText}>
        Lembre-se: o conhecimento é um caminho contínuo, e cada passo dado dentro do CEFET representa uma conquista. Valorize cada momento, aproveite ao máximo nossos recursos, nossos professores, colegas e toda a estrutura que foi pensada para apoiar seu desenvolvimento.
        Estamos felizes por ter você conosco. Que esta etapa seja marcada por aprendizados, descobertas e muitas conquistas. Que você se sinta acolhido(a), respeitado(a) e, acima de tudo, motivado(a) a construir o seu melhor futuro.
      </Text>

      {/* Mensagem final */}
      <Text style={styles.finalMessage}>📚 Bem-vindo(a) ao aplicativo Meu CEFET-MG! Aqui começa uma nova fase da sua história.</Text>

    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  introText: {
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
    marginBottom: 15,
  },
  journeyText: {
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
    marginBottom: 15,
  },
  finalMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
});
