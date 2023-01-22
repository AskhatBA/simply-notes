import { FC, ReactElement } from "react";
import { Text } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { NavigatorNamesEnum } from "@/enums/navigator.enums";
import { StyledWrapper } from "./styles";

const GoogleLoginButton: FC = (): ReactElement => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const onLogin = (): void => {
    navigation.navigate(NavigatorNamesEnum.Main);
  };

  return (
    <StyledWrapper onPress={onLogin}>
      <Text style={{ color: colors.text }}>Google sign in</Text>
    </StyledWrapper>
  );
};

export default GoogleLoginButton;
