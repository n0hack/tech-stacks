import { NextPage } from "next";

const Form: NextPage = () => {
  return (
    <div>
      <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
        <input
          type="text"
          required
          placeholder="Username"
          className="required:bg-yellow-500 invalid:bg-red-500 valid:bg-teal-500"
        />
        <input type="password" required placeholder="Password" className="" />
        <input type="submit" value="Login" className="bg-white" />
      </form>
      <form className="flex flex-col space-y-2 p-5 mt-5 border-t-[1px] border-dashed border-red-300">
        <input
          type="text"
          required
          placeholder="Username"
          className="border p-1 border-gray-400 rounded-md peer"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
    </div>
  );
};

export default Form;
