import { Href, useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

type Opcao = { id: string; titulo: string; descricao: string; href: Href };

const OPCOES: Opcao[] = [
  { id: '1', titulo: 'Perfil', descricao: 'Slide da direita', href: '/configuracoes/editar-perfil' },
  { id: '2', titulo: 'Notificações', descricao: 'Fade', href: '/configuracoes/notificacoes' },
  { id: '3', titulo: 'Aparência', descricao: 'Slide de baixo', href: '/configuracoes/aparencia' },
];

export default function Configuracoes() {
  const router = useRouter();

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={OPCOES}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.lista}
      ItemSeparatorComponent={() => <View style={styles.separador} />}
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [styles.item, pressed && styles.pressed]}
          onPress={() => router.push(item.href)}
        >
          <View>
            <Text style={styles.itemTitulo}>{item.titulo}</Text>
            <Text style={styles.itemDescricao}>{item.descricao}</Text>
          </View>
          <Text style={styles.seta}>›</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: { padding: 16 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f7',
    borderRadius: 12,
    padding: 16,
  },
  pressed: { opacity: 0.6 },
  separador: { height: 10 },
  itemTitulo: { fontSize: 17, fontWeight: '600' },
  itemDescricao: { fontSize: 13, color: '#777', marginTop: 2 },
  seta: { fontSize: 24, color: '#999' },
});