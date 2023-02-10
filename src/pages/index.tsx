import Container from '@/components/Container';
import InputForm from '@/components/InputForm';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title='Todo App | Dashboard'>
      <Container>
        <ul className='flex flex-col gap-4 mt-4 md:mt-12 w-full'>
          <li className='p-4 bg-gray-800 rounded-md shadow-lg cursor-pointer hover:scale-95 transition-all'>
            <h2 className='text-lg font-medium'>
              Clean Warehouse by tomorrow morning.
            </h2>
          </li>
          <li className='p-4 bg-gray-800 rounded-md shadow-lg cursor-pointer hover:scale-95 transition-all'>
            <h2 className='text-lg font-medium'>
              Clean Warehouse by tomorrow morning.
            </h2>
          </li>
          <li className='p-4 bg-gray-800 rounded-md shadow-lg cursor-pointer hover:scale-95 transition-all'>
            <h2 className='text-lg font-medium'>
              Clean Warehouse by tomorrow morning.
            </h2>
          </li>
          <li className='p-4 bg-gray-800 rounded-md shadow-lg cursor-pointer hover:scale-95 transition-all'>
            <h2 className='text-lg font-medium'>
              Clean Warehouse by tomorrow morning.
            </h2>
          </li>
        </ul>
        <InputForm />
      </Container>
    </Layout>
  );
}
