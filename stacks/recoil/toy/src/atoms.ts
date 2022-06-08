import { atom, selector } from "recoil";

export enum Categories {
  "TODO" = "TODO",
  "IN PROGRESS" = "IN PROGRESS",
  "DONE" = "DONE",
}

export interface ITodo {
  id: number;
  category: Categories;
  text: string;
}

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const todosAtom = atom<ITodo[]>({
  key: "todos",
  default: [],
});

export const todosSelector = selector({
  key: "todosSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const category = get(categoryState);

    return todos.filter((todo) => todo.category === category);
  },
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});
