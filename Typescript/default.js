function myfun(a, b, c) {
    if (a === void 0) { a = "Ang"; }
    var d = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        d[_i - 3] = arguments[_i];
    }
    console.log(a, b, c, d);
}
myfun(undefined, undefined, undefined, 1, 2, 3);
