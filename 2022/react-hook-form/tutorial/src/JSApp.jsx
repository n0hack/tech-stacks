import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
