import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Example />
    </QueryClientProvider>
  );
}

function fetchTodos(msg) {
  // console.log(msg);
  return fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
    (res) => res.json()
  );
}

function Example() {
  const { isLoading, error, data } = useQuery(
    ['todos', { preview: true, msg: 'hello world' }],
    ({ queryKey }) => fetchTodos(queryKey[1].msg)
  );
  const testQuery = useQuery(
    'test',
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
      (res) => res.json()
    )
  );
  const userQuery = useQuery(
    'user',
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
      res.json()
    )
  );
  console.log(testQuery);

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

export default App;
