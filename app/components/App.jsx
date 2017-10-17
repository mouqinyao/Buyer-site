import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '~/css/app.css';
import '~/css/home.css';
import '~/css/product.css';

import Heading from '~/components/Heading';
import Menu from '~/components/Menu';
import Home from '~/routes/Home/Home';
import Product from '~/routes/Product/Product';
import ProductDetail from '~/routes/Product/ProductDetail';

const App = () => ( 
  <Router>
  	<div>
	  	<Heading />
	  	<Menu />
	    
	    <Route path="/" exact component={Home}/>
	    <Route path="/home" component={Home}/>
	    <Route path="/product/:name" component={Product}/>
	    <Route path="/productDetail" component={ProductDetail}/> 	    
    </div>
  </Router>
)

export default App;