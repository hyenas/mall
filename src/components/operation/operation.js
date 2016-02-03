/**
 * 多选框
 */
import './operation.less';  // 搜索模块样式
import React from 'react';
import { render } from 'react-dom';


const Operation = React.createClass({
	getInitialState: function() {
		return {}
	},
	componentDidMount: function() {
	},
	toggleChecked: function(){
		alert(123);
	},
	action:function(){
		this.props.action();
	},
	render: function() {
	    return(
	 		<div className='operation' style = {this.props.style} onClick={this.action}>
	 			<p>{this.props.name}</p>
	 		</div>
	 	)
	}
})


export default Operation;