/*
    Create a function which receives a number from 1 to 12,
    and returns the name of the month associated to this number.
*/

function getMonthName(monthNumber: number): string {
    switch (monthNumber) {
        case 1:
            return 'January';
        case 2: 
            return 'February';
        case 3: 
            return 'March';
        case 4: 
            return 'April';
        case 5: 
            return 'May';
        case 6: 
            return 'June';
        case 7: 
            return 'July';
        case 8: 
            return 'August';
        case 9: 
            return 'September';
        case 10: 
            return 'October';
        case 11: 
            return 'November';
        case 12: 
            return 'December';
    }

    return 'Not valid month';
}

console.log(getMonthName(4));
console.log(getMonthName(7));
console.log(getMonthName(-2));