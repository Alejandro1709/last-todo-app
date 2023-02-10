import { useReducer } from 'react';
import todosReducer, { initialState } from '@/reducers/todoReducers';
import Container from '@/components/Container';
import InputForm from '@/components/InputForm';
import Layout from '@/components/Layout';
import Todos from '@/components/Todos';

export default function Home() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <Layout title='Todo App | Dashboard'>
      <Container>
        <Todos state={state} />
        <InputForm onDispatch={dispatch} />
      </Container>
    </Layout>
  );
}
