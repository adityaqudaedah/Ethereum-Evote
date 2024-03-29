// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Evote {
   
    struct Voter {
        uint weight; // if voter have premission to vote, weight = 1 else weight = 0
        bool voted;  // if true, that voter already voted
        uint256 vote; 
        address walletAddress; 
        uint256 status; // index of the voted proposal
    }

    struct Proposal {
        string name;   // name of every candidates
        uint256 voteCount; // number of accumulated votes
    }

    address public chairperson;

    mapping(address => Voter) public voters;
    
    Proposal[] public proposals;

    constructor(string[] memory proposalNames) {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;
        voters[chairperson].voted = true;

        for (uint i = 0; i < proposalNames.length; i++) {
            // 'Proposal({...})' creates a temporary
            // Proposal object and 'proposals.push(...)'
            // appends it to the end of 'proposals'.
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }
    

    function giveRightToVote(address voter) public {
        require(
            msg.sender == chairperson,
            "Hanya admin yang dapat memberikan hak akses untuk voting"
        );
        require(
            !voters[voter].voted,
            "Voter telah melakukan voting"
        );
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;
    }


   function vote(uint proposal) public {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Voter tidak memiliki hak akses untuk melakukan voting");
        require(!sender.voted, "Voter sudah melakukan voting");
        sender.voted = true;
        sender.vote = proposal;

        // If 'proposal' is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        proposals[proposal].voteCount += sender.weight;
    }

    // function vote(address from,uint proposal) public {
    //     Voter storage sender = voters[from];
    //     require(sender.weight != 0, "Voter tidak memiliki hak akses untuk melakukan voting");
    //     require(!sender.voted, "Voter sudah melakukan voting");
    //     sender.voted = true;
    //     sender.vote = proposal;

    //     // If 'proposal' is out of the range of the array,
    //     // this will throw automatically and revert all
    //     // changes.
    //     proposals[proposal].voteCount += sender.weight;
    // }


    function winningProposal() public view returns (uint256 winningProposal_) {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    function winnerName() public view returns (string memory winnerName_){
        winnerName_ = proposals[winningProposal()].name;
    }
}
