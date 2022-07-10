import React from 'react';
import { useRecoilValue } from 'recoil';
import { userNameQuery } from '../recoil/user';

type Props = { userID: number };

function UserInfo({ userID }: Props) {
  const userName = useRecoilValue(userNameQuery(userID));
  return <div>{userName}</div>;
}

export default UserInfo;
