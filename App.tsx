import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "@/hooks/use-cached-resources";
import useLoadFonts from "@/hooks/use-load-fonts";
import { ContextProvider } from "@/providers/context.provider";
import Navigation from "@/navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [fontsLoaded] = useLoadFonts();

  if (!isLoadingComplete) {
    return null;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ContextProvider>
        <Navigation />
      </ContextProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
