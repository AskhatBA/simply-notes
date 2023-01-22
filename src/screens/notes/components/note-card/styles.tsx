import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { purpleGradient } from "@/constants/colors.constants";

export const StyledWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  height: 90px;
  border-bottom-width: 1px;
`;

export const StyledPicture = styled(LinearGradient).attrs(purpleGradient)`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;

export const StyledPlaceholderText = styled.Text`
  font-family: "FontBold";
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledContent = styled.View`
  margin-left: 16px;
`;

export const StyledTitle = styled.Text`
  font-family: "FontSemiBold";
  font-size: 16px;
`;

export const StyledLastMessage = styled.Text`
  font-family: "FontRegular";
  font-size: 12px;
  margin-top: 8px;
  max-width: 90%;
`;
