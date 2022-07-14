import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

type Props = {};

export default function NavBar({}: Props) {
  const { t } = useTranslation('common');

  return <div>{t('nav')}</div>;
}

// export const getServerSideProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common'])),
//   },
// });
