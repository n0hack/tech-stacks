import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

type Props = {
  params: Test;
};

type Test = [string, string];

export default function Detail({ params }: Props) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params: { params },
}: any) => {
  return {
    props: { params },
  };
};
