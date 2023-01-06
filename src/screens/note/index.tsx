import { FC, ReactElement } from "react";
import { StyledContainer, StyledText } from "./styles";

const Note: FC = (): ReactElement => {
  return (
    <StyledContainer>
      <StyledText>Note screen</StyledText>
    </StyledContainer>
  );
};

export default Note;
