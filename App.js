import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import MainPage from "./components/MainPage";
import InformationPage from "./components/InformationPage";
import SettingPage from "./components/SettingPage";


const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen
          name="MainPage"
          options={{
            headerTitle: "무마모마",
          }}
          component={MainPage}
        />
        <Menu.Screen name="InformationPage" component={InformationPage} />
        <Menu.Screen name="SettingPage" component={SettingPage} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}