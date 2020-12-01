/*
 * @Descripttion:
 * @version:
 * @Author: shenjia
 * @Date: 2020-11-24 19:51:40
 * @LastEditors: shenjia
 * @LastEditTime: 2020-11-25 15:20:51
 */

const ReactDOM = {
  render: (vnode, container) => {
    // 当多次调用render函数时，不会清除原来的内容，需先清除一下挂载目标DOM的内容
    // container.innerHTML = '';
    return render(vnode, container);
  }
};

// console.log('ReactDOM', ReactDOM);

// ReactDom.render(ele, document.querySelector('#root'))
const render = (vnode, container) => {
  console.log('render', vnode, container);

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
  // console.log(tag, vnode);
  const dom = document.createElement(tag);
  // console.log('dom', dom);

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
};

const setAttribute = (dom, key, value) => {
  if (key === 'classname') {
    key = 'class';
  }

  // 方法
  if (/on\w+/.test(key)) {
    // 转小写
    key = key.toLowerCase();
    dom[key] = value || '';
  }
  // 样式
  else if (key === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && typeof value === 'object') {
      for (let k in value) {
        if (typeof value[k] === 'number') {
          dom.style[k] = value[k] + 'px';
        } else {
          dom.style[k] = value[k];
        }
      }
    }
  }
  // 普通属性
  else {
    if (key in dom) {
      dom[key] = value || '';
    }
    if (value) {
      dom.setAttribute(key, value);
    } else {
      dom.removeAttribute(key);
    }
  }
};

export default ReactDOM;
