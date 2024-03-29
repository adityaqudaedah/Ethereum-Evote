import React from "react";
import { Heading, Flex, Image, Box } from "@chakra-ui/react";

export const Unvoted = () => {
  return (
    <Flex mt="2rem" flexDirection="column" alignItems="center">
      <Box boxSize="sm">
        <Image src="../../../../assets/permission_new.svg" />
      </Box>

      <Heading size="lg" color="blackAlpha.500" mt="10px">
        Anda belum diberi hak akses untuk melakukan voting
      </Heading>
    </Flex>
  );
};
