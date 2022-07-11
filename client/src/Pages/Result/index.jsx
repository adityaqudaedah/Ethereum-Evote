import React, { useContext, useEffect, useState } from "react";
import { EvoteContext } from "../../context/evote";
import { Flex, Heading, Text, Avatar } from "@chakra-ui/react";
const Result = ({ account }) => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const { getCandidate, voted } = useContext(EvoteContext);

  useEffect(() => {
    if (voted) {
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
    getCandidate(1).then((item) =>
      item.forEach((element) => {
        setData1((prev) => [...prev, element]);
      })
    );

    getCandidate(0).then((item) =>
      item.forEach((element) => {
        setData((prev) => [...prev, element]);
      })
    );
  }, [voted, account]);

  return (
    <Flex mt="10">
      {!account && <Heading>Login Untuk Melihat Hasil</Heading>}

      {account && (
        <Flex
          p="2rem"
          backgroundColor="gray.100"
          borderRadius="xl"
          w="40rem"
          justifyContent="space-around"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Avatar
              size="2xl"
              name="Christian Nwamba"
              src="../../../assets/candidates/arifin.jpeg"
            />{" "}
            <Text color="blue.700" textTransform="capitalize" fontSize="3xl">
              <b>{data[0]}</b>
            </Text>
            <Text fontSize="3xl">
              <b>{data[1]?.toNumber()}</b>
            </Text>
          </Flex>

          <Text textAlign="center" fontSize="6xl">
            <b>VS</b>
          </Text>

          <Flex flexDirection="column" alignItems="center">
            <Avatar
              size="2xl"
              name={data1[0]}
              src="../../../assets/candidates/doni.jpeg"
            />{" "}
            <Text color="pink.500" textTransform="capitalize" fontSize="3xl">
              <b>{data1[0]}</b>
            </Text>
            <Text fontSize="3xl">
              <b>{data1[1]?.toNumber()}</b>
            </Text>
          </Flex>
        </Flex>
      )}

      {!(data && data1) && <Heading>Loading...</Heading>}
    </Flex>
  );
};

export default Result;
