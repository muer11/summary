/*
 * @Descripttion:
 * @version:
 * @Author: shenjia
 * @Date: 2020-11-24 13:17:50
 * @LastEditors: shenjia
 * @LastEditTime: 2020-11-25 15:17:19
 */

import React from './React/index';
import ReactDOM from './ReactDom/index';

const element = (
  <div className="title">
    hello <span>react</span>
  </div>
);

console.log('element', React.createElement(element));

ReactDOM.render(React.createElement(element), document.getElementById('root'));
