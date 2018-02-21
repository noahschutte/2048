import { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
// import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class Play extends Component {
	render() {
		return (
			<Layout>
				<div>
					<h3>Start Game</h3>

					<Link route="/">
						<a>
							<Button floated="left" content="Start Game" icon="play" primary />
						</a>
					</Link>
				</div>
			</Layout>
		);
	}
}

export default Play;
