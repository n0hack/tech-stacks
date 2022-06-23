import { Flex, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import React, { Dispatch, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {
  setType: Dispatch<SetStateAction<string>>;
  setRatings: Dispatch<SetStateAction<string>>;
  setCoordinates: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
};

const Header = ({ setType, setRatings, setCoordinates }: Props) => {
  return (
    <Flex
      position={"absolute"}
      top={0}
      left={0}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
    >
      <Flex>
        {/* <Autocomplete> */}
        <InputGroup width={"35vw"} shadow={"lg"}>
          <InputRightElement pointerEvents={"none"}>
            <BiSearch color="gray" fontSize={20} />
          </InputRightElement>
        </InputGroup>
        {/* </Autocomplete> */}
      </Flex>
    </Flex>
  );
};

export default Header;
