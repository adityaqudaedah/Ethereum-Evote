import { Button, Flex, Heading, Box, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { EvoteContext } from "../../context/evote";
// import { useNavigate} from "react-router-dom";
const Admin = () => {
  const { connectWallet } = useContext(EvoteContext);
  // const history = useNavigate()

  return (
    <Flex mt="2rem" flexDirection="column" alignItems="center">
      <Box >
        <Image src="../../../../assets/admin.svg" />
      </Box>

      <Heading mt="3rem" size="lg" color="blackAlpha.500">
        Masuk Sebagai Admin
      </Heading>
      <Button
        mt="0.5rem"
        w="55%"
        colorScheme="pink"
        variant="outline"
        onClick={connectWallet}
      >
        Masuk
      </Button>
    </Flex>
  );
};

export default Admin;
