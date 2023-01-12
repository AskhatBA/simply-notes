import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResourcesHook from "@/hooks/use-cached-resources.hook";
import { ContextProvider } from "@/providers/context.provider";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

export default function App() {
  const isLoadingComplete = useCachedResourcesHook();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ContextProvider>
        <Navigation colorScheme={colorScheme} />
      </ContextProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
