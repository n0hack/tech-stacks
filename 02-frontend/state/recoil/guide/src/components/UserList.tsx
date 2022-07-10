import React from 'react';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserIDState, userInfoQuery, userListQuery } from '../recoil/user';

type Props = {};

function UserList({}: Props) {
  const setCurrentUserID = useSetRecoilState(currentUserIDState);
  const userList = useRecoilValue(userListQuery);

  /* Pre-Fetching */
  const changeUser = useRecoilCallback(({ snapshot, set }) => (userID: number) => {
    snapshot.getLoadable(userInfoQuery(userID));
    set(currentUserIDState, userID);
  });

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userList.map((user) => (
          <li key={user.id} onClick={() => changeUser(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
