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

interface Person {
    name: string; // string | number
    age: number;
    profession?: string;
    address?: AddressType;
};

interface Log {
    message: string;
    level: LogLevel;
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
    level: 'error',
}

if (me.address?.label) {

}