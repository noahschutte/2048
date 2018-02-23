pragma solidity ^0.4.17;

contract Arcade {
    struct Game {
        address player;
        uint score;
    }

    address public manager;
    Game[] public games;

    function Arcade() public {
        manager = msg.sender;
    }

    function startGame() public payable {
        require(msg.value == .00025 ether);

        Game memory newGame = Game({
            player: msg.sender,
            score: 0
        });

        games.push(newGame);
    }

    function submitScore(uint index, uint value) public restricted {
        Game storage game = games[index];
        require(game.score == 0);
        game.score = value;
    }

    function getSummary() public view returns (uint, uint) {
        return (this.balance, games.length);
    }

    function payout() public restricted {
        require(this.balance > 0 ether);
        manager.transfer(this.balance);
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}
