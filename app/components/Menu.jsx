import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.activeNavList = this.activeNavList.bind(this);
    
    this.state = {
      isNavActive: false
    }
  }

  activeNavList(e) {
    e.preventDefault();
    const currentNav = this.state.isNavActive;
    this.setState({isNavActive: !currentNav});
  }

  render() {
    return (
      <div>
        <div className="menu">
          <div className="menu__category">商品分类</div>
          <ul className="menu__list">
            <li className="menu__list-item">
              <a href="#">衣服馆</a>
            </li>
            <li className="menu__list-item"><a href="#">鞋包馆</a></li>
            <li className="menu__list-item" onClick={this.activeNavList}>
              <a href="#">美妆馆</a>
              {this.state.isNavActive &&
                <ul className="menu__sub-list">
                  <li><Link to="/product/esteelaunder">Estee Launder</Link></li>
                  <li><Link to="/product/lancome">Lancome</Link></li>
                </ul>
              }              
            </li>
            <li className="menu__list-item"><a href="#">生活馆</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);