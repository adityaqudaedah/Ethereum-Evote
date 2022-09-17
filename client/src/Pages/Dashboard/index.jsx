import React, { useState, useContext, useEffect } from "react";
import { Button, Input, Text, Flex, WrapItem, Avatar } from "@chakra-ui/react";
import { EvoteContext } from "../../context/evote";

const Dashboard = () => {
  const { giveAccessToVote } = useContext(EvoteContext);
  const [address, setAddress] = useState("");
  const [addressValidated, setAddressValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const onClickGiveAccessHanlder = (address) => {
    setLoading(true);

    setTimeout(() => {
      giveAccessToVote(address);
      setLoading(false);
    }, 1000);
  };

  const walletAddressValidation = (value) => {
    const pattern = /^0x[a-fA-F0-9]{40}$/g;
    console.info(value);
    if (pattern.test(value)) {
      setAddress(value);
      setAddressValidated(true);
    } else {
      setAddressValidated(false);
    }
  };

  // useEffect(() => {
  //   if (address) {
  //     walletAddressValidation(address)
  //   }
  //   return () => {
  //     setAddress("")
  //   }
  // }, [address])

  return (
    <Flex flexDirection="column" w="50%" alignItems="center">
      <Text fontSize="xl">Hello Admin</Text>
      <Avatar
        mt="1rem"
        name="admin"
        src="https://cdn-icons-png.flaticon.com/512/5185/5185871.png"
        size="2xl"
      />
      <Input
        w="inherit"
        mt="1rem"
        variant="filled"
        placeholder="Insert Wallet Address..."
        onChange={(e) => walletAddressValidation(e.target.value)}
      />
      {address.length === 0 ||
        (!addressValidated && (
          <Text fontSize="sm" color="tomato" w="inherit">
            wallet address tidak valid!
          </Text>
        ))}
      <Button
        mt="1rem"
        w="inherit"
        isLoading={loading}
        isDisabled={address.length === 0 || !addressValidated ? true : false}
        colorScheme="pink"
        onClick={() => onClickGiveAccessHanlder(address)}
      >
        Berikan Hak Akses
      </Button>
    </Flex>
  );
};

export default Dashboard;
