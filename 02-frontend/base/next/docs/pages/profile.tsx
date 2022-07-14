import useSWR from 'swr';

const fetcher = (...args: string[]) => {
  return fetch(args[0]).then((res) => res.json());
};

const Profile = () => {
  const { data, error } = useSWR<{ title: string; body: string }>('https://jsonplaceholder.typicode.com/posts', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Profile;
