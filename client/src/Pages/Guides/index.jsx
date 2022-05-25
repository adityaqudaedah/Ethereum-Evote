import React, { useState } from "react";
import {
  Box,
  Collapse,
  Flex,
  OrderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
export const Guides = () => {
  const [toggleGuides, setToggleGuides] = useState(-1);

  const handleToggle = (value) => setToggleGuides(value);

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
          onClick={() => handleToggle(toggleGuides===1?-1:1)}
        >
          Petunjuk Logout
          
        </Box>
        <Collapse in={toggleGuides === 1 ? true : false}>
          <Box p="40px" color="darkcyan" bg="gray.50" rounded="sm">
            <OrderedList>
              <ListItem>Buka Metamask</ListItem>
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
        <Box
          rounded="sm"
          border="1px"
          borderColor="gray.100"
          p={4}
          color="gray.500"
          onClick={() => handleToggle(toggleGuides===2?-1:2)}
        >
          Petunjuk Voting
        </Box>
        <Collapse in={toggleGuides === 2 ? true : false}>
          <Box p="40px" color="darkcyan" bg="gray.50" rounded="sm">
            <OrderedList>
              <ListItem>
                Install Metmask terlebih dahulu jika belum menginstall{" "}
                <Link color="teal.500" href="https://metamask.io/download/">
                  
                  <b>"Disini"</b>
                </Link>
              </ListItem>
              <ListItem>
                Membuat akun dengan mengikuti petunjuk{" "}
                <Link
                  color="teal.500"
                  href="https://jalantikus.com/finansial/download-metamask-extension/"
                >
                  {" "}
                  <b>"Disini"</b>
                </Link>
              </ListItem>
              <ListItem>Melakukan login pada website e-voting</ListItem>
              <ListItem>Pilih kandidat yang tersedia</ListItem>
              <ListItem>Tunggu hingga muncul notifikasi dari Metamask</ListItem>
              <ListItem>Selamat anda telah berhasil melakuan voting</ListItem>
            </OrderedList>
          </Box>
        </Collapse>
      </Flex>
    </>
  );
};
