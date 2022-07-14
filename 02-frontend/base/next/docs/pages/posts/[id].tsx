import { GetServerSideProps, GetStaticProps, NextPageContext } from 'next';
import Link from 'next/link';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  post: Post;
};

const Post = ({ post }: Props) => {
  return (
    <div>
      <Link href="/posts">
        <a>뒤로가기</a>
      </Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

// // 정적 경로 생성
// export async function getStaticPaths() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = (await res.json()) as Post[];

//   const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

//   // fallback이 false인 경우, 정적 생성되지 않은 경로는 404
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }: any) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
//   const post = (await res.json()) as Post;

//   return { props: { post } };
// }

export default Post;
