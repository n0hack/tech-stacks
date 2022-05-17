import React from 'react';
import Header from '../components/Header';

interface IMainPageProps {
  toggleDark: () => void;
}

const MainPage = ({ toggleDark }: IMainPageProps) => {
  return (
    <>
      <Header toggleDark={toggleDark} />
    </>
  );
};

export default MainPage;
