import React, { useContext, useEffect, useState } from "react";
import { EvoteContext } from "../../context/evote";
import { Flex, Heading } from "@chakra-ui/react";
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
    <Flex>
      {!account && <Heading>Please Connect To See The Result</Heading>}

      {account && (
        <>
          <div>
            {data[0]}:{data[1]?.toNumber()}
          </div>

          <div>
            {data1[0]}:{data1[1]?.toNumber()}
          </div>
        </>
      )}

      {!(data&&data1)&&<Heading>Loading...</Heading>}
    </Flex>
  );
};

export default Result;
