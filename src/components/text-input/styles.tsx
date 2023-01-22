import styled from "styled-components/native";

export const StyledWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: 10px;
`;

export const StyledTextField = styled.TextInput`
  font-family: "FontRegular";
  font-size: 16px;
  padding: 5px 15px;
  color: ${(props) => props.theme.colors.text};
`;
