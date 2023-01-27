import styled from "styled-components";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import Todoinput from "./Todoinput";

function Todos() {
  return (
    <Container>
      <TodoHeader />
      <TodoBody />
      <Todoinput />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 700px;

  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export default Todos;
