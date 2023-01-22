import { useFonts } from "expo-font";

export default () => {
  return useFonts({
    FontRegular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    FontMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    FontSemiBold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    FontBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });
};
