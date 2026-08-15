import { View } from "react-native";
import Profile from "../components/Profile";
import Minibio from "@/components/MiniBio";

export default function Index() {
  return (
    <View>
      <Profile />
      <Minibio/>
    </View>
  );
}