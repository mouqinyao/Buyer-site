import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Heading from './Heading';
import Menu from './Menu';

import Home from './Home';
import Product from './Product';
import ProductDetail from './ProductDetail';

export const App = () => ( 
  <div className="max-container">
    <Heading/>
    <Menu/>
    <Route path="/" exact component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/product/:name" component={Product}/>
    <Route path="/productDetail" component={ProductDetail}/> 
  </div>
 
)

export default App;