import React from "react";
import { graphql } from "gatsby";
import Text from "components/Text";

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

const Info = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: Props) => {
  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
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
