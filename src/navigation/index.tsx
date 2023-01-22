import { ReactElement } from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useThemeContext } from "@/context/theme.context";
import {
  darkThemeColors,
  defaultThemeColors,
} from "@/constants/colors.constants";
import { ThemeProvider } from "@/providers/theme.provider";

import LinkingConfiguration from "./linking-config";
import { RootNavigator } from "./navigators/root.navigator";

const Navigation = (): ReactElement => {
  const { darkMode, isOSPreferences } = useThemeContext();
  const scheme = useColorScheme();

  const getTheme = () => {
    if (isOSPreferences) {
      if (scheme === "dark") {
        return darkThemeColors;
      }
      return defaultThemeColors;
    }

    if (darkMode) {
      return darkThemeColors;
    }

    return defaultThemeColors;
  };

  const theme = getTheme();

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={theme}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default Navigation;
