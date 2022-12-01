import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ActivityIndicator,
  Image,
} from "react-native";
import MainImage from "../assets/images/cloud_main.png";

export default function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>MainPage</Text>
      <StatusBar style="auto" />
      <Image source={MainImage} style={Mainimgstyles.image} />
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

const Mainimgstyles = StyleSheet.create({
  image: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
});
