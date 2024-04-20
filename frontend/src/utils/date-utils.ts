export function dateToString(date: Date): string {
    let day: string = date.getDate().toString();
    if (day.length < 2) day = '0' + day;
    let month: string = date.getMonth().toString();
    if (month.length < 2) month = '0' + month;
    return day + '.'
        + month + '.'
        + date.getFullYear();
}

export function dateToString_precise(date: Date): string {
    let day: string = date.getDate().toString();
    if (day.length < 2) day = '0' + day;
    let month: string = date.getMonth().toString();
    if (month.length < 2) month = '0' + month;
    let hour: string = date.getHours().toString();
    if (hour.length < 2) hour = '0' + hour;
    let minute: string = date.getMinutes().toString();
    if (minute.length < 2) minute = '0' + minute;
    return day + '.'
        + month + '.'
        + date.getFullYear() + ' '
        + hour + ':'
        + minute;
}

export function isDateInFuture(date: Date): boolean {
    return new Date().getTime() - date.getTime() < 0;
}