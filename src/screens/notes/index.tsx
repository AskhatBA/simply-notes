import { FC, ReactElement } from "react";
import NoteCard from "./components/note-card";
import { StyledContainer } from "./styles";

const Notes: FC = (): ReactElement => {
  return (
    <StyledContainer>
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </StyledContainer>
  );
};

export default Notes;
