export default interface ITodo {
  id: number;
  title: string;
  slug?: string;
  completed?: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  loading: boolean;
  todo: ITodo | null;
  error: string | null;
}
