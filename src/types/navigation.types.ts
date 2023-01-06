import { NavigatorScreenParams } from "@react-navigation/native";
import { NavigatorNamesEnum } from "@/enums/navigator.enums";

export type RootTabParamList = {
  Notes: [NavigatorNamesEnum.Notes];
  Settings: [NavigatorNamesEnum.Settings];
};

export type RootStackParamList = {
  Main: NavigatorScreenParams<RootTabParamList> | undefined;
  Login: [NavigatorNamesEnum.Login];
};
