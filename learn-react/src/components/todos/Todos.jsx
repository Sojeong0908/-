import { useReducer } from "react";
import { todosReducer } from "../../state/todos";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoHeader from "../../../../todos/src/component/todos/TodoHeader";

function reducer(state, action) {}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, text: "투두리스트 스타일링", done: true },
    { id: 2, text: "투두리스트 기능 구현하기", done: false },
    { id: 3, text: "리팩토링 하기", done: false },
  ]);

  return (
    <Container>
      <TodoHeader todos={todos} />
      <TodoBody />
      <TodoInput />
    </Container>
  );
}
const initialState = [
  { id: 1, text: "컴포넌트 작성하기", done: true },
  { id: 2, text: "기능 구현하기", done: false },
  { id: 3, text: "리팩토링하기", done: false },
];

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <div>
      <TodoCreate dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default Todos;
