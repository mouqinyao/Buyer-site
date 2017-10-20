import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';

class Heading extends Component {

  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div>
        <div className="heading__header"></div>
        <div className="heading__title">你好，欢迎光临</div>
      </div>
    );
  }
}

export default Heading;