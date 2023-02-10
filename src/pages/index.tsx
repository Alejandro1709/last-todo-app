import { useEffect } from 'react';
import { prisma } from '@/utils/prisma';
import Container from '@/components/Container';
import InputForm from '@/components/InputForm';
import Layout from '@/components/Layout';
import Todos from '@/components/Todos';
import { getTodos } from '@/actions/todoActions';
import useTodos from '@/hooks/useTodos';

type Props = {
  todos: string;
};

export default function Home({ todos }: Props) {
  const { dispatch } = useTodos();

  useEffect(() => {
    getTodos(JSON.parse(todos), dispatch);
  }, []);

  return (
    <Layout title='Todo App | Dashboard'>
      <Container>
        <Todos />
        <InputForm />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const todos = await prisma.todo.findMany();

  return {
    props: {
      todos: JSON.stringify(todos),
    },
  };
}
