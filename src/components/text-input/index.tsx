import { FC, ReactElement } from "react";
import { StyledWrapper, StyledTextField } from "./styles";

const TextInput: FC = (): ReactElement => {
  return (
    <StyledWrapper>
      <StyledTextField />
    </StyledWrapper>
  );
};

export default TextInput;
