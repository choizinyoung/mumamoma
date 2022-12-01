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
<<<<<<< HEAD
=======
import MainImageB from "../assets/images/cloudb.png";
>>>>>>> 49743464e73e01971ba9c933078f52a4d5a6fa96

export default function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>메인페이지</Text>
      <StatusBar style="auto" />
      <Image source={MainImage} style={Mainimgstyles.image} />
=======
      <Text>강남구 일원동</Text>
      <Text>날짜 시간 </Text>
      <StatusBar style="auto" />
      <Image source={MainImage} style={Mainimgstyles.image} />
      <Image source={MainImageB} style={MainimgstylesB.image} />
>>>>>>> 49743464e73e01971ba9c933078f52a4d5a6fa96
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

<<<<<<< HEAD
=======
const MainimgstylesB = StyleSheet.create({
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
});
>>>>>>> 49743464e73e01971ba9c933078f52a4d5a6fa96
const Mainimgstyles = StyleSheet.create({
  image: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
<<<<<<< HEAD
  },
});
=======
    flexDirection: "column",
    marginBottom: -300,
  },
});
>>>>>>> 49743464e73e01971ba9c933078f52a4d5a6fa96
