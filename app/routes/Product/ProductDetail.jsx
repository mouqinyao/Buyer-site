import React, { Component, PropTypes } from 'react';

import Heading from '~/components/Heading';
import Menu from '~/components/Menu';

class ProductDetail extends Component {

	constructor(props) {
	    super(props);	   
	}

	render() {
		return (
		  <div> 	
		    <Heading />
		    <Menu />
		    <div className="product">    	
	    		<div className="product__detail-left">
	    			<div className="product__detail-logo">
	    				<img src="/app/images/sephora-logo.jpg" className="product__band-img"/>
	    			</div>
	    		</div>
	    		<div className="product__detail-right">
	    			<div className="product__detail-title">台湾旺旺 旺仔牛奶 罐装 245ml</div>
	    			<div className="product__detail-price">$1.31</div>
	    			<div className="product__detail-info">
	    				<div className="product__detail-info-header">商品详情</div>
	    				<ul className="product__detail-info-body">
	    					<li>test</li>
	    					<li>test</li>
	    					<li>test</li>
	    					<li>test</li>
	    				</ul>
	    			</div>
	    		</div>			    	
		    </div>
		  </div>
		);
	}
}

export default ProductDetail;