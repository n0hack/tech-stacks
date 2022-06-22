import { Box } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

type Props = {
  coordinates: { lng: number; lat: number };
  // setCoordinates: Dispatch<SetStateAction<{ lat: number; lng: number }>>;
};

const Map = ({ coordinates }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <Box width={"full"} height={"full"}>
        <GoogleMap
          center={coordinates}
          zoom={10}
          mapContainerStyle={{ width: "100%", height: "100vh" }}
        />
      </Box>
    </>
  );
};

export default Map;
