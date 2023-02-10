import type { AppProps } from 'next/app';
import { TodosProvider } from '@/context/todosContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TodosProvider>
      <Component {...pageProps} />
    </TodosProvider>
  );
}
