import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { getTodo } from '@/actions/todoActions';

function TodoPage() {
  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    if (typeof slug !== 'string') return;
    console.log(slug);
    // getTodo(slug, dispatch);
  }, []);

  return (
    <Layout title='Todo Title' description='Todo Description'>
      <Container>
        <h1 className='text-4xl font-bold mt-4'>Todo Title</h1>
      </Container>
    </Layout>
  );
}

export default TodoPage;
