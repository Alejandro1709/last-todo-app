import type ITodo from '@/types/todo';
import Link from 'next/link';

type TodoProps = {
  todo: ITodo;
};

function Todo({ todo }: TodoProps) {
  return (
    <Link href={`/todos/${todo.slug}`}>
      <li className='p-4 bg-gray-800 rounded-md shadow-lg cursor-pointer hover:scale-95 transition-all'>
        <h2 className='text-lg font-medium'>{todo.title}</h2>
      </li>
    </Link>
  );
}

export default Todo;
