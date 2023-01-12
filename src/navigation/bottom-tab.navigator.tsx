import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "@/types/navigation.types";
import { NavigatorNamesEnum } from "@/enums/navigator.enums";

import NotesScreen from "@/screens/note";
import SettingsScreen from "@/screens/settings";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName={NavigatorNamesEnum.Notes}>
      <BottomTab.Screen
        name={NavigatorNamesEnum.Notes}
        component={NotesScreen}
      />
      <BottomTab.Screen
        name={NavigatorNamesEnum.Settings}
        component={SettingsScreen}
      />
    </BottomTab.Navigator>
  );
};
