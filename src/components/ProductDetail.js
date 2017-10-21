import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class ProductDetail extends Component {

	constructor(props) {
	    super(props);	

	    this.state = {
	    	product: {}
	    }
	}

	componentWillMount() {
		let self = this;
		let url = this.props.location.search;
		let api = url.substring(url.indexOf("?")+1);

		axios.get(api).then(function(response) {
			self.setState({product: response.data[0]});
		}).catch(function(error) {
			console.log(error);
		});
	}

	render() {

		let product = this.state.product;
		let lists = this.state.product.description || [];

		return (
		    <div className="product">    	
	    		<div className="product__detail-left">
	    			<div className="product__detail-logo">
	    				<img src={`/img/${product.imageDetail}`} className="product__detail-img"/>
	    			</div>
	    		</div>
	    		<div className="product__detail-right">
	    			<div className="product__detail-title">{product.title}</div>
	    			<div className="product__detail-price">${product.price}</div>
	    			<div className="product__detail-info">
	    				<div className="product__detail-info-header">商品详情</div>
	    				<ul className="product__detail-info-body">
	    				{lists.map((list) =>
	    					<li key={list}>{list}</li>
  						)}
  						</ul>
	    			</div>
	    		</div>			    	
		    </div>
		);
	}
}

export default ProductDetail;