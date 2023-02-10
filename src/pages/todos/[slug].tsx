import { useEffect } from 'react';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import useTodos from '@/hooks/useTodos';
import { prisma } from '@/utils/prisma';
import { deleteTodo, setTodo } from '@/actions/todoActions';
import { useRouter } from 'next/router';

type Props = {
  todo: string;
};

function TodoPage({ todo }: Props) {
  const { state, dispatch } = useTodos();

  const router = useRouter();

  const handleDelete = () => {
    if (state.todo) {
      deleteTodo(state.todo.id, dispatch);
      router.push('/');
    }
  };

  useEffect(() => {
    setTodo(JSON.parse(todo), dispatch);
  }, []);

  return (
    <Layout title={state.todo?.title} description='Todo Description'>
      <Container>
        <h1 className='text-4xl font-bold mt-4'>{state.todo?.title}</h1>
        <div className='flex flex-row gap-4 mt-2'>
          <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md'>
            Mark As Completed
          </button>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'>
            Edit
          </button>
          <button
            className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
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
