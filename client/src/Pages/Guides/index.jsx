import React, { useState } from "react";
import { Box, Collapse, Flex, OrderedList, ListItem } from "@chakra-ui/react";
export const Guides = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <>
      <Flex width="50%" flexDirection="column">
        {/* Logout Guides */}
        <Box
          rounded="sm"
          border="1px"
          borderColor="gray.100"
          p={4}
          color="gray.500"
          onClick={handleToggle}
        >
          Petunjuk Logout
        </Box>
        <Collapse in={show}>
          <Box p="40px" color="darkcyan" bg="gray.50" rounded="sm">
            <OrderedList>
              <ListItem>Buka metamask</ListItem>
              <ListItem>
                Klik menu <b>"account options" </b>yang dilambangkan dengan tiga
                dot tersusun horizontal
              </ListItem>
              <ListItem>
                Pliih <b>"connected site"</b>
              </ListItem>
              <ListItem>
                Pilih <b>"Disconnect"</b>
              </ListItem>
              <ListItem>Ok</ListItem>
            </OrderedList>
          </Box>
        </Collapse>

        {/* Voting Guides */}
        
      </Flex>
    </>
  );
};
