import React from 'react';
import { useRecoilRefresher_UNSTABLE, useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserIDState, currentUserInfoQuery, currentUserNameState, postsInfoQuery, userInfoQuery, userInfoQueryRequestIDState } from '../recoil/user';

type Props = {};

function useRefreshUserInfo(userID: number) {
  const setUserInfoQueryRequestID = useSetRecoilState(userInfoQueryRequestIDState(userID));
  return () => setUserInfoQueryRequestID((requestID) => requestID + 1);
}

function CurrentUserInfo({}: Props) {
  const currentUser = useRecoilValue(currentUserInfoQuery);
  const posts = useRecoilValue(postsInfoQuery);
  const refreshInfo = useRefreshUserInfo(0);

  return (
    <div>
      <h1>{currentUser.name}</h1>
      <button onClick={refreshInfo}>Refresh</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CurrentUserInfo;
