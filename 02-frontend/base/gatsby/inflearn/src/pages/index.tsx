import React from "react";
import { Link } from "gatsby";

type Props = {};

const IndexPage = ({}: Props) => {
  return (
    <div>
      <Link to="/info">To Info</Link>
    </div>
  );
};

export default IndexPage;
