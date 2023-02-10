import Container from '@/components/Container';
import InputForm from '@/components/InputForm';
import Layout from '@/components/Layout';
import Todos from '@/components/Todos';

export default function Home() {
  return (
    <Layout title='Todo App | Dashboard'>
      <Container>
        <Todos />
        <InputForm />
      </Container>
    </Layout>
  );
}
