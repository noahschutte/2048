import { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
// import factory from '../ethereum/factory';
// import Layout from '../components/Layout';
import { Link } from '../routes';
import BoardView from '../components/BoardView';

import stylesheet from 'styles/index.scss';

class Play extends Component {
	render() {
		return (
			<div>
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<BoardView />
			</div>
		);
	}
}

export default Play;
