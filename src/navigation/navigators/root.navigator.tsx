import { ReactElement } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigatorNamesEnum } from "@/enums/navigator.enums";
import { RootStackParamList } from "@/types/navigation.types";

import LoginScreen from "@/screens/login";
import NoteScreen from "@/screens/note";

import { BottomTabNavigator } from "./bottom-tab.navigator";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = (): ReactElement => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={NavigatorNamesEnum.Login}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={NavigatorNamesEnum.Main}
        component={BottomTabNavigator}
      />
      <RootStack.Screen name={NavigatorNamesEnum.Note} component={NoteScreen} />
    </RootStack.Navigator>
  );
};
