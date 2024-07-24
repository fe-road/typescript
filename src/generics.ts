// Generics
interface Car {
    id: number;
    model: string;
    year: number;
}

interface ComputerGame {
    id: number;
    title: string;
    year: number;
}

// const fetchById = <T>(id: number): T => {
//     return {};
// };

// const car = fetchById<Car>(8);
// const game = fetchById<ComputerGame>(8);

const func = <T>(a: T): T => {
    // do something
    return a;
};

const a = func('a');
const b = func(4);

const mergeObjects = <T, U, K>(obj1: T, obj2: U, obj3: K): T & U & K => {
    return { ...obj1, ...obj2, ...obj3 };
}

// Exercise
interface DatabaseItem {
    id: number;
}

interface Database<T extends DatabaseItem> {
    getAll(): Array<T>;
    getById(id: number): T | null;
    add(item: T): void;
    update(item: T): void;
    delete(id: number): void;
}

class MyDatabase<T extends DatabaseItem> implements Database<T> {
    private items: Array<T> = [];

    getAll(): Array<T> {
        return this.items;
    }
    getById(id: number): T | null {
        return this.items.find((item) => item.id === id) || null;
    }
    add(item: T): void {
        this.items.push(item);
    }
    update(item: T): void {
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            this.items[index] = item;
        }
    }
    delete(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }
}

interface Game extends DatabaseItem {
    title: string;
    year: number;
}

const db = new MyDatabase<Game>();
db.add({ id: 1, title: 'Shadow of Colossus', year: 2000 });
db.add({ id: 2, title: 'Gran Turism 6', year: 2020 });
console.log(db.getAll());