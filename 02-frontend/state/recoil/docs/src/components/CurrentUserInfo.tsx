import React from 'react';
import { useRecoilCallback, useRecoilRefresher_UNSTABLE, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserIDState, currentUserNameState, userInfoQueryRequestIDState, userQuery } from '../recoil/users';

type Props = {};

function useRefreshUserInfo(userID: number) {
  const setUserInfoQueryRequestID = useSetRecoilState(userInfoQueryRequestIDState(userID));
  return () => {
    setUserInfoQueryRequestID((requestID) => requestID + 1);
  };
}

function CurrentUserInfo({}: Props) {
  const [id, setId] = useRecoilState(currentUserIDState);
  const user = useRecoilValue(currentUserNameState);
  const refreshUserInfo = useRecoilRefresher_UNSTABLE(currentUserNameState);
  const refresh = useRefreshUserInfo(id);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(+e.target.value);
  };

  const changeUser = useRecoilCallback(({ snapshot, set }) => (userID: number) => {
    snapshot.getLoadable(userQuery(userID));
    set(currentUserIDState, userID);
  });

  return (
    <>
      <h1>{user.name}</h1>
      <button onClick={refresh}>Refresh</button>
      <br />
      <input value={`${id}`} onChange={onChange} />
    </>
  );
}

export default CurrentUserInfo;
