import { Image, Text, View } from "react-native";

export default function Profile() {
  return (
    <View>
      <Image
        source={{ uri: "https://i.pravatar.cc/300" }}
        style={{ width: 150, height: 150, borderRadius: 75 }}
      />

      <Text>Sofia Viana</Text>
    </View>
  );
}