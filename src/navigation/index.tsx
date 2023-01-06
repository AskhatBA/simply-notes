import * as React from "react";
import { ColorSchemeName } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation.types";
import { NavigatorNamesEnum } from "@/enums/navigator.enums";
// Screens
import LoginScreen from "@/screens/login";
import { BottomTabNavigator } from "./bottom-tab.navigator";
import LinkingConfiguration from "./linking-config";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (): React.ReactElement => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={NavigatorNamesEnum.Login}
        component={LoginScreen}
      />
      <RootStack.Screen name="Main" component={BottomTabNavigator} />
    </RootStack.Navigator>
  );
};

const Navigation = ({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}): React.ReactElement => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
