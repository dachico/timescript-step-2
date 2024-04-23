function padZero(value) {
    return value < 10 ? `0${value}` : `${value}`;
} // makes sure that if we have january for example we will get 01 instead of 1
export function formatDate(format, date) {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate(); // getDate() returns day of the month from range of 1 to 31 and getDay() returns day of the week on range of 0 to 6
    return format
        .replace(/YYYY/g, year.toString())
        .replace(/YY/g, year.toString().slice(2))
        .replace(/MMM/g, months[month])
        .replace(/MM/g, padZero(month + 1)) // if jan with padZero: "01" without: "1"
        .replace(/DD/g, padZero(day))
        .replace(/D/g, day.toString());
}
