import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';

class Heading extends Component {

  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div>
        <div className="heading">Hello, Welcome</div>
      </div>
    );
  }
}

export default withRouter(Heading);