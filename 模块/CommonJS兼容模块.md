# 语法扩展

在 Nodejs（CommonJS）中导出模块，只需要将导出对象赋值给 `module.exports` 即可，而 TypeScript 的模块系统采用的是ES6的 `export` 语法，两者并不兼容。为了支持 `CommonJS` 的模块系统，TypeScript增加了支持语法：

```typescript
// CommonJS 导出
export = 模块导出

// CommonJS 导入
import 名字 = require(模块)
```

> 当你在 TypeScript 代码中采用 `export = ` 导出语法时，编译选项 `module` 必须设置为 `commonjs` 或 `amd`

```typescript
let myobj = {
  a: 1, b: 2
};
export = myobj;
```

`export =` 相当于默认导出 `export default`，因而该语法在一个模块中只能出现一次：

```typescript
let myobj = {
  a: 1, b: 2
};
export = myobj;

// 错误，默认导出只能存在一个
// error TS2300: Duplicate identifier 'export='
export = {};
```

若使用 `export =` 导出一个模块，则必须使用 `import 名字 = require(模块)` 来导入此模块：

```typescript
// a.ts
export = {a: 1};

// b.ts
import b = require('./a');
```