import React from "react";
import { Flex, Image, Text, Button, Avatar } from "@chakra-ui/react";
// import { ethers } from "ethers";

const Candidate = ({ id, vote: voteCandidate, candidate: data, imageFile }) => {
  return (
    <Flex
      shadow="md"
      pt="1rem"
      pb="3rem"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
      border="1px"
      borderColor="gray.200"
      px="5rem"
    >
      <Text fontSize="4xl" mb="1rem">
        {data[1]?.toNumber()}
      </Text>
      <Avatar
        size="2xl"
        name={data[0]}
        src="../../../assets/candidates/arifin.jpeg"
        
      />
      <Text textTransform="capitalize" fontSize="2xl" mt="1rem">
        {data[0]}
      </Text>
      <Text textAlign="center" as="i" color="gray.500">
        Kandidat
      </Text>
      <Button
        onClick={() => {
          voteCandidate(id);
        }}
        textTransform="uppercase"
        colorScheme="whatsapp"
        size="lg"
        marginTop="10"
      >
        vote me
      </Button>
    </Flex>
  );
};

export default Candidate;
