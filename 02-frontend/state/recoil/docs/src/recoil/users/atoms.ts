import { atom, atomFamily } from 'recoil';

export const currentUserIDState = atom({
  key: 'currentUserID',
  default: 1,
  effects: [
    ({ onSet }) => {
      onSet((newID) => console.log(newID));
    },
  ],
});

export const userInfoQueryRequestIDState = atomFamily({
  key: 'UserInfoQueryRequestID',
  default: 0,
});
