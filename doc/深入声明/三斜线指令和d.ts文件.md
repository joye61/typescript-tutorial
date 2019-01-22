# 三斜线指令和 `.d.ts`

> 本教程偏向于语言语法讲解，本节内容超出教程范畴，仅做简单介绍

习惯上，常常把外部声明写在一个后缀名为 `.d.ts` 的声明文件中，然后用三斜线指令引入进来

```typescript
// jquery.d.ts 文件
declare let $: (selector: string) => {
  html: (content: string) => void;
};

// main.ts 文件
/// <reference path="./jquery.d.ts" />
$('body').html('hello world');
```

上述语句声明了 `main.ts` 依赖 `jquery.d.ts` 声明文件，在编译阶段，被依赖文件 `jquery.d.ts` 将被包含进来，就像将被依赖文件的源码展开在依赖声明处一样：

```typescript
// main.ts文件等价于将代码在三斜线指令处展开
declare let $: (selector: string) => {
  html: (content: string) => void;
};
$('body').html('hello world');
```

三斜线指令中需要注意的是 `path` 类型和 `types` 类型的区别：

```typescript
/// <reference path="./jquery.d.ts" />
/// <reference types="node" />
```

- `path` 类型声明的是对本地文件的依赖，包含路径信息
- `types` 类型声明的一般是对 `node_modules/@types` 文件夹下的类型的依赖，不包含路径信息