import { FC, ReactElement } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { NavigatorNamesEnum } from "@/enums/navigator.enums";
import {
  StyledPicture,
  StyledWrapper,
  StyledPlaceholderText,
  StyledContent,
  StyledTitle,
  StyledLastMessage,
} from "./styles";

const NoteCard: FC = (): ReactElement => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const openNotePage = (): void => {
    // TODO: Find out how to get rid of the never statement
    navigation.navigate(NavigatorNamesEnum.Note as never);
  };

  return (
    <StyledWrapper style={{ borderColor: colors.card }} onPress={openNotePage}>
      <StyledPicture>
        <StyledPlaceholderText>A</StyledPlaceholderText>
      </StyledPicture>
      <StyledContent>
        <StyledTitle style={{ color: colors.text }}>Note name</StyledTitle>
        <StyledLastMessage style={{ color: colors.text }} numberOfLines={1}>
          Note short overviewwfwewef wef wef wef wef wef wefwef wef wefwefwefewf
          wef wef
        </StyledLastMessage>
      </StyledContent>
    </StyledWrapper>
  );
};

export default NoteCard;
