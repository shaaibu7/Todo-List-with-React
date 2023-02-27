import TodoItem from './todoItem';

const TodosList = ({ todosProps }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} />
    ))}
  </ul>
);
export default TodosList;
