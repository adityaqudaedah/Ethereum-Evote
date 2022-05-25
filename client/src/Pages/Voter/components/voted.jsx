import React from "react";
import { Heading, Flex, Image, Box } from "@chakra-ui/react";
export const Voted = () => {
  return (
    <Flex mt="2rem" flexDirection="column" alignItems="center">
      <Box boxSize="sm">
        <Image src="../../../../assets/thankyou.svg" />
      </Box>

      <Heading size="lg" color="blackAlpha.500">
        Terimakasih telah memilih
      </Heading>
    </Flex>
  );
};
