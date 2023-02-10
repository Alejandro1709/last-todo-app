import todos from '@/data';
import Todo from './Todo';

function Todos() {
  return (
    <ul className='flex flex-col justify-center gap-4 mt-4 md:mt-12'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default Todos;
