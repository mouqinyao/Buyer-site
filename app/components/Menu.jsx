import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';

class Menu extends Component {

  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div>
        <div className="menu">
          <div className="menu__category">商品分类</div>
          <ul className="menu__list">
            <li><a href="#">衣服馆</a></li>
            <li><a href="#">鞋包馆</a></li>
            <li><a href="#">美妆馆</a></li>
            <li><a href="#">生活馆</a></li>
            <li><a href="#">Sephora</a></li>
            <li><a href="#">Nordstrom</a></li>
            <li><a href="#">Neiman Marcus</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);