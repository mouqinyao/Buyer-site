import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class Product extends Component {

	constructor(props) {
	    super(props);

	    // Get route params
	    console.log(this.props.match.params);
	    this.state = {
	    	products: []
	    }
	}

	componentDidMount() {
		let self = this;
		axios.get('/allSephoraProducts').then(function(response) {
			console.log(response.data);
			self.setState({products: response.data});
		}).catch(function(error) {
			console.log(error);
		});
	}

	render() {
		let products = this.state.products;

		return (	
		    <div className="product">
		    	<div className="product__left-panel">
		    		<div className="product__band">
		    			<div className="product__band-logo">
		    				<img src="/img/sephora-logo.jpg" className="product__band-img"/>
		    			</div>
		    			<div className="product__band-description">品牌名称: 丝芙兰</div>
		    		</div>
		    	</div>
		    	<div className="product__container">
		    		{products.map(product =>
		    		<div className="product__card" key={product.referenceNumber}>
		    			<div className="product__card-img-container">
		    				<img src={`/img/${product.image}`} className="product__card-img"/>
		    			</div>
		    			<div className="product__card-title">{product.title}</div>
		    			<div className="product__card-detail">
		    				价格：<span className="product__card-price">${product.price}</span>
		    			</div>
		    		</div>
		    		)}
		    		<div className="product__card">
		    			<div className="product__card-img-container">
		    				<img src="/img/sephora-lip-set.png" className="product__card-img"/>
		    			</div>
		    			<div className="product__card-title">丝芙兰热销唇膏套装</div>
		    			<div className="product__card-detail">
		    				价格：<span className="product__card-price">$68</span>
		    			</div>
		    		</div>
		    	</div>
		    </div>
		);
	}
}

export default Product;