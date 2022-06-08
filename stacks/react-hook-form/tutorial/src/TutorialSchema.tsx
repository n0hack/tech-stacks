import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

interface IFormInputs {
  firstName: string;
  age: number;
}

const schema = Joi.object({
  firstName: Joi.string().required(),
  age: Joi.number().positive().integer().required(),
}).required();

const TutorialSchema = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default TutorialSchema;
