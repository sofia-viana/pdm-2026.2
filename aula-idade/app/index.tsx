import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";

export default function App() {
  const [idade, setIdade] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    let ano = 2026 - Number(idade);
    if (Number(mes) > 8) {
      ano--;
    }
    if (Number(mes) === 8 && Number(dia) > 25) {
      ano--;
    }
    setResultado("Você nasceu em " + ano);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ano de Nascimento</Text>

      <TextInput
        style={styles.input}
        placeholder="Sua idade"
        keyboardType="default"
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Dia do aniversário"
        keyboardType="default"
        onChangeText={setDia}
      />

      <TextInput
        style={styles.input}
        placeholder="Mês do aniversário"
        keyboardType="default"
        onChangeText={setMes}
      />

      <View style={styles.botao}>
        <Button title="Calcular" onPress={calcular} />
      </View>

      {resultado !== "" && (
        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>{resultado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
  },

  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#5c5858",
    borderWidth: 1,
    borderColor: "#0b0b0b",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    textAlign: "center",
  },

  botao: {
    width: "50%",
    marginTop: 5,
  },

  resultado: {
    width: "80%",
    padding: 20,
    marginTop: 25,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },

  textoResultado: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
