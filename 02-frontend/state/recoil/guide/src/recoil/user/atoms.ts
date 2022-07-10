import { atom, atomFamily } from 'recoil';

export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
});

export const userInfoQueryRequestIDState = atomFamily({
  key: 'UserInfoQueryRequestID',
  default: 1,
});
