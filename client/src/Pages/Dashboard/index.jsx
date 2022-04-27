import React, { useState, useContext } from "react";
import { Button, Input } from "@chakra-ui/react";

import { EvoteContext } from "../../context/evote";

const Dashboard = () => {
  const { giveAccessToVote } = useContext(EvoteContext);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const onClickGiveAccessHanlder = (address) => {
    setLoading(true);

    setTimeout(() => {
      giveAccessToVote(address);
      setLoading(false);
    }, 1000);
  };
  return (
    <div>
      Dashboard
      <Input
        variant="filled"
        placeholder="Insert Wallet Address..."
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button
        isLoading={loading}
        colorScheme="pink"
        onClick={() => onClickGiveAccessHanlder(address)}
      >
        Give Voter Access
      </Button>
    </div>
  );
};

export default Dashboard;
