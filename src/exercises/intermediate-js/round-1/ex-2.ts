/*
    Write a function which returns the current date in the format DD/MM/YYYY
*/

function formatCurrentDate() {
    const now = new Date();

    const date = now.getDate();
    const formattedDate = date < 10 ? `0${date}` : date;

    const month = now.getMonth() + 1;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDate}/${formattedMonth}/${now.getFullYear()}`;
}

console.log(formatCurrentDate());