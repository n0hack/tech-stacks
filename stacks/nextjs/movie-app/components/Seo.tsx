import Head from "next/head";
import React from "react";

type Props = {
  title: string;
};

function Seo({ title }: Props) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

export default Seo;
