import styled from "styled-components";

function Todoitem() {
  return <Container>할 일 목록</Container>;
}

const Container = styled.li`
  padding: 5px 10px;
  border-bottom: 1px solid #bbb;
`;

export default Todoitem;
