import styled from "@emotion/styled";
import React from "react";

type Props = {};

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;

const Footer = ({}: Props) => {
  return (
    <FooterWrapper>
      Thank You for Visiting My Page, Have a Good Day 😆
      <br />© 2022 Developer NoHack, Powered By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;
