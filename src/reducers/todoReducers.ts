import todos from '@/data';
import { type ITodoState } from '@/types/todo';

export type ACTIONTYPE = { type: string; payload?: any };

export const initialState: ITodoState = {
  loading: false,
  todos: todos,
  todo: null,
  error: null,
};

export default function todosReducer(state = initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'ADD_TODO_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    case 'ADD_TODO_FAILURE':
      return {
        ...state,
        todos: [],
        todo: null,
        loading: false,
        error: action.payload,
      };
    case 'GET_TODOS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_TODOS_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case 'GET_TODOS_FAILURE':
      return {
        ...state,
        todos: [],
        todo: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}