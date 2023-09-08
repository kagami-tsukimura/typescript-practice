"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Second = exports.First = void 0;
var First;
(function (First) {
    function testFunc() {
        console.log('First');
    }
    First.testFunc = testFunc;
})(First || (exports.First = First = {}));
var Second;
(function (Second) {
    function testFunc() {
        console.log('Second');
    }
    Second.testFunc = testFunc;
})(Second || (exports.Second = Second = {}));
First.testFunc();
Second.testFunc();
//# sourceMappingURL=namespace.js.map