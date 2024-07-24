/*
    Create a function which receives an object and several properties.
    The function returns an object containing all the other properties of the object.
*/

interface PersonRound4 {
    name?: string;
    age?: number;
    gender?: string;
    occupation?: string;
    hobbies?: Array<string>;
}

const returnOtherProperties = (object: any, ...properties: Array<string>): any => {
    let cloneObject = { ...object };
    properties.forEach((prop) => {
        // delete cloneObject[prop];
        const { [prop]: toBeDeleted, ...rest } = cloneObject;
        cloneObject = rest;
    });
    return cloneObject;
};

const meRound4: PersonRound4 = {
  name: 'Phellipe Perin',
  age: 30,
  gender: 'M',
  occupation: 'Software Developer',
  hobbies: [ 'Dance', 'Games' ]
};

console.log(returnOtherProperties(me, 'name', 'gender'));