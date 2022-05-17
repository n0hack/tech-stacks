import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';

interface IRouterProps {
  toggleDark: () => void;
}

const Router = ({ toggleDark }: IRouterProps) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage toggleDark={toggleDark} />} />
    </Routes>
  );
};

export default Router;
