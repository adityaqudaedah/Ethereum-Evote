import React, { useState, useEffect, createContext } from "react";
import { EvoteABI, contractAddress } from "../utils";
import { ethers } from "ethers";

export const EvoteContext = createContext();
const { ethereum } = window;

const getContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const evoteContract = new ethers.Contract(contractAddress, EvoteABI, signer);

  return evoteContract;
};

export const EvoteProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [winner, setWinner] = useState("");
  const [voted, setVoted] = useState("");
  const [connectAsAdmin, setConnectAsAdmin] = useState("");
  const [voters, setVoters] = useState(null);
  const [accessToVote, setAccessToVote] = useState(false);
  const [disconnect, setDisconnect] = useState(false);

  //check if wallet conected
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("silahkan install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      const chairperson = await getContract().chairperson();

      if (accounts.length) {
        if (accounts[0] === chairperson.toLowerCase()) {
          setConnectAsAdmin(accounts[0]);
        } else {
          setConnectedAccount(accounts[0]);
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  //connect Wallet
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("please install meta mask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const chairperson = await getContract().chairperson();

      if (accounts[0] === chairperson.toLowerCase()) {
        setConnectAsAdmin(accounts[0]);
      } else {
        setConnectedAccount(accounts[0]);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const getCandidate = async (indexOfCandidate) => {
    try {
      return await getContract().proposals(indexOfCandidate);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getVoters = async (args) => {
    try {
      if (args) {
        const x = await getContract().voters(args);
        if (x) {
          setVoters(x);
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const voteCandidate = async (indexOfCandidate) => {
    try {
      if (!ethereum) alert("please install meta mask");
      const vote = await getContract().vote(indexOfCandidate);
      setVoted(vote);
    } catch (error) {
      throw new Error(error);
    }
  };

  const giveAccessToVote = async (address) => {
    try {
      const access = await getContract().giveRightToVote(address);
      setAccessToVote(access);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getWinnerName = async () => {
    try {
      if (!ethereum) alert("please install meta mask");
      const winner = await getContract().winnerName();

      setWinner(winner);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length === 0) {
        setDisconnect(true);
      }
    });
  }, []);

  return (
    <EvoteContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        getWinnerName,
        winner,
        voteCandidate,
        getCandidate,
        voted,
        getVoters,
        voters,
        setVoters,
        connectAsAdmin,
        setConnectAsAdmin,
        giveAccessToVote,
        accessToVote,
        setAccessToVote,
        disconnect,
      }}
    >
      {children}
    </EvoteContext.Provider>
  );
};
