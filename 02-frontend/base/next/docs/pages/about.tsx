import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useEffect } from 'react';

const About: NextPage = () => {
  useEffect(() => {
    const f = async () => {
      const res = await fetch('/api/hello');
      const data = await res.json();
    };
    f();
  }, []);

  return (
    <div>
      About
      <Link href="/blog">
        <a>ㅎㅇ</a>
      </Link>
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) },
  };
};

export default About;
