function f1(p1) {
    if (p1 === void 0) { p1 = true; }
    console.log("value of p1 : " + p1);
}
f1();
f1(false);
function f2(p1) {
    console.log(p1);
}
f2();
f2("hello");
function f3() {
    var p1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        p1[_i] = arguments[_i];
    }
    for (var i = 0; i < p1.length; i++) {
        console.log(p1[i]);
    }
}
console.log("Rest params : 1 param -------------");
f3(100);
console.log("Rest params : 4 params -------------");
f3(200, 300, 400, 500);
console.log("Rest params : 2 params -------------");
f3(1000, 2000);
var f4 = function () {
    console.log("Function using variable syntax");
};
f4();
// arrow functins - lambda functions
var f5 = function () { return console.log("Simple arrow function"); };
var add = function (x, y) { return x + y; };
f5();
console.log(add(200, 400));
