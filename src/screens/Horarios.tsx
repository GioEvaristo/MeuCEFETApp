import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Horarios() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cursos Técnicos Integrados</Text>

      <Text style={styles.titulo}>🕘 Segunda a Sexta-feira: 7h00 às 13h00</Text>

      <View style={styles.horarios}>
        <Text style={styles.aula}>1ª Aula: 7h00 – 7h50</Text>
        <Text style={styles.aula}>2ª Aula: 7h50 – 8h40</Text>
        <Text style={styles.aula}>3ª Aula: 8h40 – 9h30</Text>
      </View>

      <Text style={styles.titulo}>☕ Intervalo: 9h30 – 9h50</Text>

      <View style={styles.horarios}>
        <Text style={styles.aula}>4ª Aula: 9h50 – 10h40</Text>
        <Text style={styles.aula}>5ª Aula: 10h40 – 11h30</Text>
        <Text style={styles.aula}>6ª Aula: 11h30 – 12h20</Text>
        <Text style={styles.aula}>Estudos orientados: 12h20 – 13h00</Text>
      </View>

      <Text style={styles.titulo}>⏰ Horário de Atendimento da Secretaria</Text>
      <Text style={styles.aula}>Segunda a Sexta: 8h00 – 17h00</Text>
      <Text style={styles.aula}>Sábado: 8h00 – 12h00</Text>
      <Text style={styles.titulo}>E-mail e WhatsApp disponíveis para atendimento remoto.</Text>
    </View>
  );
}

// Estilos
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
