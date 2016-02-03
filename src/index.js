/**
 * 商城首页加载入口
 */

import './less/reset.less'; // 清除浏览器默认CSS行为
import { render } from 'react-dom'; // React必要模块
import { createStore } from 'redux'
import { Provider} from 'react-redux'
import Routes from './routes.js'; // 定义全局路由
import { Rem } from './utils/utils.js'; // 自动计算页面宽度，适用rem单位


// 初始化路由

//render(Routes, document.getElementById('reactInit'))

let store = createStore(mall)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('reactInit')
)