import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [idade, setIdade] = useState("");
  const [anoNascimento, setAnoNascimento] = useState<number | null>(null);

  const anoAtual = new Date().getFullYear();

  function calcularNascimento() {
    const idadeNumerica = Number(idade);

    if (idadeNumerica > 0 && idadeNumerica <= 120) {
      setAnoNascimento(anoAtual - idadeNumerica);
    } else {
      setAnoNascimento(null);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🎂</Text>

        <Text style={styles.title}>
          Calculadora de Nascimento
        </Text>

        <Text style={styles.subtitle}>
          Descubra aproximadamente em que ano você nasceu!
        </Text>

        <Text style={styles.label}>
          Qual é a sua idade?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          placeholderTextColor="#999"
          keyboardType="default"
          value={idade}
          onChangeText={setIdade}
          maxLength={3}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={calcularNascimento}
        >
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {anoNascimento !== null && (
          <View style={styles.result}>
            <Text style={styles.resultText}>
              Você nasceu aproximadamente em:
            </Text>

            <Text style={styles.year}>
              {anoNascimento}
            </Text>
          </View>
        )}

        <Text style={styles.footer}>
          📅 Ano atual: {anoAtual}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 450,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 30,
    elevation: 6,
  },

  emoji: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    padding: 15,
    fontSize: 18,
    backgroundColor: "#f9fafb",
  },

  button: {
    backgroundColor: "#6c63ff",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },

  result: {
    marginTop: 25,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#f0f0ff",
    alignItems: "center",
  },

  resultText: {
    fontSize: 15,
    color: "#555",
    marginBottom: 8,
  },

  year: {
    fontSize: 38,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 14,
    color: "#888",
  },
});