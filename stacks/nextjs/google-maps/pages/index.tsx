import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";

const Home: NextPage = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      {/* <Header /> */}
      {/* <List /> */}
      <Map coordinates={coordinates} />
    </Flex>
  );
};

export default Home;
