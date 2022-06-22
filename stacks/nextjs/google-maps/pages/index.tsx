import type { NextPage } from "next";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Home: NextPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export default Home;

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map-container"
    >
      Map
    </GoogleMap>
  );
}
