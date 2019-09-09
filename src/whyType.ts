type InputType = {
  show: () => void;
};
function showInput(input: InputType) {
  return input.show();
}

showInput("hello world");

showInput({
  show() {
    return "hello world";
  }
});
