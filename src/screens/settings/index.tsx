import { FC, ReactElement } from "react";
import { StyledContainer, StyledText } from "./styles";

const Note: FC = (): ReactElement => {
  return (
    <StyledContainer>
      <StyledText>Settings screen</StyledText>
    </StyledContainer>
  );
};

export default Note;
