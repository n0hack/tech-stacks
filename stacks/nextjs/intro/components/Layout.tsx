import React from "react";
import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};

/* 레이아웃 패턴 */
export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
