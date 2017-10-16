import React, { Component, PropTypes } from 'react';

import Heading from '~/components/Heading';
import Menu from '~/components/Menu';

class Home extends Component {

	constructor(props) {
	    super(props);
	   
	}

	render() {
		return (
		  <div> 	
		    <Heading />
		    <Menu />
		  </div>
		);
	}
}

export default Home;