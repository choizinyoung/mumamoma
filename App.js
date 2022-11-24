//import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from './components/MainPage';
import InformationPage from './components/InformationPage';

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="InformationPage" component={InformationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
