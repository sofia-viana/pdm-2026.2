import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Dado from "./Dado";

export default function JogoDado() {
  const [rodada, setRodada] = useState(1);
  const [vez, setVez] = useState(1);

  const [d1j1, setD1j1] = useState(1);
  const [d2j1, setD2j1] = useState(1);

  const [d1j2, setD1j2] = useState(1);
  const [d2j2, setD2j2] = useState(1);

  const [resultado, setResultado] = useState("");

  const [pontosJ1, setPontosJ1] = useState(0);
  const [pontosJ2, setPontosJ2] = useState(0);

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

  function resultadoFinal() {
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

      <Text style={styles.titulo}>
        🎲 Jogo de Dados
      </Text>

      {!fim && (
        <Text style={styles.rodada}>
          Rodada {rodada}
        </Text>
      )}

      <Text style={styles.placar}>
        Placar: {pontosJ1} x {pontosJ2}
      </Text>

      <View style={styles.jogadores}>

        <View style={styles.jogador}>

          <Text style={styles.nomeJogador}>
            Jogador 1
          </Text>

          <View style={styles.dados}>
            <Dado valor={d1j1} />
            <Dado valor={d2j1} />
          </View>

          <TouchableOpacity
            style={[
              styles.botao,
              vez !== 1 && styles.botaoDesabilitado,
            ]}
            onPress={jogarJ1}
            disabled={vez !== 1 || fim}
          >
            <Text style={styles.textoBotao}>
              Jogar Dado
            </Text>
          </TouchableOpacity>

        </View>


        <View style={styles.jogador}>

          <Text style={styles.nomeJogador}>
            Jogador 2
          </Text>

          <View style={styles.dados}>
            <Dado valor={d1j2} />
            <Dado valor={d2j2} />
          </View>

          <TouchableOpacity
            style={[
              styles.botao,
              vez !== 2 && styles.botaoDesabilitado,
            ]}
            onPress={jogarJ2}
            disabled={vez !== 2 || fim}
          >
            <Text style={styles.textoBotao}>
              Jogar Dado
            </Text>
          </TouchableOpacity>

        </View>

      </View>


      {resultado !== "" && !fim && (
        <Text style={styles.resultado}>
          {resultado}
        </Text>
      )}


      /* RESULTADO FINAL */
      {fim && (
        <View style={styles.final}>

          <Text style={styles.resultadoFinal}>
            {resultadoFinal()}
          </Text>

          <TouchableOpacity
            style={styles.botaoNovamente}
            onPress={reiniciar}
          >
            <Text style={styles.textoBotao}>
              Jogar Novamente
            </Text>
          </TouchableOpacity>

        </View>
      )}

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 25,
  },

  rodada: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  placar: {
    fontSize: 20,
    marginBottom: 50,
  },

  jogadores: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  jogador: {
    width: "48%",
    alignItems: "center",
  },

  nomeJogador: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  dados: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 25,
  },

  botaoDesabilitado: {
    backgroundColor: "#aaa",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  resultado: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },

  final: {
    alignItems: "center",
    marginTop: 50,
  },

  resultadoFinal: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  botaoNovamente: {
    backgroundColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
});