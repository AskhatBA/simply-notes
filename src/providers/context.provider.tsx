import { ReactNode, FC } from "react";
import { ThemeContextProvider } from "@/context/theme.context";

export const ContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  // Here you can put all context providers
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};
