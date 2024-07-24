"use strict";
// const fetchById = <T>(id: number): T => {
//     return {};
// };
// const car = fetchById<Car>(8);
// const game = fetchById<ComputerGame>(8);
const func = (a) => {
    // do something
    return a;
};
const a = func('a');
const b = func(4);
const mergeObjects = (obj1, obj2, obj3) => {
    return Object.assign(Object.assign(Object.assign({}, obj1), obj2), obj3);
};
class MyDatabase {
    constructor() {
        this.items = [];
    }
    getAll() {
        return this.items;
    }
    getById(id) {
        return this.items.find((item) => item.id === id) || null;
    }
    add(item) {
        this.items.push(item);
    }
    update(item) {
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            this.items[index] = item;
        }
    }
    delete(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
}
const db = new MyDatabase();
db.add({ id: 1, title: 'Shadow of Colossus', year: 2000 });
db.add({ id: 2, title: 'Gran Turism 6', year: 2020 });
console.log(db.getAll());
