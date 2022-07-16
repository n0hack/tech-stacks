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
      <details className="flex flex-col space-y-2 border-t-[1px] mt-5 p-5 select-none open:text-white open:bg-indigo-400">
        <summary className=" cursor-pointer">What is my fav. food</summary>
        <span className="">김치</span>
      </details>
      <ul className="flex flex-col space-y-2 p-5 mt-5 list-decimal marker:text-teal-500 border-t-[1px] border-dashed border-red-300">
        <li className="">hi</li>
        <li className="">hi</li>
        <li className="">hi</li>
      </ul>
      <div className="border-t-[1px] border-dashed border-red-300 mt-5 p-5">
        <input
          type="file"
          className="file:transition-colors file:cursor-pointer file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400 file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border"
        />
      </div>
      <div className="border-t-[1px] border-dashed border-red-300 mt-5 p-5">
        <p className="first-letter:text-7xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          error possimus reiciendis perferendis esse quaerat deleniti
          perspiciatis laborum totam autem, eveniet beatae quidem, ipsum tempore
          repellat reprehenderit quisquam vel. Dicta ex earum, id sapiente
          repellendus iure voluptate nulla, porro libero placeat quasi odio
          accusamus est adipisci deleniti numquam, tempore alias!
        </p>
      </div>
    </div>
  );
};

export default Form;
