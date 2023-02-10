import type ITodo from '@/types/todo';

const todos: ITodo[] = [
  {
    id: 1,
    title: 'Learn Vue 3',
    slug: 'learn-vue-3',
    completed: false,
  },
  {
    id: 2,
    title: 'Clean warehouse by tomorrow morning',
    slug: 'clean-warehouse-by-tomorrow-morning',
    completed: false,
  },
  {
    id: 3,
    title: 'Buy groceries',
    slug: 'buy-groceries',
    completed: false,
  },
  {
    id: 4,
    title: 'Learn TypeScript',
    slug: 'learn-typescript',
    completed: true,
  },
];

export default todos;
