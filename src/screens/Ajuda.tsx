import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Ajuda() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Perguntas Frequentes</Text>
      <View style={styles.faqItem}>
        <Text style={styles.pergunta}>1. O que é o CEFET-MG e quais cursos ele oferece em Varginha?</Text>
        <Text style={styles.resposta}>
          O CEFET é uma instituição federal de ensino técnico e superior que oferece cursos em diversas áreas, incluindo Técnico, Tecnológico e Graduação. Temos cursos de Engenharia Civil, Informática, Mecatrônica e Edificações. Confira a grade curricular dos cursos disponíveis no nosso site.
        </Text>
      </View>
      <View style={styles.faqItem}>
        <Text style={styles.pergunta}>2. Qual é a diferença entre os cursos técnicos e os superiores oferecidos pelo CEFET?</Text>
        <Text style={styles.resposta}>
          - <Text style={styles.subItem}>Cursos Técnicos:</Text> São cursos técnicos integrados, com duração referênte aos anos do ensino médio. Eles preparam o aluno para o mercado de trabalho em áreas técnicas específicas.
        </Text>
        <Text style={styles.resposta}>
          - <Text style={styles.subItem}>Cursos Superiores:</Text> São cursos de graduação, com duração de 4 a 5 anos, que conferem diplomas de bacharelado. O aluno se aprofunda na área escolhida e pode seguir para pós-graduação.
        </Text>
      </View>
      <View style={styles.faqItem}>
        <Text style={styles.pergunta}>3. Como faço para ingressar no CEFET?</Text>
        <Text style={styles.resposta}>
          O ingresso no CEFET pode ser feito por meio de:
        </Text>
        <Text style={styles.resposta}>
          - Vestibular: Processo seletivo para cursos técnicos e superiores.
        </Text>
        <Text style={styles.resposta}>
          - SISU: Utilizando a nota do ENEM para ingressar em cursos de graduação.
        </Text>
        <Text style={styles.resposta}>
          - Programa de Iniciação Científica e Extensão: Para alunos de cursos técnicos ou superiores que buscam projetos extracurriculares.
        </Text>
      </View>
      <View style={styles.faqItem}>
        <Text style={styles.pergunta}>4. Quais são os requisitos para entrar no CEFET?</Text>
        <Text style={styles.resposta}>
          Os requisitos variam conforme o tipo de curso:
        </Text>
        <Text style={styles.resposta}>
          - <Text style={styles.subItem}>Cursos Técnicos:</Text> Concluir o ensino fundamental ou estar cursando o ensino médio.
        </Text>
        <Text style={styles.resposta}>
          - <Text style={styles.subItem}>Cursos Superiores:</Text> Para ingressar na graduação, é necessário ter concluído o ensino médio e participar de um processo seletivo (vestibular ou SISU).
        </Text>
      </View>
      <View style={styles.faqItem}>
        <Text style={styles.pergunta}>5. O CEFET oferece bolsas de estudo?</Text>
        <Text style={styles.resposta}>
          Sim, o CEFET oferece diferentes tipos de bolsas de estudo, incluindo:
        </Text>
        <Text style={styles.resposta}>
          - <Text style={styles.subItem}>Bolsas de Iniciação Científica:</Text> Para alunos de cursos técnicos ou superiores envolvidos em pesquisas.
        </Text>
        <Text style={styles.resposta}>
          - <Text style={styles.subItem}>Auxílio Alimentação e Transporte:</Text> Para estudantes que atendem aos critérios de necessidade econômica.
        </Text>
      </View>
      <View style={styles.faqItem}>
        <Text style={styles.resposta}>
          O calendário acadêmico completo, com datas de início e término de bimestres/semestres, férias, feriados e eventos importantes, está disponível no site oficial.
        </Text>
      </View>
      <View style={styles.faqItem}>
        <Text style={styles.frase}>
          Se você tiver outras dúvidas, não hesite em entrar em contato com a nossa Central de Atendimento! Estamos à disposição para ajudá-lo.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcf86',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginBottom: 20,
  },
  faqItem: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  pergunta: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2980b9',
  },
  frase: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2980b9',
    textAlign: 'center',
  },
  resposta: {
    fontSize: 16,
    color: '#34495e',
    marginTop: 5,
    
  },
  subItem: {
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});
