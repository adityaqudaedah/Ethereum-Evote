import React from "react";
import { Heading, Flex, Image, Box } from "@chakra-ui/react";
export const Voted = () => {
  return (
    <Flex mt="2rem" flexDirection="column" alignItems="center">
      <Box boxSize="md" textAlign="center">
        <Image src="../../../../assets/thankyou_new.svg" />
        <Heading size="xl" color="blackAlpha.500" mt="3rem">
        Terimakasih telah memilih
      </Heading>
      </Box>

    </Flex>
  );
};
