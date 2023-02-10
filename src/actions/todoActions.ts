import { Dispatch } from 'react';
import { type ACTIONTYPE } from '@/reducers/todoReducers';
import type ITodo from '@/types/todo';
import todos from '@/data';

export const addTodo = (todo: ITodo, dispatch: Dispatch<ACTIONTYPE>) => {
  dispatch({ type: 'ADD_TODO_REQUEST' });

  try {
    dispatch({ type: 'ADD_TODO_SUCCESS', payload: todo });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'ADD_TODO_FAILURE', payload: error });
  }
};

export const getTodos = (todos: ITodo[], dispatch: Dispatch<ACTIONTYPE>) => {
  dispatch({ type: 'GET_TODOS_REQUEST' });

  try {
    dispatch({ type: 'GET_TODOS_SUCCESS', payload: todos });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'GET_TODOS_FAILURE', payload: error });
  }
};

export const getTodo = (slug: string, dispatch: Dispatch<ACTIONTYPE>) => {
  dispatch({ type: 'GET_TODO_REQUEST' });

  try {
    const todo = todos.find((todo) => todo.slug === slug);
    dispatch({ type: 'GET_TODO_SUCCESS', payload: todo });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'GET_TODO_FAILURE', payload: error });
  }
};
