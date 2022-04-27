import React, { useContext } from "react";
import { Flex, Heading, Box, Button, Image } from "@chakra-ui/react";
import LandingSVG from "../../../assets/landing.svg";
import { EvoteContext } from "../../context/evote";
import { Link } from "react-router-dom";
const Welcome = () => {
  const { connectWallet } = useContext(EvoteContext);
  return (
    <Flex alignItems="center" justifyContent="space-around">
      <Flex flexDirection="column" justifyContent="space-around" w="50%">
        <Heading fontSize="4xl" fontWeight="extrabold" as="h3">
          Welcome To E-Voting <br />
          Covered By Block Chain <br />
          Technology
        </Heading>
        <Flex mt="10px">
          <Button colorScheme="purple" mr="5px" onClick={connectWallet}>
            Voter
          </Button>
          <Link to="/admin">
            {" "}
            <Button colorScheme="pink" variant="outline">Admin</Button>
          </Link>
        </Flex>
      </Flex>

      <Box>
        <Image objectFit="cover" boxSize="35vw" src={LandingSVG} />
      </Box>
    </Flex>
  );
};

export default Welcome;
