
//---------------------------

// 字符串作为值
let stringValue = 'hello world';

// 对象字面量作为值
let objectLiteralValue = {
  attribute: 'hello world'
};

// 函数作为值
let functionValue = function(){};

// 函数返回作为值
function fn(){
  return 'hello world';
}
let returnValue = fn();

// 类作为值
let classValue = class {}

//-----------------------------

// 声明字符串类型变量
let str: string;

// 声明字符串类型变量并初始化
let strValue: string = 'hello world';

// 指定类的属性类型
class Hello {
  show: boolean = true;
}

// 指定函数参数和返回值类型
function sum(a: number, b: number): number {
  return a + b;
}

//-------------------------------
let a: number;
let b: typeof a;
