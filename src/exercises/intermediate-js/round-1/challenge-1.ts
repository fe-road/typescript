/*
    Write a function that return the number of days until the next birthday.
    The function should receive the date of birthday as parameter in the format "MM-DD".
*/

function remainingDaysUntilBirthdayRound1(birthday: string): number {
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

function tellRemainingDaysRound1(birthday: string): void {
    const remainingDays = remainingDaysUntilBirthdayRound1(birthday);
    console.log(remainingDays ? `Your birthday will arrive in ${remainingDays} days` : "Congrats! It's your birthday!");
}

tellRemainingDaysRound1('07-11');
tellRemainingDaysRound1('02-11');
tellRemainingDaysRound1('03-27');