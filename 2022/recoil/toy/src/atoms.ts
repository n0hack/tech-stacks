import { atom } from 'recoil';

export interface ITodo {
  id: number;
  category: 'TODO' | 'IN PROGRESS' | 'DONE';
  text: string;
}

export const isDarkAtom = atom({
  key: 'isDark',
  default: false,
});

export const todosAtom = atom<ITodo[]>({
  key: 'todos',
  default: [],
});
