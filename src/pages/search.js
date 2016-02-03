/**
 * 搜索页面入口
 */
import '../less/search.less';  // 搜索模块样式
import React from 'react';
import { render } from 'react-dom';

//fetch('./static/mock/test.json').then(res => res.json()).then(data => alert(JSON.stringify(data))).catch(e => alert(e));

 // 搜索输入框
const InputKeyword = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return ({clear: 'none'})
	},
	handleKeyUp: function(event) {
		let _text = event.target.value;
		let _localStore = window.localStorage.getItem('wlt.search');
		let _list = [];
		let _search = {
			history: _list
		};

		// 为空检验
		if(!_text) {console.log('搜索关键词不能为空');return false}

		// 不存在记录，创建记录
		if(event.which === 13 && !_localStore) {
			_list.push(_text)
			window.localStorage.setItem('wlt.search', JSON.stringify(_search));
			this.context.router.push('/search/items?q=' + _text);
		}

		// 存在记录，添加进去
		if(event.which === 13 && _localStore) {
			let _getLocalStore = JSON.parse(_localStore);
			_getLocalStore.history.push(_text);
			window.localStorage.setItem('wlt.search', JSON.stringify(_getLocalStore));
			this.context.router.push('/search/items?q=' + _text);
		}
	},
	handleChange: function(event) { // 输入框有内容显示清除功能
		var _text = event.target.value;
		if(_text) {
			this.setState({clear: 'block'})
		} else {
			this.setState({clear: 'none'})
		}
	},
	handleBlur: function(event) { // 移除焦点，如果为空则消失清除功能
		let _text = event.target.value;
		if(!_text) {
			this.setState({clear: 'none'});
		}
	},
	handleClear: function(event) { // 删除关键词
		this.refs.keyword.value = '';
		this.setState({clear: 'none'})
	},
	handleClose: function(event) {

	},
	render: function() {
		return(
				<div className='input-keyword'>
					<div className='input-keyword-content'>
						<i className='icon-arrow-close' onClick={this.handleClose}>x</i>
						<i className='icon-clear' onClick={this.handleClear} style={{display:this.state.clear}}>x</i>
						<input type='text' ref='keyword' placeholder='搜索商品或者品牌' onBlur={this.handleBlur} onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
					</div>
				</div>
			)
	}
})

// 历史记录
const HistoryList = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	handleClick: function(event) {
		let _text = event.target.text;
		this.context.router.push('/search/items?q=' + _text);
	},
	render: function() {
		return(<li><a href="javascript:;" onClick={this.handleClick}>{this.props.data}</a></li>)
	}
})

const SearchHistory = React.createClass({
	getInitialState: function() {
		return ({show: 'block'})
	},
	handleDel: function(event) {
		window.localStorage.removeItem('wlt.search');
		this.setState({show: 'none'})
	},
	render: function() {
		if(this.props.data){
			return(<div className='search-box' style={{display: this.state.show}}><div className='search-row'>
				<h3>历史记录<i className='icon-del' onClick={this.handleDel}>x</i></h3>
				<ul>{this.props.data.history.map(function(o, i) {
				return <HistoryList key={i} data={o} />
			})}</ul>
			</div></div>)
		} else {
			return false
		}
	}
})

// 热门关键词
const SearchHot = React.createClass({
	render: function() {
		return(<div className='search-box'><div className='search-row'>
			<h3>热门搜索</h3>
			<ul>
			<li><a href="javascript:;">欧莱雅</a></li>
			<li><a href="javascript:;">雅漾</a></li>
			<li><a href="javascript:;">雅漾</a></li>
			<li><a href="javascript:;">巧克力</a></li>
			<li><a href="javascript:;">猫头鹰</a></li>
			<li><a href="javascript:;">巧克力</a></li>
			<li><a href="javascript:;">猫头鹰</a></li>
			<li><a href="javascript:;">欧莱雅</a></li>
			</ul>
			</div></div>)
	}
})


const Search = React.createClass({
	getInitialState: function() {
		let _localStore = window.localStorage.getItem('wlt.search');
		if(_localStore) {
			return {data: JSON.parse(_localStore)}
		} else {
			return {data: false}
		}
	},
	componentDidMount: function() {
		if(this.state.data) {
			this.setState({data: this.state.data})
		}
	},
	render: function() {
	 return(<div className='search'>
	 		<InputKeyword/>
	  		<SearchHistory data={this.state.data}/>
	  		<SearchHot/>
	 	</div>)
	}
})


export default Search;

