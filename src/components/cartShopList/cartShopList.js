/**
 * 购物车
 */
import './cartShopList.less';  // 搜索模块样式
import React from 'react';
import { render } from 'react-dom';

import Checkbox from '../checkbox/checkbox';
import GoodsList from './goodsList';


const CartShopList = React.createClass({
	getInitialState: () => null,
	componentDidMount: function() {
	},
	render: function() {
	 return(
	 	<div className='cartShopList'>
	 		<div className='header'>
				<Checkbox/>
				<p>由万里通发货</p>
	 		</div>
	 		<GoodsList/>
	 		<GoodsList/>
	 	</div>
	 	)
	}
})


export default CartShopList;