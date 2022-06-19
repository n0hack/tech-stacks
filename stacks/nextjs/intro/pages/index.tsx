import { useState } from "react";
import NavBar from "../components/NavBar";

type Props = {};

export default function Home({}: Props) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className="active">Hello</h1>
    </div>
  );
}
