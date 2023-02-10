import { addTodo } from '@/actions/todoActions';
import ITodo from '@/types/todo';
import { useRef } from 'react';

type Props = {
  onDispatch: (action: { type: string; payload?: string }) => void;
};

function InputForm({ onDispatch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;

    inputRef.current.value = e.target.value;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const newTodo: ITodo = {
      id: Math.floor(Math.random() * 100000000),
      title: inputRef.current.value,
      slug: inputRef.current.value.toLowerCase().replace(/ /g, '-'),
      completed: false,
    };

    addTodo(newTodo, onDispatch);

    inputRef.current.value = '';
  };

  return (
    <form
      className='flex flex-row gap-2 items-center bg-gray-800 rounded-md shadow-lg overflow-hidden'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className='w-full rounded-md bg-transparent outline-none p-4'
        placeholder='Finish all my todos'
        ref={inputRef}
        onChange={handleChange}
      />
      <button className='self-stretch bg-gray-700 w-14 hover:bg-gray-600 transition-all text-white'>
        Add
      </button>
    </form>
  );
}

export default InputForm;
