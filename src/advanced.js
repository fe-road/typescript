"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const userList = [];
userList.push({
    name: 'Alice',
    email: 'alice@gmail.com',
});
userList.forEach((user) => {
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
});
function sum(a, b) {
    return a + b;
}
const getUsers = () => {
    // do something
    return userList;
};
const processUsers = () => {
    // do something
};
const users = getUsers();
// any
// let a: any = 'a';
// a = 4;
// a = function() {}
// never
// const a: string & number = '4';
// const b: never;
// unknown
// const a: any = 'a';
// const b: unknown = 'b';
// const n = '4';
// const converted = n as unknown as number;
// undefined
// null
// const add = (a: number, b: number, c?: number | null) => {
//     if (c) {
//         // do something
//     }
//     // do normal calculation
// }
// add(4, 5, null);
// object
// let a: object = {};
// a = { name: 'a' };
// void
// Promises
const getPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.resolve('resolved');
});
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const promise = yield getPromise();
});
