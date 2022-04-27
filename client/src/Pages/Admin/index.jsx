import { Button, Flex, Heading } from "@chakra-ui/react";
import React, {useContext,useEffect} from "react";
import { EvoteContext } from "../../context/evote";
import { useNavigate} from "react-router-dom";
const Admin = () => {
  const { connectWallet} = useContext(EvoteContext)
  // const history = useNavigate()
    
    return (
      <Flex flexDirection="column">
        <Heading>Welcome To Admin Page</Heading>
        <Button onClick={connectWallet}>Connect</Button>
      </Flex>
    );
  
}

export default Admin;
