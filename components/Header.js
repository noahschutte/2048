import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default Header => {
	return (
		<Menu style={{ marginTop: '10px' }}>
			<Menu.Menu position="left">
				<Link route="/">
					<a className="item">Play</a>
				</Link>
			</Menu.Menu>

			<Menu.Menu position="center">
				<Link route="/highscores">
					<a className="item">High Scores</a>
				</Link>
			</Menu.Menu>

			<Menu.Menu position="right">
				<Link route="/winners">
					<a className="item">Winners</a>
				</Link>
			</Menu.Menu>
		</Menu>
	);
};
