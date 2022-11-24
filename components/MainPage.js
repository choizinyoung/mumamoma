import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';


export default function MainPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text>안녕하세요</Text>
      <Text>gpgpgpggmlglglg</Text>
      <Button title="Information Page" onPress={()=> navigation.navigate('InformationPage')} />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
