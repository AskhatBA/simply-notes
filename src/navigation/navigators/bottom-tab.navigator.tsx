import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RootTabParamList } from "@/types/navigation.types";
import { NavigatorNamesEnum } from "@/enums/navigator.enums";
import { NotesIcon, SettingsIcon } from "@/navigation/bottom-menu-icons";

import SettingsScreen from "@/screens/settings";

import NotesScreen from "@/screens/notes";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName={NavigatorNamesEnum.Notes}>
      <BottomTab.Screen
        name={NavigatorNamesEnum.Notes}
        component={NotesScreen}
        options={{
          headerShown: false,
          tabBarIcon: NotesIcon,
        }}
      />
      <BottomTab.Screen
        name={NavigatorNamesEnum.Settings}
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: SettingsIcon,
        }}
      />
    </BottomTab.Navigator>
  );
};
