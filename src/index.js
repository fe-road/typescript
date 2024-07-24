"use strict";
var _a;
var LogLevelEnum;
(function (LogLevelEnum) {
    LogLevelEnum["INFO"] = "info";
    LogLevelEnum["WARN"] = "warning";
    LogLevelEnum["ERROR"] = "error";
    LogLevelEnum["SUCCESS"] = "success";
})(LogLevelEnum || (LogLevelEnum = {}));
;
const me = {
    name: 'Phellipe',
    age: 31,
    address: {
        label: 'my address',
        number: 120,
        // zipCode: 1140,
        // floor: 2,
    }
};
const userLog = {
    message: 'Ops, something went wrong!',
    level: LogLevelEnum.WARN,
};
if ((_a = me.address) === null || _a === void 0 ? void 0 : _a.label) { }
// const number = '42';
// const another = number as number;
const currentAgeValue = document.querySelector('#ageInput').value;
if (!isNaN(Number(currentAgeValue))) {
    // cast to number
    // const age = currentAgeValue as number;
}
