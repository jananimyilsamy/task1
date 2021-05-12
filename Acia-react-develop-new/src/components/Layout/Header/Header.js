import React, { Component } from 'react';

import logo from '../../../assets/images/logo.svg';

class Header extends Component {
	render() {
		return (
			<header>
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		);
	}
}

export default Header;