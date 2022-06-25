import axios from "axios";

const url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
    restaurant_tagcategory_standalone: "10591",
    restaurant_tagcategory: "10591",
    limit: "30",
    currency: "USD",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  },
  headers: {
    "X-RapidAPI-Key": "f6f9b03c4fmsh2aa55e73c312d82p1b415bjsn0a35de776069",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};
export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.request<{ data: { latitude: string; longitude: string } }>(
      options
    );
    return data;
  } catch (error) {
    console.log(`Fetch data Error: ${error}`);
  }
};
