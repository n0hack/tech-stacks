import { selector, selectorFamily } from 'recoil';
import { currentUserIDState, userInfoQueryRequestIDState } from './atoms';
import { User } from './types';

export const currentUserNameState = selector({
  key: 'currentUserName',
  get: async ({ get }) => {
    const userID = get(currentUserIDState);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
    const data = (await response.json()) as User;

    return data;
  },
});

export const userQuery = selectorFamily({
  key: 'user',
  get:
    (userID: number) =>
    async ({ get }) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
      const data = (await response.json()) as User;
      return data;
    },
});

export const userInfoQuery = selectorFamily({
  key: 'UserInfoQuery',
  get:
    (userID: number) =>
    async ({ get }) => {
      get(userInfoQueryRequestIDState(userID));
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
      const data = (await response.json()) as User;
      return data;
    },
});
