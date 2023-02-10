function InputForm() {
  return (
    <form className='flex flex-row gap-2 items-center bg-gray-800 rounded-md shadow-lg overflow-hidden'>
      <input
        type='text'
        className='w-full rounded-md bg-transparent outline-none p-4'
        placeholder='Finish all my todos'
      />
      <button className='self-stretch bg-gray-700 w-14 hover:bg-gray-600 transition-all text-white'>
        Add
      </button>
    </form>
  );
}

export default InputForm;
