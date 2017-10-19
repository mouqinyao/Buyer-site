import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class Product extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	products: []
	    }
	}

	componentDidMount() {
		this.getListofProducts(this.getRouteParams(this.props.match.params.name));
	}

	componentWillReceiveProps(nextProps) {

		// Update when route param is changed
		if ( nextProps.match.params.name != this.props.match.params.name) {
			
			this.getListofProducts(this.getRouteParams(nextProps.match.params.name));
		}
	}

	// Different api to find product model
	getRouteParams(data) {

		switch(data) {
			case 'crabtreeandevelyn':
				return '/allCrabtreeProducts';
				break;
			case 'esteelaunder':
				return '/allEsteelaunderProducts';
				break;
			case 'fresh':
		        return '/allFreshProducts';
		        break;
		    case 'lancome':
		    	return '/allLancomeProducts';
		    	break;
		    case 'loccitane':
		    	return '/allLoccitaneProducts';
		    	break;
		    case 'kiehls':
		    	return '/allKiehlsProducts';
		    	break;
		    case 'origins':
		    	return '/allOriginsProducts';
		    	break;
		    case 'sephora':
		        return '/allSephoraProducts';
		        break;		    
		    default:
		        return '/NotFound';
		}

	}

	// Get list of product based on brand
	getListofProducts(url) {		
		let self = this;
		axios.get(url).then(function(response) {
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
		    	</div>
		    </div>
		);
	}
}

export default Product;