import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Inicio() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Bem-vindo(a)! 👋</Text>
      <Text style={styles.text}>
        Este app demonstra o Expo Router com Native Tabs, navegação em pilha e
        diferentes animações de transição.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Como testar</Text>
        <Text style={styles.text}>
          Vá até a aba Configurações e toque nas opções da lista para ver cada
          animação do Stack.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingTop: 72, gap: 16 },
  title: { fontSize: 28, fontWeight: '700' },
  text: { fontSize: 16, lineHeight: 22, color: '#444' },
  card: { backgroundColor: '#f2f2f7', borderRadius: 16, padding: 16, gap: 8 },
  cardTitle: { fontSize: 18, fontWeight: '600' },
});