import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Dado from "./Dado";

export default function JogoDados() {
  const [rodada, setRodada] = useState<number>(1);
  const [vez, setVez] = useState<number>(1);

  const [d1j1, setD1j1] = useState<number>(1);
  const [d2j1, setD2j1] = useState<number>(1);

  const [d1j2, setD1j2] = useState<number>(1);
  const [d2j2, setD2j2] = useState<number>(1);

  const [resultado, setResultado] = useState<string>("");

  const [pontosJ1, setPontosJ1] = useState<number>(0);
  const [pontosJ2, setPontosJ2] = useState<number>(0);

  const fim = rodada > 5;

  function jogarJ1() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    setD1j1(dado1);
    setD2j1(dado2);

    setResultado("");
    setVez(2);
  }

  function jogarJ2() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    setD1j2(dado1);
    setD2j2(dado2);

    const soma1 = d1j1 + d2j1;
    const soma2 = dado1 + dado2;

    if (soma1 > soma2) {
      setResultado("🏆 Jogador 1 ganhou a rodada!");
      setPontosJ1((prev) => prev + 1);
    } else if (soma2 > soma1) {
      setResultado("🏆 Jogador 2 ganhou a rodada!");
      setPontosJ2((prev) => prev + 1);
    } else {
      setResultado("🤝 Rodada empatada!");
    }

    setRodada((prev) => prev + 1);
    setVez(1);
  }

  function resultadoFinal(): string {
    if (pontosJ1 > pontosJ2) {
      return "🏆 Jogador 1 venceu o jogo!";
    }

    if (pontosJ2 > pontosJ1) {
      return "🏆 Jogador 2 venceu o jogo!";
    }

    return "🤝 Empate geral!";
  }

  function reiniciar() {
    setRodada(1);
    setVez(1);

    setPontosJ1(0);
    setPontosJ2(0);

    setResultado("");

    setD1j1(1);
    setD2j1(1);
    setD1j2(1);
    setD2j2(1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎲 Jogo de Dados</Text>

      {!fim && (
        <Text style={styles.rodada}>
          Rodada {rodada}
        </Text>
      )}

      <Text style={styles.placar}>
        Placar: {pontosJ1} x {pontosJ2}
      </Text>

      <View style={styles.jogadores}>
        /* Jogador 1 */
        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>
            Jogador 1
          </Text>

          <View style={styles.dados}>
            <Dado valor={d1j1} />
            <Dado valor={d2j1} />
          </View>

          <Button
            title="Jogar"
            onPress={jogarJ1}
            disabled={vez !== 1 || fim}
          />
        </View>

        /* Jogador 2 */
        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>
            Jogador 2
          </Text>

          <View style={styles.dados}>
            <Dado valor={d1j2} />
            <Dado valor={d2j2} />
          </View>

          <Button
            title="Jogar"
            onPress={jogarJ2}
            disabled={vez !== 2 || fim}
          />
        </View>
      </View>

      {resultado !== "" && !fim && (
        <Text style={styles.resultado}>
          {resultado}
        </Text>
      )}

      {fim && (
        <View style={styles.final}>
          <Text style={styles.resultado}>
            {resultadoFinal()}
          </Text>

          <Button
            title="Jogar novamente"
            onPress={reiniciar}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  rodada: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  placar: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },

  jogadores: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
  },

  jogador: {
    alignItems: "center",
    gap: 15,
  },

  nomeJogador: {
    fontSize: 20,
    fontWeight: "bold",
  },

  dados: {
    flexDirection: "row",
    gap: 10,
  },

  resultado: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },

  final: {
    alignItems: "center",
    gap: 20,
  },
});