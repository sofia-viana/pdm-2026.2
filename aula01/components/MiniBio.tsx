import { StyleSheet, Text, View } from "react-native";

export default function Minibio() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre mim</Text>

      <Text style={styles.bio}>
        Sou estudante de Sistemas para Internet e apaixonada por tecnologia,
        desenvolvimento e criação de projetos. Gosto de aprender coisas novas
        e transformar ideias em soluções.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 30,
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
});