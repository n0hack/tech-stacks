import { Flex } from "@chakra-ui/react";
import { createTheme, ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { getPlacesData } from "./api";

const places = [
  { name: "Sample Place1" },
  { name: "Sample Place2" },
  { name: "Sample Place3" },
  { name: "Sample Place4" },
  { name: "Sample Place5" },
  { name: "Sample Place6" },
  { name: "Sample Place7" },
  { name: "Sample Place8" },
  { name: "Sample Place9" },
  { name: "Sample Place10" },
];

const Home: NextPage = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState<number | string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // get the users current location on initial Login
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
    });
  }, []);

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

      <List places={places} isLoading={isLoading} />

      <Map
        coordinates={coordinates}
        setBounds={setBounds}
        setCoordinates={setCoordinates}
      />
    </Flex>
  );
};

export default Home;
