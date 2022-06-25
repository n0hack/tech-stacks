import { Box } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  useGoogleMap,
  useLoadScript,
} from "@react-google-maps/api";

type Props = {
  coordinates: { lng: number; lat: number } | undefined;
  setBounds: Dispatch<SetStateAction<null>>;
  setCoordinates: Dispatch<SetStateAction<{ lat: number; lng: number }>>;
};

const Map = ({ coordinates, setCoordinates }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  let googleMap: any;

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <Box width={"full"} height={"full"}>
        <GoogleMap
          center={coordinates}
          zoom={14}
          mapContainerStyle={{ width: "100%", height: "100vh" }}
          options={{ mapTypeControl: false }}
          onCenterChanged={() => {
            console.log(googleMap);
            if (googleMap) {
              setCoordinates({
                lat: googleMap.center.lat(),
                lng: googleMap.center.lng(),
              });
            }
          }}
          onLoad={(map) => {
            googleMap = map;
          }}
        >
          {/* Child Components */}
          <></>
        </GoogleMap>
      </Box>
    </>
  );
};

export default Map;
