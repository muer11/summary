const { createElement } = require('react');

/*
 * @Descripttion:
 * @version:
 * @Author: shenjia
 * @Date: 2020-11-24 13:17:50
 * @LastEditors: shenjia
 * @LastEditTime: 2020-11-24 17:17:51
 */
function createElementTest(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  };
}

const React = {
  createElement: createElementTest
};

const element = (
  <div className="title">
    hello <span>react</span>
  </div>
);

console.log('element', element);
