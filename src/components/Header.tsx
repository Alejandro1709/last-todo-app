import Link from 'next/link';

function Header() {
  return (
    <header className='sticky top-0 bg-gray-800 p-4'>
      <div className='container mx-auto'>
        <Link href='/'>
          <h1 className='text-2xl font-medium text-white'>Todo App</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
