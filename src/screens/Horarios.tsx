import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Horarios() {
  return (
    <View style={styles.container}>
      {/* Título de Ensino Médio */}
      <Text style={styles.title}>Ensino Médio (1ª à 3ª série)</Text>

      {/* Horários de Aulas */}
      <Text style={styles.schedule}>🕘 Segunda a Sexta-feira: 7h00 às 13h00</Text>

      {/* Aulas */}
      <View style={styles.classItem}>
        <Text style={styles.class}>1ª Aula: 7h00 – 7h50</Text>
        <Text style={styles.class}>2ª Aula: 7h50 – 8h40</Text>
        <Text style={styles.class}>3ª Aula: 8h40 – 9h30</Text>
      </View>

      {/* Intervalo */}
      <Text style={styles.interval}>☕ Intervalo: 9h30 – 9h50</Text>

      {/* Aulas pós intervalo */}
      <View style={styles.classItem}>
        <Text style={styles.class}>4ª Aula: 9h50 – 10h40</Text>
        <Text style={styles.class}>5ª Aula: 10h40 – 11h30</Text>
        <Text style={styles.class}>6ª Aula: 11h30 – 12h20</Text>
        <Text style={styles.class}>Estudos orientados: 12h20 – 13h00</Text>
      </View>

      {/* Horário de Atendimento */}
      <Text style={styles.attentionTitle}>⏰ Horário de Atendimento da Secretaria</Text>
      <Text style={styles.attentionHours}>Segunda a Sexta: 8h00 – 17h00</Text>
      <Text style={styles.attentionHours}>Sábado: 8h00 – 12h00</Text>
      <Text style={styles.attentionNote}>E-mail e WhatsApp disponíveis para atendimento remoto.</Text>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  schedule: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  classItem: {
    marginVertical: 5,
  },
  class: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  interval: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
  },
  attentionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  attentionHours: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  attentionNote: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'orange',
    marginLeft: 10,
    marginTop: 5,
  },
});
