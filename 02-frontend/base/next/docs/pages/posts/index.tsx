import { GetStaticPaths, GetStaticPropsResult } from 'next';
import Link from 'next/link';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// SSG를 특정 데이터와 같이 해야 하는 경우
export async function getStaticProps({ params }: any) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

// 정적 경로 생성
// export async function getStaticPaths() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = (await res.json()) as Post[];

//   const paths = posts.map((post) => ({ params: { id: post.id } }));

//   // fallback이 false인 경우, 정적 생성되지 않은 경로는 404
//   return { paths, fallback: false };
// }

export default Posts;
