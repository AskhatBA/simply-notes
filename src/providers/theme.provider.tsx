import { FC, ReactElement, ReactNode } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { useTheme } from "@react-navigation/native";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}): ReactElement => {
  const { colors, dark } = useTheme();

  const theme = {
    dark,
    colors,
  };

  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
