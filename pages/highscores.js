import { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
// import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class HighScores extends Component {
	render() {
		return (
			<Layout>
				<div>
					<h3>High Scores</h3>
				</div>
			</Layout>
		);
	}
}

export default HighScores;
