import axios from 'axios';
import { selector, selectorFamily } from 'recoil';
import { currentUserIDState, userInfoQueryRequestIDState } from './atoms';
import { Post, User } from './types';

export const currentUserNameState = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const userID = get(currentUserIDState);
    const { name } = await (await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userID}`)).data;
    return name;
  },
});

/* 컴포넌트 props를 기반으로 쿼리하고 싶은 경우 selectorFamily 사용 */
export const userNameQuery = selectorFamily({
  key: 'UserNameQuery',
  get: (userID: number) => async () => {
    const { name } = await (await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userID}`)).data;
    return name;
  },
});

export const userInfoQuery = selectorFamily({
  key: 'UserInfoQuery',
  get:
    (userID: number) =>
    async ({ get }) => {
      try {
        get(userInfoQueryRequestIDState(userID));
        const data = await (await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userID}`)).data;
        return data;
      } catch (e) {
        throw e;
      }
    },
});

export const currentUserInfoQuery = selector({
  key: 'CurrentUserInfoQuery',
  get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

export const postsInfoQuery = selector({
  key: 'PostsInfoQuery',
  get: async ({ get }) => {
    const userID = get(currentUserIDState);
    const posts = await (await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)).data;
    return posts;
  },
});

export const userListQuery = selector({
  key: 'UserListQuery',
  get: async () => {
    const data = await (await axios.get<User[]>(`https://jsonplaceholder.typicode.com/users`)).data;
    return data;
  },
});
