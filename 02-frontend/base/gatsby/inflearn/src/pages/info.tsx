import React from "react";
import { graphql } from "gatsby";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
};

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
  }
`;

const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: ${(props) => (props.disable ? 700 : 300)};
  color: limegreen;
`;

const Text2 = styled("div")<{ disable: boolean }>(({ disable }) => ({
  fontSize: "15px",
  color: disable ? "blue" : "tomato",
}));

const Info = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: Props) => {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={{ color: "red" }}>{title}</div>
      <Text1 disable={false}>{description}</Text1>
      <Text2 disable={true}>{author}</Text2>
    </div>
  );
};

export default Info;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
