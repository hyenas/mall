/**
 * 搜索结果页面
 */
import React from 'react';
import { render } from 'react-dom';

const Items = React.createClass({
  componentDidMount: function() {
  },
 render: function() {
  return(<div>{this.props.location.query.q}</div>)
 }
})



export default Items ;

