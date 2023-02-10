import Container from '@/components/Container';
import Layout from '@/components/Layout';

function TodoPage() {
  return (
    <Layout title='Todo Title' description='Todo Description'>
      <Container>
        <h1 className='text-4xl font-bold mt-4'>Todo Title</h1>
      </Container>
    </Layout>
  );
}

export default TodoPage;
