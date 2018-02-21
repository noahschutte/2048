import web3 from './web3';
import GameFactory from './build/GameFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(GameFactory.interface),
	'0xe11A8eA2b2be6cAFf12b7Cee34d1f3f85192f9b6',
);

export default instance;
