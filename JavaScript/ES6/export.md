<!--
 * @Descripttion: 
 * @version: 
 * @Author: shenjia
 * @Date: 2020-12-06 11:19:48
 * @LastEditors: shenjia
 * @LastEditTime: 2020-12-06 11:40:58
-->

### export 和 export default 的区别？

属于ES6规范

- #### export
  ES6使用 export 和 import 来导出、导入模块

- #### export default
  为模块指定默认输出


### 扩展：module.exports 和 exports 的区别？

属于CommonJS模块规范

- #### module.exports
  Node采用CommonJS模块规范，其规定每个模块内部，module变量代表当前模块，这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。

- #### exports
  为了方便，Node为每个模块提供一个exports变量，指向module.exports。
