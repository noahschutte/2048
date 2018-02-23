import { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

import web3 from '../ethereum/web3';
import arcade from '../ethereum/arcade';

class Play extends Component {
	getSummary = async event => {
		event.preventDefault();

		const summary = await arcade.methods.getSummary().call();

		console.log('summary: ', summary);
	};

	getGameScore = async event => {
		event.preventDefault();

		const gameScore = await arcade.methods.games(0).call();

		console.log('gameScore: ', gameScore);
	};

	startGame = async event => {
		event.preventDefault();

		try {
			const accounts = await web3.eth.getAccounts();
			await arcade.methods.startGame().send({
				from: accounts[0],
				value: web3.utils.toWei('0.00025', 'ether'),
			});
		} catch (err) {
			console.log('err: ', err);
		}
	};

	submitScore = async event => {
		event.preventDefault();

		try {
			const accounts = await web3.eth.getAccounts();
			await arcade.methods.submitScore(0, 100).send({
				from: accounts[0],
			});
		} catch (err) {
			console.log('err: ', err);
		}
	};

	render() {
		return (
			<Layout>
				<div>
					<Button onClick={this.getSummary}>Get Summary</Button>
					<Button onClick={this.startGame}>Start Game</Button>
					<Button onClick={this.submitScore}>Submit Score</Button>
					<Button onClick={this.getGameScore}>Get Game Score</Button>
				</div>
			</Layout>
		);
	}
}

export default Play;
