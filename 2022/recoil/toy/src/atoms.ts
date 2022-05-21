import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  category: "TODO" | "IN PROGRESS" | "DONE";
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
    return [
      todos.filter((todo) => todo.category === "TODO"),
      todos.filter((todo) => todo.category === "IN PROGRESS"),
      todos.filter((todo) => todo.category === "DONE"),
    ];
  },
});
