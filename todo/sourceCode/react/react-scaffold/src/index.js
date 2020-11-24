/*
 * @Descripttion:
 * @version:
 * @Author: shenjia
 * @Date: 2020-11-23 12:49:14
 * @LastEditors: shenjia
 * @LastEditTime: 2020-11-24 19:48:37
 */
import React from 'react';
import ReactDom from 'react-dom';

// 方式一(JSX)
const ele = (
  <h1 className="title">
    <span className="strong">1111</span>
  </h1>
);

// 方式二(虚拟DOM:将JSX经babel编译得到的一个对象)
/* 
const ele = React.createElement(
  'h1',
  {
    className: 'title'
  },
  React.createElement(
    'span',
    {
      className: 'strong'
    },
    '1111'
  )
); 

createElement(tag,attrs,child1,child2,child3,child4...)
第1个参数：DOM节点的标签名，它的值是div、h1、span等；
第2个参数：一个对象，里面包含了所有的属性，可能包含了classname,id等
第3+参数：子节点们。。。

*/

ReactDom.render(ele, document.querySelector('#root'));

/* 
总结：
1. render的第一个参数是createElement返回的对象，即虚拟DOM，而第二个参数是挂载的目标DOM
2. render的作用就是将虚拟DOM渲染成真实的DOM
*/
