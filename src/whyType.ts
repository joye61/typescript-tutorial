// 函数声明
type InputType = {
  show: () => void;
};
function showInput(input: InputType) {
  return input.show();
}


// 错误的调用
// showInput("hello world");


// 正确的版本
const input = {
  show(){
    return "hello world"
  }
}
showInput(input);
