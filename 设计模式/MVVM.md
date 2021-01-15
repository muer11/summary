<!--
 * @Descripttion: 
 * @version: 
 * @Author: shenjia
 * @Date: 2021-01-11 10:41:54
 * @LastEditors: shenjia
 * @LastEditTime: 2021-01-11 12:41:18
-->
# MVVM

1. 数据劫持 Object.defineProperty()
2. [createDocumentFragment()](https://www.runoob.com/jsref/met-document-createdocumentfragment.html)
  - [DocumentFragments](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) 是DOM节点。它们不是主DOM树的一部分。通常的用例是创建文档片段，将元素附加到文档片段，然后将文档片段附加到DOM树。在DOM树中，文档片段被其所有的子元素所代替。
  - 因为文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面回流（对元素位置和几何上的计算）。因此，使用文档片段通常会带来更好的性能。

参考文档：
[](https://juejin.cn/post/6844903586103558158)