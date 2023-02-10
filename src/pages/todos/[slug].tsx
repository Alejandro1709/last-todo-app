import { useEffect } from 'react';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import useTodos from '@/hooks/useTodos';
import { prisma } from '@/utils/prisma';
import { setTodo } from '@/actions/todoActions';

type Props = {
  todo: string;
};

function TodoPage({ todo }: Props) {
  const { state, dispatch } = useTodos();

  useEffect(() => {
    setTodo(JSON.parse(todo), dispatch);
  }, []);

  return (
    <Layout title={state.todo?.title} description='Todo Description'>
      <Container>
        <h1 className='text-4xl font-bold mt-4'>{state.todo?.title}</h1>
      </Container>
    </Layout>
  );
}

export default TodoPage;

export async function getServerSideProps({ params }: any) {
  const todo = await prisma.todo.findFirst({
    where: {
      slug: params.slug,
    },
  });

  return {
    props: {
      todo: JSON.stringify(todo),
    },
  };
}
