import { Image, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
       source={require("../assets/images/sofia-viana.jpeg")}
        style={styles.image}
      />

      <Text style={styles.name}>Sofia Viana</Text>
      <Text style={styles.role}>Estudante de Sistemas para Internet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
  },
  role: {
    fontSize: 16,
    color: "#666",
  },
});