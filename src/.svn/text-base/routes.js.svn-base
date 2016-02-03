/**
 * 路由配置文件
 */

import React from 'react'; 
import { Router, Route, useRouterHistory, Link } from 'react-router';
import { createHashHistory } from 'history';

// 路由列表引入
import App from './pages/app.js';
import Cart from './pages/cart.js';
import Search from './pages/search.js';
import Items from './pages/search.items.js';

// 清除路由自动在URL增加随机参数
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});


// 配置自己的路由
const Routes = (
	<Router history={appHistory}>
    <Route path='/' component={App}>
      <Route path='cart' component={Cart}/>
      <Route path='search' component={Search}/>
      <Route path='search/items' component={Items}/>
    </Route>
  </Router>
	)

export default Routes;