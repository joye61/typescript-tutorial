# TypeScript 教程

> 当前教程基于编译器版本 `Version 3.2.2` 验证编写

TypeScript 语法是 ECMAScript 2015 (ES2015) 语法的**超集**，也就是说TypeScript 完全兼容 ECMAScript 2015。本教程只讲解**超集中的语法扩展**部分，**请务必优先掌握 ESMAScript 2015**

# 目录

<style>
.section{
  background-color: #f0f0f0;
  color: #000;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
}
.section h3 {
  margin: 0;
  font-weight: bold;
  font-size: 24px;
}
.section ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.section ul:after{
  content: "";
  display: block;
  clear: both;
}
.section li a {
  cursor: pointer;
  display: inline-block;
  float: left;
  width: 200px;
  border: 1px solid #5f62fb;
  color: #5f62fb;
  line-height: 2;
  padding: 0 10px;
  margin: 5px;
  text-decoration: none;
}
.section li a:hover {
  color: #fff;
  background: #5f62fb;
}
</style>

<div class="section">
  <h3>1.类型</h3>
  <ul>
    <li><a>1.1 值的类型化</a></li>
    <li><a>1.2 简单类型</a></li>
    <li><a>1.3 数组类型</a></li>
    <li><a>1.4 函数类型</a></li>
    <li><a>1.5 枚举类型</a></li>
    <li><a>1.6 复合类型</a></li>
    <li><a>1.7 接口类型</a></li>
    <li><a>1.8 类类型</a></li>
  </ul>
</div>

<div class="section">
  <h3>2.泛型</h3>
  <ul>
    <li><a>2.1 泛型语法</a></li>
    <li><a>2.2 泛型约束</a></li>
    <li><a>2.3 泛型数组</a></li>
  </ul>
</div>

<div class="section">
  <h3>3.类型转换</h3>
  <ul>
    <li><a>3.1 类型别名</a></li>
    <li><a>3.2 类型断言</a></li>
  </ul>
</div>

<div class="section">
  <h3>4.模块</h3>
  <ul>
    <li><a>4.1 CommonJS兼容模块</a></li>
  </ul>
</div>

<div class="section">
  <h3>5.命名空间</h3>
  <ul>
    <li><a>5.1 命名空间</a></li>
    <li><a>5.2 空间拆分</a></li>
    <li><a>5.3 空间嵌套</a></li>
    <li><a>5.4 空间别名</a></li>
  </ul>
</div>

<div class="section">
  <h3>6.深入声明</h3>
  <ul>
    <li><a>6.1 为什么需要声明</a></li>
    <li><a>6.2 内部声明</a></li>
    <li><a>6.3 外部声明</a></li>
    <li><a>6.4 三斜线指令和d.ts文件</a></li>
  </ul>
</div>