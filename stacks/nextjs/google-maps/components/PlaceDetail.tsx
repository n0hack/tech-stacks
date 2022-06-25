import React from "react";

type Props = {
  place: { name: string };
};

const PlaceDetail = ({ place }: Props) => {
  return <div>{place.name}</div>;
};

export default PlaceDetail;
