const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledArcade = require('./build/Arcade.json');
const provider = new HDWalletProvider(
	'victory mirror loyal brisk utility six gallery rotate tube scheme piano add',
	'https://rinkeby.infura.io/TZF48A41Mc5KhJz89N3H',
);
const web3 = new Web3(provider);

const deploy = async () => {
	try {
		const accounts = await web3.eth.getAccounts();
		console.log('Attempting to deploy from account: ', accounts[0]);

		const result = await new web3.eth.Contract(
			JSON.parse(compiledArcade.interface),
		)
			.deploy({ data: compiledArcade.bytecode })
			.send({
				gas: '1000000',
				from: accounts[0],
			});

		console.log('Contract deployed to: ', result.options.address);
	} catch (err) {
		console.log(err);
	}
};

deploy();
