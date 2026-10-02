import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Aparencia() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Escolha o tema do app (exemplo).</Text>
      <Pressable style={styles.botao} onPress={() => router.back()}>
        <Text style={styles.botaoTexto}>Fechar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 16 },
  texto: { fontSize: 16 },
  botao: { backgroundColor: '#0a7ea4', borderRadius: 10, padding: 14, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: '600' },
});