import { Flex } from "@chakra-ui/react";
import { createTheme, ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";

const theme = createTheme({});

const Home: NextPage = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState<number | string>("");

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
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />
      {/* <List /> */}
      <Map coordinates={coordinates} />
    </Flex>
  );
};

export default Home;
