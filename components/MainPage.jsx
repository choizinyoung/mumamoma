import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>MainPage</Text>
      <StatusBar style="auto"/>
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
