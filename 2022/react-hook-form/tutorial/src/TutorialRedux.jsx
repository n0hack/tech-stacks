import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "./module/counter";
import { useForm } from "react-hook-form";

const TutorialRedux = ({ counter, increase, decrease }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("눌림");
    increase();
  };
  console.log(counter);

  return (
    <>
      <span>{counter}</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("test")} />
        <input type="submit" />
      </form>
    </>
  );
};

export default connect(({ counter }) => ({ counter }), { increase, decrease })(TutorialRedux);
