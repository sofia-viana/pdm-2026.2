import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function Notificacoes() {
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <Text style={styles.texto}>Notificações push</Text>
        <Switch value={push} onValueChange={setPush} />
      </View>
      <View style={styles.linha}>
        <Text style={styles.texto}>Resumo por e-mail</Text>
        <Switch value={email} onValueChange={setEmail} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 16 },
  linha: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  texto: { fontSize: 16 },
});