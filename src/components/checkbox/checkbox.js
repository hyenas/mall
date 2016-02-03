/**
 * 多选框
 */
import './checkbox.less';  // 搜索模块样式
import React from 'react';
import { render } from 'react-dom';


const Checkbox = React.createClass({
	getInitialState: function() {
		return {
			checked: this.props.checked ? true : false
		}
	},
	componentDidMount: function() {
	},
	componentWillReceiveProps:function(){
		this.setState({checked: this.props.checked})
		
	},
	toggleChecked: function(){
		if(typeof this.props.action === 'function'){
			this.props.action();
		}
	},
	render: function() {
		let classChecked = this.state.checked ? 'checked' : 'unchecked';

	    return(
	 		<div className= {'checkbox ' + classChecked} onClick={this.toggleChecked}>
	 		</div>
	 	)
	}
})


export default Checkbox;