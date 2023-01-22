import { FC, ReactElement } from "react";
import TextField from "./components/text-field";
import { StyledContainer } from "./styles";

const Note: FC = (): ReactElement => {
  return (
    <StyledContainer>
      <TextField />
    </StyledContainer>
  );
};

export default Note;
