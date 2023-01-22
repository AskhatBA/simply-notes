import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";
import { LinearGradientProps } from "expo-linear-gradient";

export const darkThemeColors: Theme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: "#42399b",
    background: "#1C1F2A",
    card: "#191A2C",
    text: "#f2eff0",
    border: "#221916",
    notification: "#221916",
  },
};

export const defaultThemeColors: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#42399b",
    background: "#f2eff0",
    card: "#322958",
    text: "#221916",
    border: "#221916",
    notification: "#221916",
  },
};

export const purpleGradient: LinearGradientProps = {
  colors: ["#754AF3", "#4A27AF"],
};
