import React from 'react';
import { RecoilRoot } from 'recoil';
import CurrentUserInfo from './components/CurrentUserInfo';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* <CharacterCounter /> */}
        <CurrentUserInfo />
        <UserInfo userID={1} />
        <UserInfo userID={2} />
        <UserInfo userID={3} />
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
