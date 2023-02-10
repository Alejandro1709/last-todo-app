import todosReducer, {
  type ACTIONTYPE,
  initialState,
} from '@/reducers/todoReducers';
import { type ITodoState } from '@/types/todo';
import { createContext, useReducer } from 'react';

type TodosContextType = {
  state: ITodoState;
  dispatch: React.Dispatch<ACTIONTYPE>;
};

export const TodosContext = createContext<TodosContextType>({
  state: initialState,
  dispatch: () => null,
});

export function TodosProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
