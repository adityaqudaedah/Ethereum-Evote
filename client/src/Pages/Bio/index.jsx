import React from "react";
import {
  Box,
  Divider,
  Image,
  Center,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import PATH from "../../utils/path";
import { MdCheckCircle } from "react-icons/md";
export const Bio = () => {
  return (
    <>
      <Box display="flex" width="100vw" justifyContent="space-around">
        {/* arifin */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            // borderRadius="full"
            boxSize="400px"
            src={PATH.arifin}
            alt="Dan Abramov"
          />
         
          <Heading as="h1" mt="5" color="gray.700">
            Arifin
          </Heading>
          <Heading as="h3" size="md" color="gray.700">
            Sistem Informasi 2018
          </Heading>

          <Box textAlign="center" mt="10px">
            <Heading as="h3" size="md" color="gray.700">
              Pengalaman :
            </Heading>
            <Box textAlign="center">
              <List>
                <ListItem mt="3">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <b>HIZBUL WATHAN MUHAMMADIYAH (SMA MUHAMMADIYAH 25)</b> :{" "}
                  <br /> 2017 - 2018 | Staff Aktivis
                </ListItem>

                <ListItem mt="3">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <b>BEM FIKTI UNIVERSITAS GUNADARMA :</b> <br />
                  2019 - 2020 | Staff Biro Penelitian dan Pengembangan
                  <br />
                  2020 - 2021 | Kepala Biro Pengembangan Sumber Daya Manusia
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>

        {/* divider */}
        <Center height="90vh">
          <Divider orientation="vertical" />
        </Center>

        {/* donny */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            // borderRadius="full"
            boxSize="400px"
            src={PATH.doni}
            alt="Dan Abramov"
          />
          <Heading as="h1" mt="5" color="gray.700">
            Doni
          </Heading>
          <Heading as="h3" size="md" color="gray.700">
            Sistem Komputer 2018
          </Heading>
          <Box textAlign="center" mt="10px">
            <Heading as="h3" size="md" color="gray.700">
              Pengalaman :
            </Heading>
            <Box textAlign="center">
              <List>
                <ListItem mt="3">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <b>KIR 5 (SMAN 5 BOGOR)</b> : <br /> 2016 - 2017 | Staff
                  Divisi Bisnis
                </ListItem>
                <ListItem mt="3">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <b>PASOPATI (SMAN 5 BOGOR) :</b> <br />
                  2017 - 2018 | Koordinator Divisi Penelitian dan Pengembangan
                </ListItem>
                <ListItem mt="3">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <b>BEM FIKTI UNIVERSITAS GUNADARMA :</b> <br />
                  2019 - 2020 | Staff Departemen Olahraga <br />
                  2020 - 2021 | Kepala Departemen Olahraga
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
