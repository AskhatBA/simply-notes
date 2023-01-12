import React, {
  createContext,
  FC,
  ReactNode,
  useMemo,
  useState,
  useContext,
} from "react";

interface ThemeContextContextValues {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextContextValues>({
  darkMode: false,
  setDarkMode: () => {},
});

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const state = useMemo(
    () => ({
      darkMode,
      setDarkMode,
    }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextContextValues => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("outside its scope");
  return ctx;
};
