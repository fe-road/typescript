interface User {
    name: string;
    email: string;
}

const userList: User[] = [];
userList.push({
    name: 'Alice',
    email: 'alice@gmail.com',
});

userList.forEach((user) => {
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
});

function sum(a: number, b: number): number {
    return a + b;
}

const getUsers = (): Array<User> => {
    // do something
    return userList;
};

const processUsers = (): void => {
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
const getPromise = async (): Promise<string> => {
    return Promise.resolve('resolved');
};

const run = async (): Promise<void> => {
    const promise = await getPromise();
};