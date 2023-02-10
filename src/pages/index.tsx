import { useEffect, useReducer } from 'react';
import todosReducer, { initialState } from '@/reducers/todoReducers';
import { prisma } from '@/utils/prisma';
import Container from '@/components/Container';
import InputForm from '@/components/InputForm';
import Layout from '@/components/Layout';
import Todos from '@/components/Todos';
import { getTodos } from '@/actions/todoActions';

type Props = {
  todos: string;
};

export default function Home({ todos }: Props) {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    getTodos(JSON.parse(todos), dispatch);
  }, []);

  return (
    <Layout title='Todo App | Dashboard'>
      <Container>
        <Todos state={state} />
        <InputForm onDispatch={dispatch} />
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
