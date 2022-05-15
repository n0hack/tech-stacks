import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const TutorialUILibrary = () => {
  const { control, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller name="firstName" control={control} defaultValue="" render={({ field }) => <Input {...field} />} />
      <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "초콜렛" },
              { value: "strawberry", label: "딸기" },
              { value: "vanilla", label: "바닐라" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default TutorialUILibrary;
