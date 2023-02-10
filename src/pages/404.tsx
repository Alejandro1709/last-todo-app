import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Link from 'next/link';

function NotFoundPage() {
  return (
    <Layout title='Todo App | 404'>
      <Container>
        <h1 className='text-4xl font-bold mt-4'>Page Not Found 404</h1>
        <Link className='hover:scale-95 transition-all' href='/'>
          Go Back Home
        </Link>
      </Container>
    </Layout>
  );
}

export default NotFoundPage;
