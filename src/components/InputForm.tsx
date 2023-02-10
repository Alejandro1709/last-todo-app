import { useRef } from 'react';
import { addTodo } from '@/actions/todoActions';
import useTodos from '@/hooks/useTodos';

function InputForm() {
  const { dispatch } = useTodos();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;

    inputRef.current.value = e.target.value;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const data = {
      title: inputRef.current.value,
    };

    await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        addTodo(res, dispatch);
      })
      .catch((err) => console.log(err));

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
