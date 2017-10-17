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
	    				<img src="/app/images/sephora-tokyo-set-detail.png" className="product__detail-img"/>
	    			</div>
	    		</div>
	    		<div className="product__detail-right">
	    			<div className="product__detail-title">丝芙兰日韩护肤套装</div>
	    			<div className="product__detail-price">$40</div>
	    			<div className="product__detail-info">
	    				<div className="product__detail-info-header">商品详情</div>
	    				<ul className="product__detail-info-body">
	    					<li>- 1 oz/ 30 mL Amore Pacific 爱茉莉高效水分保湿喷雾</li>
							<li>- 0.33 oz/ 10 mL belif The True Cream Aqua Bomb</li>
							<li>- 1.7 oz/ 50 mL boscia Sake Cleansing Water</li>
							<li>- 0.17 oz/ 5 mL Dr. Jart+ Cicapair™ Tiger Grass Cream</li>
							<li>- 0.3 oz/ 10 mL Laneige 兰芝水库面霜m</li>
							<li>- 0.5 oz/ 15 mL Laneige 兰芝睡眠面膜</li>
							<li>- 0.17 oz/ 5 mL Shiseido 资生堂百优防皱高效滋润眼霜</li>
							<li>- 1 oz/ 30 mL SK-II 护肤精华露（神仙水）</li>
							<li>- 0.35 oz/ 10 g Tatcha Polished Classic Rice Enzyme Powder</li>
							<li>- 0.98 oz/ 28 g x 1 sheet Too Cool For School Egg Cream Mask Hydration</li>
	    				</ul>
	    			</div>
	    		</div>			    	
		    </div>
		  </div>
		);
	}
}

export default ProductDetail;