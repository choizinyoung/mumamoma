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
import MainImageB from "../assets/images/cloudb.png";

export default function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>메인페이지</Text>
      <StatusBar style="auto" />
      <Image source={MainImage} style={Mainimgstyles.image} />
      <Image source={MainImageB} style={MainimgstylesB.image} />
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

const MainimgstylesB = StyleSheet.create({
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
});
const Mainimgstyles = StyleSheet.create({
  image: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
    flexDirection: "column",
    marginBottom: -300,
  },
});
