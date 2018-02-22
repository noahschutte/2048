import { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
// import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

import BoardView from '../components/BoardView';

class Play extends Component {
	render() {
		return (
			<Layout>
				<BoardView />
			</Layout>
		);
	}
}

export default Play;
