// Interfaces
interface Address {
    label: string;
    number: number;
}

interface AddressWithZipCode extends Address {
    zipCode: number;
}

interface AddressWithFloor extends Address {
    floor: number;
}

interface BelgianAddress extends AddressWithZipCode {}
interface FrenchAddress extends AddressWithFloor {}
interface DutchAddress extends AddressWithZipCode, AddressWithFloor {}

// Types
type AddressType = {
    label: string;
    number: number;
};

type AddressWithZipCodeType = AddressType & {
    zipCode: number;
}

type AddressExclusive = AddressType | {
    label: string;
    zipCode: number;
};

type AddressWithFloorType = AddressType & {
    floor: number;
}

type BelgianAddressType = AddressWithZipCodeType;
type FrenchAddressType = AddressWithFloorType;
type DutchAddressType = AddressWithZipCodeType & AddressWithFloorType;

type LogLevel = 'info' | 'warn' | 'error' | 'success';

enum LogLevelEnum {
    INFO = 'info',
    WARN = 'warning',
    ERROR = 'error',
    SUCCESS = 'success',
}

interface Person {
    name: string; // string | number
    age: number;
    profession?: string;
    address?: AddressType;
};

interface Log {
    message: string;
    // level: LogLevel;
    level: LogLevelEnum;
}

const me: Person = {
    name: 'Phellipe',
    age: 31,
    address: {
        label: 'my address',
        number: 120,
        // zipCode: 1140,
        // floor: 2,
    }
};

const userLog: Log = {
    message: 'Ops, something went wrong!',
    level: LogLevelEnum.WARN,
}

if (me.address?.label) {}


// const number = '42';
// const another = number as number;

const currentAgeValue: string = (document.querySelector('#ageInput') as HTMLInputElement).value;
if (!isNaN(Number(currentAgeValue))) {
    // cast to number
    // const age = currentAgeValue as number;
}