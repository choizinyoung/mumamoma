import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Text>안녕하세요</Text>
      <image
        style={{ height: "100%", width: "100%", resizeMode: "contain" }}
        source={require("./assets/images/cloud_main.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});