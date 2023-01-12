import { FC, ReactElement } from "react";
import {
  StyledAppCaption,
  StyledContainer,
  StyledLoginMainImage,
  StyledWelcomeText,
} from "./styles";

const Login: FC = (): ReactElement => {
  return (
    <StyledContainer>
      <StyledLoginMainImage
        source={require("../../../assets/images/guy-with-notebooks.png")}
      />
      <StyledWelcomeText>Добро пожаловать в</StyledWelcomeText>
      <StyledAppCaption>SIMPLY NOTE</StyledAppCaption>
    </StyledContainer>
  );
};

export default Login;
