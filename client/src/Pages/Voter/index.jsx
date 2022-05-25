import React, { useState, useContext, useEffect } from "react";
import { EvoteContext } from "../../context/evote";
import { useParams } from "react-router-dom";
import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import Candidate from "../../Components/candidate";
import { Voted, Unvoted } from "./components";
import _ from "lodash";
const Voter = () => {
  const { account } = useParams();
  const { voteCandidate, getCandidate, getVoters, voters, voted } =
    useContext(EvoteContext);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  // const [dataVoters, setDataVoters] = useState(null);

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
  }, [voted]);

  useEffect(() => {
    if (account !== null) {
      getVoters(account);
    }
  }, [account]);

  if (voters === null) return <Heading>Loading...</Heading>;

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      {voters[1] === false && voters[0]?.toNumber() === 1 && (
        <>
          {/* <Text fontSize="xl">Hello Voter</Text> */}
          <Text textAlign="center" fontSize="xl">
            <b>Wallet Address :</b>
          </Text>
          <Text
            px="8px"
            borderRadius="xl"
            backgroundColor="green.300"
            color="blackAlpha.700"
            fontSize="lg"
          >
            {_.truncate(account, { length: 24 })}
          </Text>
          <Flex mt="1rem" width="45rem" justifyContent="space-between">
            <Candidate id={0} vote={voteCandidate} candidate={data} />
            <Candidate id={1} vote={voteCandidate} candidate={data1} />
          </Flex>
        </>
      )}

      {voters[0]?.toNumber() === 0 && <Unvoted />}
      {voters[1] === true && <Voted />}
    </Flex>
  );
};

export default Voter;
