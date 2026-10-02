import { ScrollView, StyleSheet, Text } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Sobre o app</Text>
      <Text style={styles.text}>Versão 1.0.0</Text>
      <Text style={styles.text}>
        Projeto de estudo feito com Expo, Expo Router e React Native. As abas
        usam componentes nativos de cada plataforma.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingTop: 72, gap: 12 },
  title: { fontSize: 28, fontWeight: '700' },
  text: { fontSize: 16, lineHeight: 22, color: '#444' },
});