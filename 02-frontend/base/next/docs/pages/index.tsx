import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <div>Welcome to Next.js!</div>
      <p>{t('nav')}</p>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) },
  };
};

export default Home;
