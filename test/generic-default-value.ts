interface MyType<T = string> {
  value: T;
}

let x1: MyType = {
  value: "hello world"
}

let x2: MyType = {
  value: 123
}
