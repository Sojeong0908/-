import styled from "styled-components";
import Todoitem from "./Todoitem";

function TodoBody() {
  return (
    <Container>
      <ul>
        <Todoitem />
        <Todoitem />
        <Todoitem />
        <Todoitem />
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;
export default TodoBody;
