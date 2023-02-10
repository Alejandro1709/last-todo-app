import { Dispatch } from 'react';
import { type ACTIONTYPE } from '@/reducers/todoReducers';
import type ITodo from '@/types/todo';

export const addTodo = (todo: ITodo, dispatch: Dispatch<ACTIONTYPE>) => {
  dispatch({ type: 'ADD_TODO_REQUEST' });

  try {
    dispatch({ type: 'ADD_TODO_SUCCESS', payload: todo });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'ADD_TODO_FAILURE', payload: error });
  }
};
