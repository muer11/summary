/*
 * @Descripttion:
 * @version:
 * @Author: shenjia
 * @Date: 2020-11-25 10:58:57
 * @LastEditors: shenjia
 * @LastEditTime: 2020-11-25 15:17:56
 */
const React = {
  createElement
};

function createElement(tag, attrs, ...children) {
  console.log('createElement', {
    tag,
    attrs,
    children
  });
  return {
    tag,
    attrs,
    children
  };
}

export default React;
