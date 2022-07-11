import React, { useContext } from "react";
import { Flex, Heading, Box, Button, Image } from "@chakra-ui/react";
import LandingSVG from "../../../assets/eth.png";
import { EvoteContext } from "../../context/evote";
import { Link } from "react-router-dom";
const Welcome = () => {
  const { connectWallet } = useContext(EvoteContext);
  return (
    <Flex alignItems="center" justifyContent="space-around">
     
      <Flex flexDirection="row-reverse" >
        <Flex
          // position="relative"
          // zIndex="1"
          // top="50%"
          // left="50%"
          // right="50%"
          flexDirection="column"
          justifyContent="center"
          // alignItems="center"
        >
          <Heading maxWidth="500px" fontSize="4xl" fontWeight="extrabold">
            Welcome To E-Voting Covered By Blockchain Technology
          </Heading>
          <Flex mt="10px">
            <Button colorScheme="purple" mr="5px" onClick={connectWallet}>
              Voter
            </Button>
            <Link to="/admin">
              {" "}
              <Button colorScheme="pink" variant="outline">
                Admin
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Image
          position="relative"
          objectFit="cover"
          height="90vh"
          src={LandingSVG}
        />
      </Flex>
    </Flex>
  );
};

export default Welcome;
