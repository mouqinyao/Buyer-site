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
                <li><Link to="/product/crabtreeandevelyn">Crabtree &amp; Evelyn（瑰珀翠）</Link></li>
                <li><Link to="/product/esteelaunder">Estee Launder（雅诗兰黛）</Link></li>
                <li><Link to="/product/fresh">Fresh （馥蕾诗）</Link></li>
                <li><Link to="/product/lancome">Lancome（兰蔻）</Link></li>
                <li><Link to="/product/loccitane">Loccitane（欧舒丹）</Link></li>
                <li><Link to="/product/kiehls">Kiehls (科颜氏)</Link></li>
                <li><Link to="/product/origins">Origins（悦木之源）</Link></li>
                <li><Link to="/product/sephora">Sephora（丝芙兰）</Link></li>
              </ul>
            }              
          </li>
          <li className="menu__list-item"><a href="#">生活馆</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;