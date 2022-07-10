import React from 'react';
import { RecoilRoot } from 'recoil';
import CurrentUserInfo from './components/CurrentUserInfo';
import UserList from './components/UserList';
import UserInfo from './components/UsreInfo';

function App() {
  return (
    <RecoilRoot>
      {/* React의 렌더링은 동기적이기 때문에, Suspense와 함께 사용하도록 디자인 */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUserInfo />
        <hr />
        <UserList />
        {/* <UserInfo userID={1} />
        <UserInfo userID={2} />
      <UserInfo userID={3} /> */}
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
