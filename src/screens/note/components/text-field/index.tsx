import { FC, ReactElement } from "react";
import TextInput from "@/components/text-input";
import { StyledWrapper } from "./styles";

const TextField: FC = (): ReactElement => {
  return (
    <StyledWrapper>
      <TextInput />
    </StyledWrapper>
  );
};

export default TextField;
