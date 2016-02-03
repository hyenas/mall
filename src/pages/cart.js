/**
 * 购物车
 */
import '../less/cart.less';  // 搜索模块样式
import React from 'react';
import { render } from 'react-dom';
import CartShopList from '../components/cartShopList/cartShopList';
import Checkbox from '../components/checkbox/checkbox';
import Operation from '../components/operation/operation';


const Cart = React.createClass({
	getInitialState: function() {
		return {test: true}
	},
	componentDidMount: function() {
	},
	settlement: function() {
		this.setState({test: !this.state.test});
	},
	render: function() {
		let operationStyle = {
			width: '2.4rem',
			height: '1.6rem',
			color: '#fff',
			backgroundColor: '#F22D47'
		}

	 	return(<div className='cart'>
	 		<CartShopList/>
	 		<CartShopList/>
	 		<footer id='footer'>
	 			<Checkbox checked={this.state.test} action={this.settlement}/>
	 			<label>全选</label>
	 			<Operation name='结算' action={this.settlement} style={operationStyle} />
	 		</footer>
	 	</div>)
	}
})


export default Cart;