"use strict";
function showInput(input) {
    return input.show();
}
showInput("hello world");
showInput({
    show: function () {
        return "hello world";
    }
});
