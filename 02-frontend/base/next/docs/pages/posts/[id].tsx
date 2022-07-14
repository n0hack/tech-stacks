import { GetServerSideProps, NextPageContext } from 'next';
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

export default Post;
