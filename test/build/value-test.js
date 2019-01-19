"use strict";
//---------------------------
// 字符串作为值
var stringValue = 'hello world';
// 对象字面量作为值
var objectLiteralValue = {
    attribute: 'hello world'
};
// 函数作为值
var functionValue = function () { };
// 函数返回作为值
function fn() {
    return 'hello world';
}
var returnValue = fn();
// 类作为值
var classValue = /** @class */ (function () {
    function class_1() {
    }
    return class_1;
}());
//-----------------------------
// 声明字符串类型变量
var str;
// 声明字符串类型变量并初始化
var strValue = 'hello world';
// 指定类的属性类型
var Hello = /** @class */ (function () {
    function Hello() {
        this.show = true;
    }
    return Hello;
}());
// 指定函数参数和返回值类型
function sum(a, b) {
    return a + b;
}
//-------------------------------
var a;
var b;
