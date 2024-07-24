/*
    Re-write all functions i the exercises and challenge from round 1 into arrow functions.
*/

// Ex. 1
const sayHello = (name: string): void => {
    console.log(`Hello ${name.toUpperCase()}`);
};

// Ex. 2
const formatCurrentDate = (): string => {
    const now = new Date();

    const date = now.getDate();
    const formattedDate = date < 10 ? `0${date}` : date;

    const month = now.getMonth() + 1;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDate}/${formattedMonth}/${now.getFullYear()}`;
};

// Ex. 3
const countConsonants = (str: string): number => {
    const formattedStr = str.toLowerCase()
        .replaceAll('a', '')
        .replaceAll('e', '')
        .replaceAll('i', '')
        .replaceAll('o', '')
        .replaceAll('u', '');

    return formattedStr.length;
};

// Challenge 1
const remainingDaysUntilBirthday = (birthday: string): number => {
    // validation...

    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    now.setTime(now.getTime() - (1000 * 60 * now.getTimezoneOffset()));

    const dateStr = `${now.getFullYear()}-${birthday}`;
    const birthdayDate = new Date(dateStr);
    let difference = birthdayDate.getTime() - now.getTime();

    if (now.getTime() > birthdayDate.getTime()) {
        birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
        difference = birthdayDate.getTime() - now.getTime();
    }

    return difference / (1000 * 60 * 60 * 24);
};

const tellRemainingDays = (birthday: string): void => {
    const remainingDays = remainingDaysUntilBirthday(birthday);
    console.log(remainingDays ? `Your birthday will arrive in ${remainingDays} days` : "Congrats! It's your birthday!");
};
