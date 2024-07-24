/*
    Write a function that return the number of days until the next birthday.
    The function should receive the date of birthday as parameter in the format "MM-DD".
*/

function remainingDaysUntilBirthday(birthday) {
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
}

function tellRemainingDays(birthday) {
    const remainingDays = remainingDaysUntilBirthday(birthday);
    console.log(remainingDays ? `Your birthday will arrive in ${remainingDays} days` : "Congrats! It's your birthday!");
}

tellRemainingDays('07-11');
tellRemainingDays('02-11');
tellRemainingDays('03-27');