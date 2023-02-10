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

export const getTodos = (todos: ITodo[], dispatch: Dispatch<ACTIONTYPE>) => {
  dispatch({ type: 'GET_TODOS_REQUEST' });

  try {
    dispatch({ type: 'GET_TODOS_SUCCESS', payload: todos });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'GET_TODOS_FAILURE', payload: error });
  }
};

export const setTodo = (todo: ITodo, dispatch: Dispatch<ACTIONTYPE>) => {
  dispatch({ type: 'SET_TODO_REQUEST' });

  try {
    dispatch({ type: 'SET_TODO_SUCCESS', payload: todo });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'SET_TODO_FAILURE', payload: error });
  }
};

export const deleteTodo = async (
  id: number,
  dispatch: Dispatch<ACTIONTYPE>
) => {
  dispatch({ type: 'DELETE_TODO_REQUEST' });

  try {
    await fetch('/api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then(() => {
        dispatch({ type: 'DELETE_TODO_SUCCESS', payload: id });
      })
      .catch((err) => dispatch({ type: 'DELETE_TODO_FAILURE', payload: err }));
  } catch (error) {
    console.log(error);
    dispatch({ type: 'DELETE_TODO_FAILURE', payload: error });
  }
};
