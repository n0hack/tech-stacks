import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todosAtom, ITodo } from "../atoms";

interface IForm {
  todoText: string;
}

const TodoInput = () => {
  const category = useRecoilValue(categoryState) as ITodo["category"];
  const setTodos = useSetRecoilState(todosAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>({
    defaultValues: { todoText: "" },
  });
  const handleValid = ({ todoText }: IForm) => {
    setTodos((prev) => [{ id: Date.now(), text: todoText, category }, ...prev]);
    setValue("todoText", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("todoText")} placeholder="입력ㄱㄱ" />
      <button>Add</button>
    </form>
  );
};

export default TodoInput;