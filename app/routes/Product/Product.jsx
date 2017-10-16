import React, { Component, PropTypes } from 'react';

import Heading from '~/components/Heading';
import Menu from '~/components/Menu';

class Product extends Component {

	constructor(props) {
	    super(props);
	   
	}

	render() {
		return (
		  <div> 	
		    <Heading />
		    <Menu />
		    <div className="product">
		    	<div className="product__left-panel">
		    		<div className="product__band">
		    			<div className="product__band-logo">
		    				<img src="/app/images/sephora-logo.jpg" className="product__band-img"/>
		    			</div>
		    			<div className="product__band-description">品牌名称: 丝芙兰</div>
		    		</div>
		    	</div>
		    	<div className="product__container">
		    		<div className="product__card">
		    			<div className="product__card-img">
		    				<img src="/app/images/sephora-logo.jpg" />
		    			</div>
		    			<div className="product__card-title">台湾旺旺 旺仔牛奶 罐装 245ml</div>
		    			<div className="product__card-detail">
		    				价格：<span className="product__card-price">$1.31</span>
		    			</div>
		    		</div>
		    		<div className="product__card">
		    			<div className="product__card-img">
		    				<img src="/app/images/sephora-logo.jpg" />
		    			</div>
		    			<div className="product__card-title">台湾旺旺 旺仔牛奶 罐装 245ml</div>
		    			<div className="product__card-detail">
		    				价格：<span className="product__card-price">$1.31</span>
		    			</div>
		    		</div>
		    		<div className="product__card">
		    			<div className="product__card-img">
		    				<img src="/app/images/sephora-logo.jpg" />
		    			</div>
		    			<div className="product__card-title">台湾旺旺 旺仔牛奶 罐装 245ml</div>
		    			<div className="product__card-detail">
		    				价格：<span className="product__card-price">$1.31</span>
		    			</div>
		    		</div>
		    		<div className="product__card">
		    			<div className="product__card-img">
		    				<img src="/app/images/sephora-logo.jpg" />
		    			</div>
		    			<div className="product__card-title">台湾旺旺 旺仔牛奶 罐装 245ml</div>
		    			<div className="product__card-detail">
		    				价格：<span className="product__card-price">$1.31</span>
		    			</div>
		    		</div>
		    		<div className="product__card">
		    			<div className="product__card-img">
		    				<img src="/app/images/sephora-logo.jpg" />
		    			</div>
		    			<div className="product__card-title">台湾旺旺 旺仔牛奶 罐装 245ml</div>
		    			<div className="product__card-detail">
		    				价格：<span className="product__card-price">$1.31</span>
		    			</div>
		    		</div>
		    		<div className="product__card">
		    			<div className="product__card-img">
		    				<img src="/app/images/sephora-logo.jpg" />
		    			</div>
		    			<div className="product__card-title">台湾旺旺 旺仔牛奶 罐装 245ml</div>
		    			<div className="product__card-detail">
		    				价格：<span className="product__card-price">$1.31</span>
		    			</div>
		    		</div>
		    		<div className="product__card">
		    			<div className="product__card-img">
		    				<img src="/app/images/sephora-logo.jpg" />
		    			</div>
		    			<div className="product__card-title">台湾旺旺 旺仔牛奶 罐装 245ml</div>
		    			<div className="product__card-detail">
		    				价格：<span className="product__card-price">$1.31</span>
		    			</div>
		    		</div>
		    	</div>
		    </div>
		  </div>
		);
	}
}

export default Product;