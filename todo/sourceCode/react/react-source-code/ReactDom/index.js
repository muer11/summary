/*
 * @Descripttion:
 * @version:
 * @Author: shenjia
 * @Date: 2020-11-24 19:51:40
 * @LastEditors: shenjia
 * @LastEditTime: 2020-11-24 21:48:05
 */

const ReactDOM = {
  render
};

// ReactDom.render(ele, document.querySelector('#root'))
function render(vnode, container) {
  // 若vnode未定义，则不处理
  if (vnode === undefined) return;

  // 若vnode为字符串，则插入字符串
  if (typeof vnode === 'string') {
    const textnode = document.createTextNode(vnode);
    return container.appendChild(textnode);
  }

  // 若vnode为虚拟DOM对象
  // createElement(tag,attrs,child1,child2,child3,child4...)
  const { tag, attrs, keys, childrens } = vnode;
  const dom = document.createElement(tag);
  console.log(dom);

  if (attrs) {
    // 有属性
    Object.keys(vnode.keys).forEach((key) => {
      // 取值
      const val = attrs[key];
      setAttribute(dom, key, val);
    });
  }

  // 递归渲染子节点
  childrens.forEach((child) => render(child, dom));
  return container.appendChild(dom);
}

function setAttribute(dom, key, value) {
  if (key === 'classname') {
    key = 'class';
  }

  if (/on\w+/.test(key)) {
    // 转小写
    key = key.toLowerCase();
    dom[key] = value || '';
  } else if (key === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    }
  }
}
