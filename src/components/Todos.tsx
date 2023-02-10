import Todo from './Todo';
import type ITodo from '@/types/todo';
import { type ITodoState } from '@/types/todo';

type Props = {
  state: ITodoState;
};

function Todos({ state }: Props) {
  return (
    <ul className='flex flex-col justify-center gap-4 mt-4 md:mt-12'>
      {state.todos && state.todos.length > 0
        ? state.todos.map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)
        : null}
    </ul>
  );
}

export default Todos;
