import web3 from './web3';
import Arcade from './build/Arcade.json';

const instance = new web3.eth.Contract(
	JSON.parse(Arcade.interface),
	'0xF5c3464cd0B0c4cBA02956657884e4e7F969113C',
);

export default instance;
