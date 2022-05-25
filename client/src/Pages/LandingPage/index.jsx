import React, { useContext, useState, useEffect } from "react";
import { Flex, Text, TabList, Tab, Tabs } from "@chakra-ui/react";
import { EvoteContext } from "../../context/evote";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
// import { Box } from "@chakra-ui/react";
import Admin from "../Admin";
import Voter from "../Voter";
import Welcome from "../Welcome";
import Dashboard from "../Dashboard";
import Result from "../Result";
import { Bio } from "../Bio";
import { Guides } from "../Guides";

const LandingPage = () => {
  const {
    connectedAccount,
    connectAsAdmin: isConnectAsAdmin,
    disconnect,
  } = useContext(EvoteContext);
  const [account, setAccount] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    if (isConnectAsAdmin) {
      setAccount(isConnectAsAdmin);
      setSuccess(true);
    } else if (connectedAccount) {
      setAccount(connectedAccount);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [connectedAccount, isConnectAsAdmin]);

  useEffect(() => {
    if (success && connectedAccount) {
      history(`/voter/${account}`);
    } else if (success && isConnectAsAdmin) {
      history(`/admin/dashboard/${account}`);
    } else {
      history(`/`);
    }
  }, [success, account]);

  useEffect(() => {
    if (disconnect) {
      window.location.reload();
    }
  }, [disconnect]);

  return (
    <Flex width="100%" alignItems="center" flexDirection="column">
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList py="1.5rem">
          {!account && (
            <Tab>
              <Link to="/">
                {/* <Image
                boxSize="50px"
                src="https://ethereum.org/static/4d030a46f561e5c754cabfc1a97528ff/843b6/impact_transparent.png"
              /> */}
                <Text color="blue.800" fontWeight="extrabold">
                  E-Vote
                </Text>
              </Link>
            </Tab>
          )}

          {isConnectAsAdmin && (
            <Tab ml="1rem">
              <Link to={`/admin/dashboard/${account}`}>
                <Text color="pink.500" fontWeight="extrabold">
                  Admin
                </Text>
              </Link>
            </Tab>
          )}

          {account && (
            <Tab ml="1rem">
              <Link to={`/voter/${account}`}>
                <Text color="pink.500" fontWeight="extrabold">
                  Voting
                </Text>
              </Link>
            </Tab>
          )}

          <Tab ml="1rem">
            <Link to="/result">
              <Text color="pink.500" fontWeight="extrabold">
                Hasil Voting
              </Text>
            </Link>
          </Tab>
          <Tab ml="1rem">
            <Link to="/guides">
              <Text color="pink.500" fontWeight="extrabold">
                Petunjuk
              </Text>
            </Link>
          </Tab>
          <Tab ml="1rem">
            <Link to="/bio">
              <Text color="pink.500" fontWeight="extrabold">
                Bio
              </Text>
            </Link>
          </Tab>
        </TabList>
      </Tabs>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/result" element={<Result account={account} />} />
        <Route path={`/voter/:account`} element={<Voter params={account} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard/:id" element={<Dashboard />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Flex>
  );
};

export default LandingPage;
