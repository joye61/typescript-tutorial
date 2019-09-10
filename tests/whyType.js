"use strict";
function showInput(input) {
    return input.show();
}
// 错误的调用
// showInput("hello world");
// 正确的版本
var input = {
    show: function () {
        return "hello world";
    }
};
showInput(input);
