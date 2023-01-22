import { FC, ReactElement } from "react";
import { StyledWrapper, StyledTextField } from "./styles";

interface TextInputProps {
  placeholder?: string;
}

const TextInput: FC<TextInputProps> = ({ placeholder }): ReactElement => {
  return (
    <StyledWrapper>
      <StyledTextField placeholder={placeholder} />
    </StyledWrapper>
  );
};

TextInput.defaultProps = {
  placeholder: "",
};

export default TextInput;
