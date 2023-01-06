import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "@/types/navigation.types";
import { NavigatorNamesEnum } from "@/enums/navigator.enums";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Main: {
        screens: {
          [NavigatorNamesEnum.Notes]: "notes",
          [NavigatorNamesEnum.Settings]: "settings",
        },
      },
      [NavigatorNamesEnum.Login]: "login",
    },
  },
};

export default linking;
