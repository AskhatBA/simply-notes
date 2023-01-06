import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SMALL_DEVICE_SCREEN_WIDTH = 375;
const IS_SMALL_DEVICE = width < SMALL_DEVICE_SCREEN_WIDTH;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: IS_SMALL_DEVICE,
};
