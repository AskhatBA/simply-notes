import { FC, ReactElement } from "react";
import { useTheme } from "@react-navigation/native";
import GoogleLoginButton from "@/components/google-login-button";
import {
  StyledAppCaption,
  StyledContainer,
  StyledLoginMainImage,
  StyledWelcomeText,
} from "./styles";

const Login: FC = (): ReactElement => {
  const { colors } = useTheme();

  return (
    <StyledContainer>
      <StyledLoginMainImage
        source={require("../../../assets/images/guy-with-notebooks.png")}
      />
      <StyledWelcomeText style={{ color: colors.text }}>
        Добро пожаловать в
      </StyledWelcomeText>
      <StyledAppCaption style={{ color: colors.primary }}>
        INKNOTES
      </StyledAppCaption>
      <GoogleLoginButton />
    </StyledContainer>
  );
};

export default Login;
