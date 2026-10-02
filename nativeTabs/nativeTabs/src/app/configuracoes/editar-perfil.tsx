import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function EditarPerfil() {
  const router = useRouter();
  const [nome, setNome] = useState('Maria Silva');
  const [email, setEmail] = useState('maria@email.com');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Pressable style={styles.botao} onPress={() => router.back()}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 8 },
  label: { fontSize: 14, fontWeight: '600', marginTop: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 12, fontSize: 16 },
  botao: { backgroundColor: '#0a7ea4', borderRadius: 10, padding: 14, alignItems: 'center', marginTop: 24 },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: '600' },
});