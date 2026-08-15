import { ScrollView, StyleSheet, View } from "react-native";
import Profile from "../components/Profile";
import Minibio from "../components/MiniBio";


export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Profile />
        <Minibio />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f2f2f7",
  },
  card: {
    width: "100%",
    maxWidth: 500,
    padding: 28,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});