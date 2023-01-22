import { FC, ReactElement } from "react";
import { useTheme } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

type IconProps = {
  focused: boolean;
};

export const NotesIcon: FC<IconProps> = ({ focused }): ReactElement => {
  const { colors } = useTheme();

  return (
    <FontAwesome
      name="sticky-note"
      size={24}
      color={focused ? colors.primary : colors.text}
    />
  );
};

export const SettingsIcon: FC<IconProps> = ({ focused }): ReactElement => {
  const { colors } = useTheme();

  return (
    <Ionicons
      name="settings-sharp"
      size={24}
      color={focused ? colors.primary : colors.text}
    />
  );
};
