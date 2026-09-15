import { View, Text, StyleSheet } from "react-native";

type DadoProps = {
  valor: number;
};

export default function Dado({ valor }: DadoProps) {
  return (
    <View style={styles.dado}>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dado: {
    width: 80,
    height: 80,
    backgroundColor: "#ffffff",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  valor: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
