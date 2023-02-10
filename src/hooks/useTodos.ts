import { TodosContext } from '@/context/todosContext';
import { useContext } from 'react';

export default function useTodos() {
  return useContext(TodosContext);
}
